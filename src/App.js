// App.js
import React, { useState, useEffect } from 'react';
import Header from './component/Header/Header';
import NotesGrid from './NotesGrid/NotesGrid';
import NoteModal from './NoteModal/NoteModal';
import EmptyState from './EmptyState/EmptyState';
import { useLocalStorage } from './hooks/useLocalStorage';

const MiniNotesApp = () => {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useLocalStorage('theme', false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });

  // Filter notes based on search term
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Add or update note
  const handleSaveNote = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.description.trim()) return;

    if (currentNote) {
      // Update existing note
      setNotes(notes.map(note =>
        note.id === currentNote.id
          ? { ...note, ...formData }
          : note
      ));
    } else {
      // Add new note
      const newNote = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        createdAt: new Date().toISOString()
      };
      setNotes([...notes, newNote]);
    }

    handleCloseModal();
  };

  // Edit note
  const handleEditNote = (note) => {
    setCurrentNote(note);
    setFormData({
      title: note.title,
      description: note.description
    });
    setIsModalOpen(true);
  };

  // Delete note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Open modal for new note
  const handleNewNote = () => {
    setCurrentNote(null);
    setFormData({ title: '', description: '' });
    setIsModalOpen(true);
  };

  // Close modal and reset form
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentNote(null);
    setFormData({ title: '', description: '' });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'dark bg-gray-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'
    }`}>
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
        onNewNote={handleNewNote}
      />
      
      <main className="container mx-auto px-4 py-8">
        {filteredNotes.length === 0 ? (
          <EmptyState 
            hasSearchTerm={!!searchTerm}
            isDarkMode={isDarkMode}
            onNewNote={handleNewNote}
          />
        ) : (
          <NotesGrid
            notes={filteredNotes}
            onEditNote={handleEditNote}
            onDeleteNote={handleDeleteNote}
            isDarkMode={isDarkMode}
          />
        )}
      </main>

      <NoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSaveNote}
        formData={formData}
        onInputChange={handleInputChange}
        currentNote={currentNote}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default MiniNotesApp;
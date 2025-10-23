import React from 'react';
import NoteCard from './NoteCard';

const NotesGrid = ({ notes, onEditNote, onDeleteNote, isDarkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onEdit={onEditNote}
          onDelete={onDeleteNote}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
};

export default NotesGrid;
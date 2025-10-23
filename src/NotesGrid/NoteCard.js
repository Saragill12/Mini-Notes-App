// components/NotesGrid/NoteCard.js
import React from 'react';

const NoteCard = ({ note, onEdit, onDelete, isDarkMode }) => {
  return (
    <div
      className={`rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        isDarkMode
          ? 'bg-gray-800 border-gray-700 hover:border-indigo-500'
          : 'bg-white border-gray-200 hover:border-indigo-300'
      }`}
    >
      <div className="p-6">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">
          {note.title}
        </h3>
        <p className={`text-sm mb-4 line-clamp-4 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {note.description}
        </p>
        <div className="flex justify-between items-center">
          <span className={`text-xs ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {new Date(note.createdAt).toLocaleDateString()}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(note)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'hover:bg-gray-700 text-blue-400'
                  : 'hover:bg-gray-100 text-blue-500'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'hover:bg-gray-700 text-red-400'
                  : 'hover:bg-gray-100 text-red-500'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
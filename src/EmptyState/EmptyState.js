import React from 'react';

const EmptyState = ({ hasSearchTerm, isDarkMode, onNewNote }) => {
  return (
    <div className="text-center py-16">
      <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h2 className="text-xl font-semibold mb-2">
        {hasSearchTerm ? 'No matching notes found' : 'No notes yet'}
      </h2>
      <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {hasSearchTerm ? 'Try adjusting your search terms' : 'Create your first note to get started'}
      </p>
      {!hasSearchTerm && (
        <button
          onClick={onNewNote}
          className={`px-6 py-3 rounded-lg font-semibold transition-all ${
            isDarkMode
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg'
          }`}
        >
          Create Your First Note
        </button>
      )}
    </div>
  );
};

export default EmptyState;
import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, isDarkMode }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`pl-10 pr-4 py-2 rounded-lg border transition-colors ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600 placeholder-gray-400 focus:border-indigo-500'
            : 'bg-white border-gray-300 placeholder-gray-500 focus:border-indigo-400'
        } focus:outline-none focus:ring-2 focus:ring-indigo-200`}
      />
      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

export default SearchBar;
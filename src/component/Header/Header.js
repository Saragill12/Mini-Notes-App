import React from 'react';
import SearchBar from './SearchBar';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';

const Header = ({ searchTerm, onSearchChange, isDarkMode, onThemeToggle, onNewNote }) => {
  return (
    <header className={`sticky top-0 z-10 backdrop-blur-lg border-b ${
      isDarkMode 
        ? 'bg-gray-900/80 border-gray-700' 
        : 'bg-white/80 border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${
              isDarkMode ? 'bg-indigo-600' : 'bg-indigo-500'
            }`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Mini Notes
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={onSearchChange}
              isDarkMode={isDarkMode}
            />
            
            <ThemeToggle 
              isDarkMode={isDarkMode}
              onToggle={onThemeToggle}
            />

            <button
              onClick={onNewNote}
              className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                isDarkMode
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-md hover:shadow-lg'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Note
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

const NoteModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  formData, 
  onInputChange, 
  currentNote, 
  isDarkMode 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`rounded-xl w-full max-w-md transform transition-all ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">
            {currentNote ? 'Edit Note' : 'New Note'}
          </h2>
          <form onSubmit={onSubmit}>
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={onInputChange}
                  placeholder="Enter note title"
                  className={`w-full px-3 py-2 rounded-lg border transition-colors ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 placeholder-gray-400 focus:border-indigo-500'
                      : 'bg-white border-gray-300 placeholder-gray-500 focus:border-indigo-400'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-200`}
                  required
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={onInputChange}
                  placeholder="Enter note description"
                  rows="4"
                  className={`w-full px-3 py-2 rounded-lg border transition-colors resize-none ${
                    isDarkMode
                      ? 'bg-gray-700 border-gray-600 placeholder-gray-400 focus:border-indigo-500'
                      : 'bg-white border-gray-300 placeholder-gray-500 focus:border-indigo-400'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-200`}
                  required
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`flex-1 px-4 py-2 rounded-lg font-medium text-white transition-colors ${
                  isDarkMode
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-indigo-500 hover:bg-indigo-600'
                }`}
              >
                {currentNote ? 'Update' : 'Create'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
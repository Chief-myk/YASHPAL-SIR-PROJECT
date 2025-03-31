// components/Notes.js
import React from 'react';
import { Link } from 'react-router-dom';

const notesData = [
  { 
    title: 'Engineering Mechanics Notes', 
    path: '/emn',
    description: 'Comprehensive notes covering all aspects of engineering mechanics',
    color: 'from-blue-500 to-blue-700'
  },
  { 
    title: 'Manufacturing Notes', 
    path: '/mpl',
    description: 'Detailed manufacturing processes and techniques',
    color: 'from-purple-500 to-purple-700'
  },
  { 
    title: 'Engineering Graphics Notes', 
    path: '/graphics',
    description: 'Fundamentals of engineering drawing and graphics',
    color: 'from-green-500 to-green-700'
  },
  { 
    title: 'Workshop Notes', 
    path: '/workshop',
    description: 'Practical workshop techniques and safety measures',
    color: 'from-red-500 to-red-700'
  },
];

const Notes = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12">
          Notes Section
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {notesData.map((note, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${note.color} p-6 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-semibold mb-4 text-center min-h-[3.5rem] flex items-center justify-center">
                  {note.title}
                </h2>
                <p className="text-gray-200 mb-6 text-center">
                  {note.description}
                </p>
                <div className="mt-auto text-center">
                  <Link to={note.path}>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black cursor-pointer font-bold py-2 px-6 rounded-full shadow transition-all duration-300">
                      View Notes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notes;
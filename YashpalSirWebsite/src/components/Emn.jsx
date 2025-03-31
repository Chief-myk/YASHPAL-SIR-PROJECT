import React from "react";
import { Link } from "react-router-dom";

const Emn = () => {
  const units = [
    { 
      name: "Unit 1", 
      description: "Introduction to Engineering Mechanics", 
      icon: "📚" 
    },
    { 
      name: "Unit 2", 
      description: "Statics of Particles and Rigid Bodies", 
      icon: "⚖️" 
    },
    { 
      name: "Unit 3", 
      description: "Friction and Its Applications", 
      icon: "🔄" 
    },
    { 
      name: "Unit 4", 
      description: "Kinematics and Kinetics", 
      icon: "🚀" 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-2">
          Engineering Mechanics
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Comprehensive notes covering all units of Engineering Mechanics curriculum
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {units.map((unit, index) => (
            <Link
              key={index}
              to={`/emn/${unit.name.toLowerCase().replace(" ", "-")}`}
              className="group"
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col border-l-4 border-blue-500 hover:border-blue-600">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{unit.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {unit.name}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">{unit.description}</p>
                  </div>
                </div>
                <div className="mt-auto flex justify-end">
                  <span className="inline-flex items-center text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
                    View Notes
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/notes"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Notes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Emn;
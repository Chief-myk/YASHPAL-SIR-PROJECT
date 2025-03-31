import React from "react";
import { Link } from "react-router-dom";

const Mpl = () => {
  const units = [
    { 
      name: "Unit 1", 
      description: "Introduction to Manufacturing Processes", 
      icon: "🏭" 
    },
    { 
      name: "Unit 2", 
      description: "Casting and Forming Processes", 
      icon: "🔥" 
    },
    { 
      name: "Unit 3", 
      description: "Machining and Joining Processes", 
      icon: "⚙️" 
    },
    { 
      name: "Unit 4", 
      description: "Modern Manufacturing Techniques", 
      icon: "🤖" 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-2">
          Manufacturing Processes
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Detailed notes on manufacturing techniques and industrial processes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {units.map((unit, index) => (
            <Link
              key={index}
              to={`/mpl/${unit.name.toLowerCase().replace(" ", "-")}`}
              className="group transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col border-t-4 border-blue-400">
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{unit.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {unit.name}
                    </h2>
                    <p className="text-gray-600 text-sm mt-1">{unit.description}</p>
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Last updated: 2 weeks ago</span>
                  <span className="inline-flex items-center text-blue-500 group-hover:text-blue-700 transition-colors duration-300 text-sm font-medium">
                    Explore
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
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

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/notes"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center"
          >
            Back to All Notes
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-center"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mpl;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const hoverCard = {
    hover: {
      y: -8,
      scale: 1.03,
      boxShadow: "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Manufacturing Processes
          </h1>
          <motion.p 
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Detailed notes on manufacturing techniques and industrial processes
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {units.map((unit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to={`/mpl/${unit.name.toLowerCase().replace(" ", "-")}`}
                className="group block"
              >
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col border-t-4 border-blue-400"
                  variants={hoverCard}
                >
                  <div className="flex items-start mb-4">
                    <motion.span 
                      className="text-3xl mr-4"
                      variants={iconVariants}
                    >
                      {unit.icon}
                    </motion.span>
                    <div>
                      <motion.h2 
                        className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {unit.name}
                      </motion.h2>
                      <p className="text-gray-600 text-sm mt-1">{unit.description}</p>
                    </div>
                  </div>
                  <motion.div 
                    className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center"
                    whileHover={{ x: 3 }}
                  >
                    <span className="text-xs text-gray-500">Last updated: 2 weeks ago</span>
                    <motion.span 
                      className="inline-flex items-center text-blue-500 group-hover:text-blue-700 transition-colors duration-300 text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      Explore
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        whileHover={{ x: 5 }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </motion.svg>
                    </motion.span>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/notes"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                whileHover={{ x: -5 }}
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
              Back to All Notes
            </motion.div>
          </Link>
          <Link
            to="/"
            className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                whileHover={{ x: -5 }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
              Return Home
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Mpl;
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const hoverCard = {
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-2">
            Engineering Mechanics
          </h1>
          <motion.p 
            className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive notes covering all units of Engineering Mechanics curriculum
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
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={`/emn/${unit.name.toLowerCase().replace(" ", "-")}`}
                className="group block"
              >
                <motion.div 
                  className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col border-l-4 border-blue-500"
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
                  <div className="mt-auto flex justify-end">
                    <motion.span 
                      className="inline-flex items-center text-blue-500 group-hover:text-blue-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      View Notes
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
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
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/notes"
            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
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
            <motion.span whileHover={{ x: 5 }}>
              Back to All Notes
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Emn;
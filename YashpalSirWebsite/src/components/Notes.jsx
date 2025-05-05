import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const notesData = [
  { 
    title: 'Engineering Mechanics Notes', 
    path: '/emn',
    description: 'Comprehensive notes covering all aspects of engineering mechanics',
    color: 'from-blue-500 to-blue-700',
    icon: '📐'
  },
  { 
    title: 'Manufacturing Notes', 
    path: '/mpl',
    description: 'Detailed manufacturing processes and techniques',
    color: 'from-purple-500 to-purple-700',
    icon: '🏭'
  },
  { 
    title: 'Engineering Graphics Notes', 
    path: '/egl',
    description: 'Fundamentals of engineering drawing and graphics',
    color: 'from-green-500 to-green-700',
    icon: '✏️'
  },
  { 
    title: 'Workshop Notes', 
    path: '/workshop',
    description: 'Practical workshop techniques and safety measures',
    color: 'from-red-500 to-red-700',
    icon: '🔧'
  },
];

const Notes = () => {
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
    hidden: { opacity: 0, y: 50 },
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

  const flipVariants = {
    offscreen: {
      rotateX: 90,
      opacity: 0
    },
    onscreen: {
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const hoverCard = {
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Notes Section
        </motion.h1>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
        >
          {notesData.map((note, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-br ${note.color} p-6 rounded-xl shadow-lg`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              custom={index}
            >
              <motion.div 
                className="h-full flex flex-col"
                variants={flipVariants}
              >
                <motion.div
                  className="text-4xl mb-4 text-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {note.icon}
                </motion.div>
                <h2 className="text-2xl font-semibold mb-4 text-center min-h-[3.5rem] flex items-center justify-center">
                  {note.title}
                </h2>
                <p className="text-gray-200 mb-6 text-center">
                  {note.description}
                </p>
                <div className="mt-auto text-center">
                  <Link to={note.path}>
                    <motion.button 
                      className="bg-white bg-opacity-20 hover:bg-opacity-30 text-black cursor-pointer font-bold py-2 px-6 rounded-full shadow"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      View Notes
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <motion.span
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </motion.span>
            <motion.span
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              Back to Home
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Notes;
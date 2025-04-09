import React from 'react';
import { motion } from 'framer-motion';
import { FaBlog } from 'react-icons/fa';

const Blogs = () => {
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center justify-center">
      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white opacity-10 blur-sm"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 30 - 15],
            x: [0, Math.random() * 30 - 15],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Coming Soon Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center z-10"
      >
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="inline-block mb-6"
        >
          <FaBlog className="text-white text-6xl sm:text-7xl mx-auto drop-shadow-xl" />
        </motion.div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
          Blogs Coming Soon
        </h1>
        <p className="text-blue-200 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Stay tuned! We’re crafting insightful articles, updates, and knowledge that will inspire, educate, and engage.
        </p>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2563EB", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-white text-blue-800 font-semibold rounded-full shadow-md transition duration-300"
        >
          Notify Me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Blogs;

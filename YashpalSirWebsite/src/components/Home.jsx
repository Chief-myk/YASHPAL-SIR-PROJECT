// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  // Animation variants
  const floatingVariants = {
    initial: { y: -10 },
    animate: { 
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const horizontalVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5
      }
    }
  };

  const flipVariants = {
    offscreen: { 
      rotateY: 90,
      opacity: 0 
    },
    onscreen: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-700 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl text-center relative z-10">
        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={horizontalVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            Professor Yashpal Chopra 
          </motion.h1>
          
          <motion.p 
            className="text-xl italic mb-6 text-indigo-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Certified Career Counselor || Freelancer || Assistant Professor by Profession || Diehard Mechanical Engg. || Entrepreneur by Choice || Nature Lover
          </motion.p>
          
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={flipVariants}
          >
            <motion.img
              src="/fotor-2025032912356.png"
              alt="Professor Yashpal Chopra"
              className="rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 shadow-lg border-4 border-white"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.p variants={staggerItem} className="text-lg leading-relaxed">
              With over 20 years of teaching experience, Professor Yashpal Chopra is a distinguished educator at
              <strong> Dr. Akhilesh Das Gupta Institute of Technology</strong>. His passion for teaching and mentorship has inspired
              countless students to excel in the field of technology and engineering.
            </motion.p>
            
            <motion.p variants={staggerItem} className="text-lg leading-relaxed">
              He specializes in <strong> Automation, Robotics, and Mechanical Engineering.</strong> His multifaceted expertise spans
              teaching, research guidance, quality management, and student counseling, making him a transformative
              figure in technical education.
            </motion.p>
            
            <motion.p variants={staggerItem} className="text-lg leading-relaxed">
              With a track record of publishing multiple research papers and mentoring students in national-level competitions,
              he continues to shape the future of technology with his unparalleled dedication.
              A distinguished academic leader with over 12 years of experience in engineering education and research.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3
            }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold rounded-lg shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/about" className="hover:text-gray-300 transition">
                Learn More
              </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
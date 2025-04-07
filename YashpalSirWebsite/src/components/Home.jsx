// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaRobot, FaMicrochip, FaCogs, FaBrain } from 'react-icons/fa';
import { GiMechanicalArm } from 'react-icons/gi';

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
      {/* Robotic decorative elements */}
      <div className="absolute top-20 right-20 opacity-5">
        <GiMechanicalArm className="text-blue-500 text-9xl" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-5">
        <FaCogs className="text-blue-500 text-9xl" />
      </div>
      <div className="absolute top-1/3 left-1/4 opacity-5">
        <FaRobot className="text-blue-500 text-9xl" />
      </div>

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
          viewport={{ once: true, amount: 0.1 }}
          variants={horizontalVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            <FaRobot className="mr-4 text-blue-400" /> 
            Yashpal Chopra
            <FaMicrochip className="ml-4 text-blue-400" />
          </motion.h1>
          
          <motion.p 
            className="text-xl italic mb-6 text-indigo-200 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaBrain className="mr-2" />
            Certified Career Counselor II Entrepreneur by Choice II Robotist II Designer II Diehard Mechanical Engg. II Assistant Professor by Choice II Nature lover.
            <GiMechanicalArm className="ml-2" />
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
              className="rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 shadow-lg border-4 border-blue-400"
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
            Yashpal Chopra is the Founder and CEO of the <strong>Career Margdarshak</strong>  - the most affordable Ed-tech Platform, which provides Counselling services, webinars, workshop in the domain of career passion and success. Mr. Chopra holds Bachler's, Masters and Doctorate in Engineering disciplines from the prestigious universities of India. He also holds a Master of Business Administration degree from <strong> Deen Bandu Chotu Ram University of Science and Technology (DCRUST), Murthal, Haryana.</strong>
            </motion.p>
            
            <motion.p variants={staggerItem} className="text-lg leading-relaxed">
           <strong>Yashpal Chopra</strong>, is a dedicated academician and researcher with over <strong> 13 years of experience</strong> in the field of <strong>Mechanical Engineering and Automation & Robotics. </strong>   He specializes in guiding engineering minds, innovating through research, and contributing to curriculum development.
            </motion.p>
            
            <motion.p variants={staggerItem} className="text-lg leading-relaxed">
            His academic journey spans prestigious institutions like <strong> Delhi Technological University, Jagan Nath University, and Maharshi Dayanand University,</strong> where I have served as an Assistant Professor, mentor, and departmental contributor. I'm passionate about fostering curiosity in engineering domains like <strong>Machine Design, Renewable Energy, Robotics, and Advanced Manufacturing.</strong> 
            </motion.p>
            <motion.p variants={staggerItem} className="text-lg leading-relaxed">
            He have mentored numerous student innovations—ranging from <strong>Electric Bikes</strong>  to <strong>Wind-Solar Hybrid Systems</strong> —and published research on topics like <strong> carbon nanotube modeling</strong> and <strong> sustainable power generation.</strong>
            </motion.p>
            <motion.p variants={staggerItem} className="text-lg leading-relaxed">
            With a strong foundation in <strong> academics, industry practices, </strong>and <strong> career counseling,</strong> my goal is to bridge the gap between theoretical learning and real-world application.
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
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <FaRobot />
              <Link to="/about" className="hover:text-gray-300 transition">
                Learn More
              </Link>
              <FaMicrochip />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
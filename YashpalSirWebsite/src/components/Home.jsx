// components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRobot, FaMicrochip, FaCogs, FaBrain } from "react-icons/fa";
import { GiMechanicalArm } from "react-icons/gi";

const Home = () => {
  // Animation variants
  const floatingVariants = {
    initial: { y: -10 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const horizontalVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  const flipVariants = {
    offscreen: {
      rotateY: 90,
      opacity: 0,
    },
    onscreen: {
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
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
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"
            variants={floatingVariants}
            initial="initial"
            animate="animate"
          >
            <FaRobot className="mr-4 text-blue-400" />
            Yashpal Chopra
            <FaMicrochip className="ml-4 text-blue-400" />
          </motion.h1>

          <motion.p
            className="text-xl italic mb-6 text-indigo-200 flex items-center justify-center flex-wrap gap-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaBrain className="mr-2" />
            <span className="font-semibold text-indigo-100">Certified Career Counselor</span> II 
            <span className="font-semibold text-indigo-100">Entrepreneur</span> II 
            <span className="font-semibold text-indigo-100">Youtuber</span> II 
            <span className="font-semibold text-indigo-100">Nature lover</span> II 
            <span className="font-semibold text-indigo-100">Assistant Professor</span> II 
            <span className="font-semibold text-indigo-100">Diehard Mechanical Engineering</span> II 
            <span className="font-semibold text-indigo-100">Designer</span> II 
            <span className="font-semibold text-indigo-100">Robotist</span>
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
            <motion.p
              variants={staggerItem}
              className="text-lg leading-relaxed"
            >
              <span className="font-bold text-indigo-300">Yashpal Chopra</span> is a dedicated educator, researcher, and mentor
              with over <span className="font-bold text-blue-300">15 years</span> of academic and industrial experience across
              engineering, robotics, artificial intelligence, and management. He
              has been associated with reputed institutions such as 
              <span className="font-medium text-indigo-200"> Delhi Technological University</span>, 
              <span className="font-medium text-indigo-200"> Jagannath University</span>, and
              premier institute affiliated with 
              <span className="font-medium text-indigo-200"> Guru Gobind Singh Indraprastha University</span>,
              and holds a <span className="font-bold text-blue-300">Post-Graduate Certification in Robotics & AI</span> from 
              <span className="font-medium text-indigo-200"> Indian Institute of Technology Bhubaneswar</span>. He is also a
              member of the <span className="font-medium text-indigo-200">International Society for Engineers</span>.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg leading-relaxed"
            >
              Currently serving as an <span className="font-bold text-indigo-300">Assistant Professor</span>, he is actively
              involved in teaching, research, and student mentorship, with a
              focus on <span className="font-medium text-blue-300">automation</span>, 
              <span className="font-medium text-blue-300"> advanced mechanical systems</span>, and
              <span className="font-medium text-blue-300"> real-world innovation</span>. He is also the 
              <span className="font-bold text-indigo-300"> Founder and Faculty Coordinator</span> of the 
              <span className="font-medium text-indigo-200"> AAIRO Society</span>, where he leads technical events, workshops, and
              student development initiatives.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg leading-relaxed"
            >
              Through this platform, he shares <span className="font-medium text-blue-300">academic resources</span>,
              <span className="font-medium text-blue-300"> research insights</span>, and
              <span className="font-medium text-blue-300"> career guidance</span> to help students bridge the gap
              between theoretical learning and practical application while
              fostering innovation and long-term professional growth. It also
              serves as a comprehensive space that brings together his teaching
              materials, research work, career counselling services,
              photography, and more—creating a single destination for learners,
              professionals, and curious minds.
            </motion.p>
          </motion.div>

          <motion.div className="flex justify-center items-center my-10 gap-16 flex-wrap">
            <motion.div className="bg-gradient-to-br from-sky-900 to-indigo-900 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px]">
              <strong className="text-3xl text-blue-300 block">15+</strong>
              <h3 className="text-indigo-200 mt-2">Years of experience</h3>
            </motion.div>
            <motion.div className="bg-gradient-to-br from-sky-900 to-indigo-900 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px]">
              <strong className="text-3xl text-blue-300 block">5+</strong>
              <h3 className="text-indigo-200 mt-2">Institutions served</h3>
            </motion.div>
            <motion.div className="bg-gradient-to-br from-sky-900 to-indigo-900 p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 min-w-[180px]">
              <strong className="text-3xl text-blue-300 block">6+</strong>
              <h3 className="text-indigo-200 mt-2">Research publications</h3>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex gap-20 justify-center flex-wrap"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
            viewport={{ once: true }}
          >
            <Link to="/about" className="hover:text-gray-300 transition">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-lg font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaRobot />
                Explore My Work
                <FaMicrochip />
              </motion.button>
            </Link>
            <Link to="/services" className="hover:text-gray-300 transition">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-lg font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaRobot />
                Book a Counselling Session
                <FaMicrochip />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
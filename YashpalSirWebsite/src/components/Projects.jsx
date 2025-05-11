import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaExpand, FaGithub, FaYoutube } from "react-icons/fa";

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
  show: { opacity: 1, y: 0 }
};

const projects = [
  {
    title: "PLASTIC RECYCLING MACHINE",
    year: "2025",
    description: "An innovative solution for plastic waste management with advanced sorting and processing capabilities.",
    images: ["/q.jpeg"],
    video: "/p.mp4",
    tags: ["Sustainability", "Automation", "Eco-friendly"]
  },
  {
    title: "HEXA LEGGED ALL TERRAIN VEHICLE",
    year: "2015",
    description: "A robust six-legged robotic vehicle designed for extreme terrain exploration and industrial applications.",
    images: ["/r.jpeg", "/s.jpeg", "/t.jpeg", "/u.jpeg", "/v.jpeg", "/w.jpeg"],
    tags: ["Robotics", "All-terrain", "Hexapod"]
  },
  {
    title: "ELECTRIC VEHICLE",
    year: "2022",
    description: "High-performance electric vehicle prototype with cutting-edge battery technology and energy recovery systems.",
    images: ["/y.jpeg", "/z.jpeg"],
    tags: ["EV", "Green Energy", "Automotive"]
  },
  {
    title: "VASU",
    year: "2023",
    description: "Upcoming project with details to be revealed soon. Stay tuned for our latest innovation.",
    images: [],
    tags: ["Coming Soon"]
  }
];

const Project = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-950 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              transition: {
                duration: Math.random() * 30 + 20,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Engineering Synergy <span className="text-yellow-400">2025</span>
            </motion.h1>
            <motion.p
              className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Showcasing groundbreaking engineering projects that push the boundaries of innovation and sustainability
            </motion.p>
          </motion.div>

          {/* Featured Gallery */}
          <motion.div className="mb-24" variants={item}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 flex-wrap">
              {["/a.jpeg", "/b.jpeg", "/c.jpeg", "/d.jpeg", "/e.jpeg", "/f.jpeg", "g.jpeg", "h.jpeg"].map((src, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-xl aspect-square shadow-2xl"
                  whileHover={{ scale: 1.03 }}
                  onHoverStart={() => setHoveredImage(idx)}
                  onHoverEnd={() => setHoveredImage(null)}
                >
                  <img
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-fill transition-all duration-500"
                    style={{
                      transform: hoveredImage === idx ? "scale(1.1)" : "scale(1)",
                      filter: hoveredImage === idx ? "brightness(1.1)" : "brightness(0.9)"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">Project Preview #{idx + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Showcase */}
          <motion.div variants={item}>
            <div className="flex overflow-x-auto scrollbar-hide mb-8 flex-wrap sm:flex-nowrap gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium whitespace-nowrap transition-all text-sm sm:text-base ${activeTab === index
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                >
                  {project.title}
                </button>
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
              {/* Project Header */}
              <div className="p-6 sm:p-8 border-b border-gray-700/50">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <motion.h2
                      className="text-2xl sm:text-3xl font-bold text-white mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {projects[activeTab].title}
                    </motion.h2>
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium">
                        {projects[activeTab].year}
                      </span>
                      <div className="ml-3 flex flex-wrap gap-2">
                        {projects[activeTab].tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <div className="flex space-x-3 mt-4 sm:mt-0">
                    <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                      <FaGithub className="text-xl text-white" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                      <FaYoutube className="text-xl text-white" />
                    </button>
                  </div> */}
                </div>
                <motion.p
                  className="text-gray-300 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {projects[activeTab].description}
                </motion.p>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                {activeTab === 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      {projects[0].images.map((img, idx) => (
                        <motion.div
                          key={idx}
                          className="rounded-xl overflow-hidden shadow-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * idx }}
                        >
                          <img
                            src={img}
                            alt={`Project ${idx + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                    <div className="relative">
                      <div className={`rounded-xl overflow-hidden shadow-2xl ${fullscreen ? "fixed inset-0 z-50 bg-black" : ""}`}>
                        <video
                          src={projects[0].video}
                          className="w-full h-auto rounded-xl"
                          controls={videoPlaying}
                          autoPlay={videoPlaying}
                          loop
                        />
                        {!videoPlaying && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <button
                              onClick={toggleVideo}
                              className="p-4 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                            >
                              <FaPlay className="text-white text-3xl" />
                            </button>
                          </div>
                        )}
                      </div>
                      <div className="absolute bottom-4 right-4 z-10">
                        <button
                          onClick={toggleFullscreen}
                          className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <FaExpand className="text-white text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects[1].images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        className="relative group rounded-xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src={img}
                          alt={`Hexapod ${idx + 1}`}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white font-medium">Hexapod Component #{idx + 1}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3">
                      <div className="grid grid-cols-2 gap-4">
                        {projects[2].images.map((img, idx) => (
                          <motion.div
                            key={idx}
                            className="rounded-xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                          >
                            <img
                              src={img}
                              alt={`EV ${idx + 1}`}
                              className="w-full h-64 object-cover"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/3 bg-gray-700/30 rounded-xl p-6 backdrop-blur-sm border border-gray-600/30">
                      <h3 className="text-xl font-bold text-white mb-4">Specifications</h3>
                      <ul className="space-y-3">
                        <li className="flex justify-between border-b border-gray-600/30 pb-2">
                          <span className="text-gray-300">Range</span>
                          <span className="text-blue-300 font-medium">350 km</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-600/30 pb-2">
                          <span className="text-gray-300">Battery</span>
                          <span className="text-blue-300 font-medium">75 kWh</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-600/30 pb-2">
                          <span className="text-gray-300">Charging</span>
                          <span className="text-blue-300 font-medium">150 kW DC</span>
                        </li>
                        <li className="flex justify-between border-b border-gray-600/30 pb-2">
                          <span className="text-gray-300">0-100 km/h</span>
                          <span className="text-blue-300 font-medium">4.2s</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <motion.div
                    className="flex flex-col items-center justify-center py-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative w-40 h-40 mb-8">
                      <div className="absolute inset-0 rounded-full bg-blue-900/30 animate-ping"></div>
                      <div className="absolute inset-4 rounded-full bg-blue-800/50 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                    <p className="text-lg text-gray-400 max-w-md text-center">
                      We're working hard on our next innovation. Stay tuned for the big reveal!
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Additional Gallery */}
          <motion.div className="mt-24" variants={item}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">More Project Highlights</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {["/k.jpeg", "/l.jpeg", "/m.jpeg", "/n.jpeg", "/o.jpeg","p.jpeg"].map((src, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-xl aspect-square shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * idx }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${idx + 7}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Project Detail #{idx + 7}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="mt-24 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>© {new Date().getFullYear()} Engineering Synergy. All rights reserved.</p>
            <p className="mt-2 text-sm">Pushing the boundaries of innovation and technology</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
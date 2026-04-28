import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaExpand, FaImage } from "react-icons/fa";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
  },
  {
    title: "Remote Control Truck",
     year: "2023",
    description: "Upcoming project with details to be revealed soon. Stay tuned for our latest innovation.",
    images: [],
    tags: ["Coming Soon"]
  },
  {
    title: "Floor Mopping Robot",
     year: "2023",
    description: "Upcoming project with details to be revealed soon. Stay tuned for our latest innovation.",
    images: [],
    tags: ["Coming Soon"]
  },
  {
    title: "Robbo Soccer Bot",
     year: "2023",
    description: "Upcoming project with details to be revealed soon. Stay tuned for our latest innovation.",
    images: [],
    tags: ["Coming Soon"]
  },
  {
    title: "ELECTRIC VEHICLE",
     year: "2023",
    description: "Upcoming project with details to be revealed soon. Stay tuned for our latest innovation.",
    images: [],
    tags: ["Coming Soon"]
  },

];

// Complete project list for sidebar
const allProjects = [
  "Robbo Soccer Bot",
  "ELECTRIC VEHICLE",
  "HEXA LEGGED ALL TERRAIN VEHICLE",
  "VASU",
  "Remote Control Truck",
  "PLASTIC RECYCLING MACHINE",
  "Floor Mopping Robot"
];

const Project = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E3A8A] py-16 px-4 sm:px-6 lg:px-8">
      {/* Subtle background blur effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
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
            variants={item}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Engineering Synergy{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                2025
              </span>
            </motion.h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-8 rounded-full"></div>
            <motion.p
              className="text-gray-300 text-lg max-w-5xl mx-auto leading-relaxed"
              variants={item}
            >
              This section highlights a diverse range of engineering projects undertaken and mentored in mechanical design, renewable energy, robotics, and intelligent systems. Through my academic and research journey, I have guided projects focused on practical innovation, interdisciplinary learning, and real-world problem-solving, while acknowledging the dedicated contributions of the students involved.
            </motion.p>
          </motion.div>

          {/* Projects Showcase - Two Column Layout */}
          <motion.div variants={item} className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Sidebar - Project List */}
              <div className="lg:col-span-4">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-4 sticky top-24">
                  <h3 className="text-lg font-semibold text-white mb-4 px-3">All Projects</h3>
                  <div className="space-y-2">
                    {allProjects.map((project, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          // Map project title to activeTab index
                          if (project === "PLASTIC RECYCLING MACHINE") setActiveTab(0);
                          else if (project === "HEXA LEGGED ALL TERRAIN VEHICLE") setActiveTab(1);
                          else if (project === "ELECTRIC VEHICLE") setActiveTab(2);
                          else if (project === "VASU") setActiveTab(3);
                          else if (project === "Remote Control Truck") setActiveTab(4);
                          else if (project === "Floor Mopping Robot") setActiveTab(5);
                          else if (project === "Robbo Soccer Bot") setActiveTab(6);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                          (activeTab === 0 && project === "PLASTIC RECYCLING MACHINE") ||
                          (activeTab === 1 && project === "HEXA LEGGED ALL TERRAIN VEHICLE") ||
                          (activeTab === 2 && project === "ELECTRIC VEHICLE") ||
                          (activeTab === 3 && project === "VASU") ||
                          (activeTab === 4 && project === "Remote Control Truck") ||
                          (activeTab === 5 && project === "Floor Mopping Robot") ||
                          (activeTab === 6 && project === "Robbo Soccer Bot")
                            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20"
                            : "text-gray-300 hover:bg-white/10"
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{project}</span>
                          {((activeTab === 0 && project === "PLASTIC RECYCLING MACHINE") ||
                            (activeTab === 1 && project === "HEXA LEGGED ALL TERRAIN VEHICLE") ||
                            (activeTab === 2 && project === "ELECTRIC VEHICLE") ||
                            (activeTab === 3 && project === "VASU") ||
                            (activeTab === 4 && project === "Remote Control Truck") ||
                            (activeTab === 5 && project === "Floor Mopping Robot") ||
                            (activeTab === 6 && project === "Robbo Soccer Bot")) && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Project Details */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10"
                  >
                    {/* Project Header */}
                    <div className="p-6 sm:p-8 border-b border-white/10">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                            {projects[activeTab].title}
                          </h2>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">
                              {projects[activeTab].year}
                            </span>
                            {projects[activeTab].tags.map((tag, i) => (
                              <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mt-4 leading-relaxed">
                        {projects[activeTab].description}
                      </p>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 sm:p-8">
                      {activeTab === 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            {projects[0].images.map((img, idx) => (
                              <motion.div
                                key={idx}
                                className="rounded-xl overflow-hidden shadow-lg border border-white/10 cursor-pointer group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                                whileHover={{ y: -5 }}
                                onClick={() => openImageModal(img)}
                              >
                                <img
                                  src={img}
                                  alt={`Project ${idx + 1}`}
                                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <FaImage className="text-white text-3xl" />
                                </div>
                              </motion.div>
                            ))}
                          </div>
                          <div className="relative">
                            <div className={`rounded-xl overflow-hidden shadow-lg border border-white/10 ${fullscreen ? "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-8" : ""}`}>
                              <video
                                src={projects[0].video}
                                className={`${fullscreen ? "max-h-[90vh] max-w-[90vw]" : "w-full"} rounded-xl`}
                                controls={videoPlaying}
                                autoPlay={videoPlaying}
                                loop
                              />
                              {!videoPlaying && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                  <motion.button
                                    onClick={toggleVideo}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-5 bg-blue-600/90 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-all shadow-xl"
                                  >
                                    <FaPlay className="text-white text-2xl ml-1" />
                                  </motion.button>
                                </div>
                              )}
                            </div>
                            <motion.button
                              onClick={toggleFullscreen}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="absolute bottom-4 right-4 p-2 bg-black/60 backdrop-blur-sm rounded-lg hover:bg-black/80 transition-all"
                            >
                              <FaExpand className="text-white text-sm" />
                            </motion.button>
                          </div>
                        </div>
                      )}

                      {activeTab === 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {projects[1].images.map((img, idx) => (
                            <motion.div
                              key={idx}
                              className="relative group rounded-xl overflow-hidden shadow-lg border border-white/10 cursor-pointer"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.05 * idx }}
                              whileHover={{ y: -5 }}
                              onClick={() => openImageModal(img)}
                            >
                              <img
                                src={img}
                                alt={`Hexapod ${idx + 1}`}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-white text-sm font-medium">Click to expand</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {activeTab === 2 && (
                        <div className="flex flex-col lg:flex-row gap-8">
                          <div className="lg:w-2/3">
                            <div className="grid grid-cols-2 gap-5">
                              {projects[2].images.map((img, idx) => (
                                <motion.div
                                  key={idx}
                                  className="rounded-xl overflow-hidden shadow-lg border border-white/10 cursor-pointer group"
                                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * idx }}
                                  whileHover={{ y: -5 }}
                                  onClick={() => openImageModal(img)}
                                >
                                  <img
                                    src={img}
                                    alt={`EV ${idx + 1}`}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          <div className="lg:w-1/3 bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-white mb-4">Specifications</h3>
                            <ul className="space-y-3">
                              <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-300">Range</span>
                                <span className="text-blue-300 font-medium">350 km</span>
                              </li>
                              <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-300">Battery</span>
                                <span className="text-blue-300 font-medium">75 kWh</span>
                              </li>
                              <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-300">Charging</span>
                                <span className="text-blue-300 font-medium">150 kW DC</span>
                              </li>
                              <li className="flex justify-between border-b border-white/10 pb-2">
                                <span className="text-gray-300">0-100 km/h</span>
                                <span className="text-blue-300 font-medium">4.2s</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      {(activeTab === 3 || activeTab === 4 || activeTab === 5 || activeTab === 6) && (
                        <motion.div
                          className="flex flex-col items-center justify-center py-20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <div className="relative w-32 h-32 mb-6">
                            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
                            <div className="absolute inset-3 rounded-full bg-blue-500/30 flex items-center justify-center">
                              <svg
                                className="w-12 h-12 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                          <p className="text-gray-400 max-w-md text-center">
                            We're working hard on our next innovation. Stay tuned for the big reveal!
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Engineering Synergy 2025 Event Gallery */}
          <motion.div variants={item} className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Engineering Synergy 2025 Event Gallery</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {["/a.jpeg", "/b.jpeg", "/c.jpeg", "/d.jpeg", "/e.jpeg", "/f.jpeg", "/g.jpeg", "/h.jpeg"].map((src, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-xl aspect-square shadow-lg group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.03 * idx }}
                  whileHover={{ y: -5 }}
                  onClick={() => openImageModal(src)}
                >
                  <img
                    src={src}
                    alt={`Event Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Event Moment</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Gallery */}
          <motion.div variants={item} className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">More Project Highlights</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {["/k.jpeg", "/l.jpeg", "/m.jpeg", "/n.jpeg", "/o.jpeg", 
              // "/p.jpeg"
              ].map((src, idx) => (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden rounded-xl aspect-square shadow-lg group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.03 * idx }}
                  whileHover={{ y: -5 }}
                  onClick={() => openImageModal(src)}
                >
                  <img
                    src={src}
                    alt={`Project Highlight ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaImage className="text-white text-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            className="pt-12 border-t border-white/10 text-center"
            variants={item}
          >
            <p className="text-gray-400">© {new Date().getFullYear()} Engineering Synergy. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-500">Pushing the boundaries of innovation and technology</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full size"
                className="w-full h-full object-contain rounded-2xl"
              />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/60 rounded-full hover:bg-black/80 transition-all"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Project;
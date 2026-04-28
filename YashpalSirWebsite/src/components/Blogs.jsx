import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBlog, FaLinkedin, FaSearch, FaFilter, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { MdOutlinePublishedWithChanges } from 'react-icons/md';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [filterOpen, setFilterOpen] = useState(false);

  const blogData = [
    {
      id: 1,
      title: "Industrial Robotics & Automation Certification",
      description: "Successfully completed a certification in Industrial Robotics and Automation from NITTTR Chennai — expanding practical industry skills in robotic systems and control.",
      date: "Mar 2025",
      tags: ["Robotics", "Automation", "Skill Development"],
      link: "https://www.linkedin.com/posts/yashpal-chopra-27ab0340_successfully-completed-a-certification-in-activity-7353357250024951809-zelr",
      source: "LinkedIn — Yashpal Chopra",
    },
    {
      id: 2,
      title: "Exploring Industrial Automation Robots",
      description: "Shared insights into industrial automation and robotic applications such as glue dispensing robots used for precision manufacturing tasks — key for modern smart factories.",
      date: "Apr 2025",
      tags: ["Industrial Automation", "Robotics", "Smart Manufacturing"],
      link: "https://www.linkedin.com/in/yashpal-chopra-27ab0340/recent-activity/all/",
      source: "LinkedIn — Yashpal Chopra",
    },
    {
      id: 3,
      title: "Robotics Engineering Career Guide",
      description: "Thoughtful perspectives on how students and young engineers can build careers in robotics, AI systems, and automation — blending mechanical, electrical, and CS approaches with industry insights.",
      date: "Feb 2025",
      tags: ["Career", "Robotics", "Education"],
      link: "https://www.linkedin.com/in/yashpal-chopra-27ab0340/recent-activity/all/",
      source: "LinkedIn — Yashpal Chopra",
    },
    {
      id: 4,
      title: "AI and Machine Vision in Robotics",
      description: "A practical exploration of how AI-enabled vision systems improve robotic inspection and quality control — merging AI concepts with hands-on automation examples.",
      date: "Jan 2025",
      tags: ["Artificial Intelligence", "Robotics", "Machine Vision"],
      link: "https://www.linkedin.com/in/yashpal-chopra-27ab0340/recent-activity/all/",
      source: "LinkedIn — AAIRO Page",
    },
    {
      id: 5,
      title: "Top Trends in Robotics and AI",
      description: "An overview of emerging trends shaping robotics engineering — from collaborative robots (cobots) to autonomous mobile systems and intelligent automation workflows.",
      date: "Dec 2024",
      tags: ["AI", "Robotics", "Industry Trends"],
      link: "https://www.linkedin.com/in/yashpal-chopra-27ab0340/recent-activity/all/",
      source: "LinkedIn — AAIRO Page",
    }
  ];

  // Get unique tags
  const allTags = ['All', ...new Set(blogData.flatMap(blog => blog.tags))];

  // Filter blogs based on search and tag
  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || blog.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    hover: {
      y: -4,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E3A8A] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* <div className="inline-block mb-4">
            <FaBlog className="text-blue-400 text-5xl sm:text-6xl mx-auto" />
          </div> */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            My Blogs
          </h1>

          {/* Simple Underline */}
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-gray-300 text-lg sm:text-xl max-w-6xl mx-auto leading-relaxed">
            This section features my insights on engineering, robotics, artificial intelligence, career development, and higher education. Drawing on over a decade of academic and industry experience, I aim to simplify complex concepts and make them practical and relevant for students and professionals alike. The topics covered include emerging trends and real-world applications in engineering, career strategies for aspiring and working professionals, and thoughtful perspectives on the evolving Indian education ecosystem.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Box */}
            <div className="relative flex-1 max-w-md">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-gray-700 rounded-xl text-white hover:bg-white/10 transition-all"
              >
                <FaFilter className="text-gray-400" />
                Filter by Tag
                {selectedTag !== 'All' && (
                  <span className="ml-2 px-2 py-0.5 bg-blue-500 rounded-full text-xs">
                    {selectedTag}
                  </span>
                )}
              </button>

              <AnimatePresence>
                {filterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-gray-800 border border-gray-700 rounded-xl p-2 z-20 min-w-[200px] shadow-xl"
                  >
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => {
                          setSelectedTag(tag);
                          setFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedTag === tag 
                            ? 'bg-blue-600 text-white' 
                            : 'text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Blog Cards Grid */}
        {filteredBlogs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-xl">No blogs found matching your criteria</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={cardVariants}
                whileHover="hover"
                variants={cardHover}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-xl">
                  {/* Blog Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-300"
                      >
                        <FaTag className="text-[10px]" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                    {blog.description}
                  </p>

                  {/* Date and Source */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-blue-400" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdOutlinePublishedWithChanges className="text-blue-400" />
                      <span>{blog.source}</span>
                    </div>
                  </div>

                  {/* Read on LinkedIn Button */}
                  <motion.a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg"
                  >
                    <FaLinkedin className="text-white" />
                    Read on LinkedIn
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Blog Count Display */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12 text-gray-400 text-sm"
        >
          Showing {filteredBlogs.length} of {blogData.length} blogs
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
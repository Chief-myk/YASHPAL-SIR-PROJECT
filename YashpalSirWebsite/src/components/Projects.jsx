import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    img: "/proj_1.png",
    title: "Quantium Super Store Data Analysis using Python",
    description:
      "The aim is to analyze purchasing trends and customer segments' chip-buying habits, using exploratory data analysis to uncover patterns and insights into preferences and behaviors.",
    tags: ["Python", "Pandas", "Data Analysis"]
  },
  {
    img: "/proj_2.jfif",
    title: "Web Performance Data Analysis using Power BI",
    description:
      "This Week 39 analysis offers insights into key performance indicators, trends, and acquisition channels. It details traffic patterns, engagement, and conversion rates to identify optimization opportunities.",
    tags: ["Power BI", "Data Visualization", "Dashboard"]
  },
  {
    img: "/proj_3.png",
    title: "Hospital Emergency Patients Visit Dashboard Using Tableau",
    description:
      "This Tableau dashboard analyzes emergency room data, providing insights into patient demographics, visit details, patient age, patient satisfaction, and more.",
    tags: ["Tableau", "Healthcare", "Dashboard"]
  },
  {
    img: "/proj_4.jfif",
    title: "HR Attrition Dashboard using Excel",
    description:
      "Developed an Excel dashboard to analyze employee turnover, providing insights into attrition rates, demographics, and education-related patterns, helping to understand and address workforce trends.",
    tags: ["Excel", "HR Analytics", "Dashboard"]
  },
  {
    img: "/proj_5.jfif",
    title: "SQL Data Analytics: HR, Paytm, Pharma",
    description:
      "Used SQL to analyze employee data for HR insights, pharmaceutical sales for trends, and Paytm e-purchase data for customer behavior and marketing strategies.",
    tags: ["SQL", "Data Analysis", "Business Intelligence"]
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const allTags = ["All", ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

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

  const filterButton = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 500
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="relative min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="fixed inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 top-[-20%] h-[600px] w-[600px] sm:h-[800px] sm:w-[800px] lg:h-[1000px] lg:w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb15,#00000080)]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Projects Portfolio
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Below are the sample Data Analytics projects on SQL, Python, Excel, Power BI & Tableau.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
          variants={container}
        >
          {allTags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === tag 
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              variants={item}
              whileHover="hover"
              whileTap="tap"
              variants={filterButton}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0"
          variants={container}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group border border-gray-700"
              variants={item}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
            >
              <motion.div 
                className="relative overflow-hidden h-48 sm:h-52"
                variants={flipVariants}
              >
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <motion.span 
                        key={tag} 
                        className="bg-blue-600/90 text-white text-xs px-2 py-1 rounded"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">{project.description}</p>
                <motion.button 
                  className="group-hover:text-blue-400 text-blue-500 hover:text-blue-300 text-sm font-medium flex items-center"
                  whileHover={{ x: 5 }}
                >
                  View Details
                  <motion.span
                    className="ml-1"
                    whileHover={{ x: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
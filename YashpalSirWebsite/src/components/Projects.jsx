// components/Projects.js
import React, { useState } from "react";

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

  return (
    <div className="relative min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements - Optimized for performance */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Radial gradient - smaller and more subtle on mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[-20%] h-[600px] w-[600px] sm:h-[800px] sm:w-[800px] lg:h-[1000px] lg:w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb15,#00000080)] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Projects Portfolio
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
            Below are the sample Data Analytics projects on SQL, Python, Excel, Power BI & Tableau.
          </p>
        </div>

        {/* Filter Buttons - Improved responsiveness */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === tag 
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid - Improved responsiveness and card design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border border-gray-700 hover:border-blue-400/30"
            >
              <div className="relative overflow-hidden h-48 sm:h-52">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-blue-600/90 text-white text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">{project.description}</p>
                <button className="group-hover:text-blue-400 text-blue-500 hover:text-blue-300 text-sm font-medium flex items-center transition-colors duration-300">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
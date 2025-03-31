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
    <div className="relative min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Radial Gradient */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] z-0"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6">
          Projects Portfolio
        </h1>
        <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-12">
          Below are the sample Data Analytics projects on SQL, Python, Excel, Power BI & Tableau.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === tag 
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-blue-600/80 text-white text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
                <button className="mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center transition-colors duration-300">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
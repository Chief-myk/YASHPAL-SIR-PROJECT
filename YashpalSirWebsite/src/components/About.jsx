import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const flipVariants = {
    offscreen: {
      rotateX: 90,
      opacity: 0
    },
    onscreen: {
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const slideInFromLeft = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const slideInFromRight = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }
    }
  };

  const educationItems = [
    "PhD in Automation And Robotics - Guru Gobind Singh Indraprastha University",
    "MBA in Operations Managment And Marketing - DCRUST, Murthal",
    "MTech in Machine Design - Maharashi Dayanand University",
    "BTech in Mechanical Engineering - Kurukshetra University"
  ];

  const awardsItems = [
    "Best Teacher Award",
    "NCC 'A' Certificate, 1st Haryana Battalion (Jan 2007)",
    "Most Devoted Teacher Award",
    "Employer Of the Year",
  ];

  const experienceItems = [
    {
      role: "Assistant Professor",
      institution: "Dr. Akhilesh Das Gupta Institute Of Technology",
      duration: "Aug 2018 - Present",
      length: "7 yr",
      location: "New Delhi, India",
      icon: "🏛️"
    },
    {
      role: "Guest Faculty",
      institution: "Delhi Technological University",
      duration: "Aug 2017 - July 2018",
      length: "1 yr",
      location: "Delhi, India",
      icon: "🎓"
    },
    {
      role: "Assistant Professor",
      institution: "Jagnath University NCR",
      duration: "Aug 2016 - July 2017",
      length: "1 yr",
      location: "Delhi, NCR",
      icon: "📚"
    },
    {
      role: "Assistant Professor",
      institution: "Ganga Institute Of Technology & Management",
      duration: "Aug 2014 - July 2016",
      length: "2 yr",
      location: "Jahjjar",
      icon: "🏫"
    },
    {
      role: "Quality Engineer",
      institution: "Masu Brakes Pvt Ltd",
      duration: "Aug 2013 - July 2014",
      length: "1 yr",
      location: "bahadurgarh",
      icon: "⚙️"
    },
    {
      role: "Assistant Professor",
      institution: "Delhi Global Institute Of Technology",
      duration: "Aug 2011 - July 2013",
      length: "2 yr",
      location: "Sampala",
      icon: "👨‍🏫"
    },
  ];
  
  const skills = [
    "Guidance",
    "Career Counseling",
    "Mechanical Engineering",
    "Microsoft Office",
    "AutoCAD",
    "Kaizen",
    "Poka Yoke",
    "Team Leadership",
    "Management Consultant",
    "Event Planning"
  ];

  const certificates = [
    {
      title: "Student Guidance Counselor",
      issuer: "IGNOU",
      date: "Jul 2023",
      icon: "🎖️"
    },
    {
      title: "Career Counselor",
      issuer: "TCS ION",
      date: "Jun 2023",
      icon: "🏅"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Biography Section */}
        <motion.div 
          variants={cardVariants}
          className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row">
            <motion.div 
              variants={flipVariants}
              className="relative w-full md:w-1/3 h-64 md:h-auto group"
            >
              <img
                src="/yashpalSir.jfif"
                alt="Professor Yashpal Chopra"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h2 className="text-2xl font-bold">Professor & Dean</h2>
                <p className="text-sm opacity-90 mt-1">Office of Doctoral Studies, DR. Akhilesh Das Gupta Institute Of Technology, Sonipat, Haryana</p>
              </div>
            </motion.div>

            <motion.div 
              variants={slideInFromRight}
              className="w-full md:w-2/3 p-8"
            >
              <div className="flex items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Biography
                </h1>
                <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
              <motion.div 
                variants={container}
                className="text-gray-700 space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar text-justify"
              >
                <motion.p variants={item} className="leading-relaxed">
                  Yashpal Chopra is a dynamic leader in the financial services industry, with a career spanning over two decades. His expertise lies in risk management, surveillance, compliance, and strategic financial operations, making him a key figure in the stock broking sector.
                </motion.p>
                <motion.p variants={item} className="leading-relaxed">
                  Yashpal's journey began with a solid educational foundation in finance, commerce, and technology, equipping him with the skills to navigate complex financial landscapes. Over the years, he has held pivotal roles in top-tier financial institutions, where he played an instrumental role in strengthening risk frameworks, ensuring compliance, and optimizing operational efficiency.
                </motion.p>
                <motion.p variants={item} className="leading-relaxed">
                  Currently serving as the Chief Operating Officer (COO) at SMC Global Securities Limited, Yashpal oversees the company's operational strategies, risk mitigation, and regulatory compliance, ensuring seamless business functions. Prior to this, he held the position of Chief Risk Officer at 5paisa Capital Limited, where he was responsible for designing and implementing robust risk management frameworks to protect assets and enhance financial resilience.
                </motion.p>
                <motion.p variants={item} className="leading-relaxed">
                  His tenure as Deputy General Manager of Risk Management & Surveillance at Indiabulls Ventures further solidified his reputation as a specialist in financial risk assessment and regulatory compliance. His contributions have helped financial institutions mitigate market risks, implement advanced surveillance systems, and stay ahead of evolving regulatory requirements.
                </motion.p>
                <motion.p variants={item} className="leading-relaxed">
                  Beyond his professional accomplishments, Yashpal is known for his strategic mindset, analytical thinking, and leadership skills. He believes in fostering a culture of innovation and integrity in the financial sector. His vision is to leverage technology-driven solutions to enhance the efficiency of risk management and drive sustainable financial growth.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Grid Sections */}
        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Teaching Section */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-blue-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Teaching
              </h1>
              <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dr. Yashpal is a passionate educator with over 6 years of experience in teaching various subjects related to Engineering Graphics, Manufacturing Process, and Engineering Mechanics.
            </p>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="overflow-hidden rounded-lg border border-gray-200"
            >
              <table className="w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                    <th className="p-3 text-left text-gray-700 font-semibold">Current Teaching</th>
                    <th className="p-3 text-left text-gray-700 font-semibold">Past Teaching</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-3 text-gray-700">Assistant Professor at Akhilesh Das Gupta Institute of technology</td>
                    <td className="p-3 text-gray-700">Assistant Professor at Jagnath University, Ganga Institute of Technology and Management, Delhi Global Institute of Technology</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>

          {/* Research Section */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-purple-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Research & Guidance
              </h1>
              <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Dr. Pandey has played a crucial role in guiding research scholars in the areas of statistical modeling and data science. His research contributions include studies on predictive analytics, risk analysis, and business intelligence.
            </p>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="mt-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100"
            >
              <h3 className="font-semibold text-purple-800 mb-2">Research Focus Areas:</h3>
              <ul className="space-y-2">
                {["Statistical Modeling", "Predictive Analytics", "Business Intelligence"].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-indigo-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Education
              </h1>
              <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {educationItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start group"
                  whileHover={{ scale: 1.01 }}
                  variants={item}
                >
                  <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Awards Section */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-yellow-200 md:col-span-2 lg:col-span-1"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Awards & Honors
              </h1>
              <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {awardsItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md"
                  whileHover={{ scale: 1.03 }}
                  variants={item}
                >
                  <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-green-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Skills & Expertise
              </h1>
              <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
            </div>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={container}
            >
              {skills.map((item, index) => (
                <motion.span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                  variants={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Certificates Section */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-red-200"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Certifications
              </h1>
              <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
            </div>
            <ul className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <span className="bg-red-100 text-red-600 rounded-full p-3 mr-4 flex-shrink-0 group-hover:bg-red-200 transition-colors">
                    {cert.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-800">{cert.title}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mt-1">Issued: {cert.date}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-transparent hover:border-orange-200 md:col-span-2 lg:col-span-3"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Professional Experience
              </h1>
              <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"></div>
            </div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 transform translate-x-0.5"></div>
              
              <ul className="space-y-8">
                {experienceItems.map((exp, index) => (
                  <motion.li 
                    key={index} 
                    className="relative pl-12 group"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center transform translate-x-1/2 z-10">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-lg hover:bg-gray-50 transition-all shadow-sm hover:shadow-md border border-gray-100">
                      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-red-100 text-2xl">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                            <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                              {exp.duration}
                            </span>
                            <span className="text-gray-500 text-sm">{exp.length}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 font-medium mt-1">{exp.institution}</p>
                        <div className="flex items-center mt-2 text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
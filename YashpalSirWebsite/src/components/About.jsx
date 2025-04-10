import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMicrochip, FaCogs, FaGraduationCap, FaBriefcase, FaAward, FaCertificate, FaTools } from 'react-icons/fa';
import { GiMechanicalArm , } from 'react-icons/gi';
import { RiRobot2Line } from 'react-icons/ri';

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

  const EngTechItems = [
    ["Ph.D","Ph.D in Automation & Robotics","Guru Gobind Singh Indraprastha University, Delhi", ],
    ["M.Tech.", "Masters in Technology (Machine Design)", "Maharshi Dayanand University, Rohtak, Haryana", ],
    ["B.Tech." ,"Bachelor in Technology (Mechanical Engineering)" ,"Kurukshetra University, Kurukshetra"]
  ];
  
  const ManagementItems = [
    ["M.B.A" , "Masters of Business Administration (Operations & Marketing Management)" , "Deenbandu Chotu ram University of Science & Technology (DCRUST),Murthal"],
    
  ];
  
  const MedicalItems = [
    ["Coming Soon"], 
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
      title: "NCC 'A' Certificate, 1st Haryana Battalion ",
      // issuer: "NCC",
      date: "Jan 2007",
      icon: <FaCertificate className="text-red-600" />
    },
    {
      title: "Student Guidance Counselor",
      issuer: "IGNOU",
      date: "Jul 2023",
      icon: <FaCertificate className="text-red-600" />
    },
    {
      title: "Career Counselor",
      issuer: "TCS ION",
      date: "Jun 2023",
      icon: <FaCertificate className="text-red-600" />
    }
  ];

  // Robotic theme elements
  const RoboticDecoration = ({ position = 'left' }) => (
    <div className={`absolute ${position}-0 top-0 h-full flex items-center justify-center opacity-10`}>
      <FaRobot className="text-blue-500 text-9xl" />
    </div>
  );

  const RoboticSectionHeader = ({ children, icon }) => (
    <div className="flex items-center mb-6 relative">
      <div className="mr-3 text-3xl text-blue-500">
        {icon}
      </div>
      <h1 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {children}
      </h1>
      <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
    </div>
  );

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Robotic decorative elements */}
      <div className="absolute top-20 right-20 opacity-5">
        <GiMechanicalArm className="text-blue-500 text-9xl" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-5">
        <FaCogs className="text-blue-500 text-9xl" />
      </div>
      <div className="absolute top-1/3 left-1/4 opacity-5">
        <RiRobot2Line className="text-blue-500 text-9xl" />
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Biography Section with Robotic Theme */}
        <motion.div 
          variants={cardVariants}
          className="bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 border-2 border-blue-100 relative"
        >
          <div className="absolute top-4 right-4 text-blue-500 text-2xl">
            <FaRobot />
          </div>
          <div className="flex flex-col md:flex-row">
            <motion.div 
              variants={flipVariants}
              className="relative w-full md:w-1/3 h-85 md:h-auto group"
            >
              <img
                src="/yssirrr.jpeg"
                alt="Professor Yashpal Chopra"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h2 className="text-2xl font-bold flex items-center">
                 Founder of Career Margdarshak & Assistant Professor.
                </h2>
                {/* <p className="text-sm opacity-90 mt-1">Office of Doctoral Studies, DR. Akhilesh Das Gupta Institute Of Technology, Sonipat, Haryana</p> */}
              </div>
            </motion.div>

            <motion.div 
              variants={slideInFromRight}
              className="w-full md:w-2/3 p-8"
            >
              <RoboticSectionHeader icon={<FaRobot />}>
              Bibliography
              </RoboticSectionHeader>
              <motion.div 
                variants={container}
                className="text-gray-700 space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar text-justify"
              >
               <motion.p variants={item} className="leading-relaxed">
                <strong>Yashpal Chopra</strong> is a passionate educator, researcher, counselor, and mentor in the field of <strong>Mechanical and Automation Engineering </strong>with more than <strong> 13 years of academic experience.</strong> Known for his deep commitment to technical education and student development, he has held faculty positions at leading institutions including <strong> Delhi Technological University (DTU) </strong>and <strong> Jagan Nath University NCR.</strong>
                </motion.p>
                <motion.p variants={item} className="leading-relaxed">
                He is currently working as an assistant professor in the prestigious institute of <strong> Guru Gobind Singh Indraprastha University (GGSIPU)</strong>, delving into cutting-edge research in advanced mechanical systems. He holds an M.Tech in Mechanical Engineering (Machine Design) from <strong>Maharshi Dayanand University,</strong> an MBA in Operations and Marketing Management from <strong> Deenbandu Chotu ram University of Science & Technology,</strong> and a B.Tech in Mechanical Engineering from <strong> Kurukshetra University</strong> — all completed with distinction.
                </motion.p>
                <motion.p variants={item} className="leading-relaxed">
                Throughout his career, Yashpal has mentored numerous <strong>undergraduate innovation projects,</strong>  guided students through <strong> GATE and competitive exam preparation</strong>, and contributed significantly to <strong>curriculum development.</strong> His research interests include <strong>Machine Design, Renewable Energy, Robotics, and Advanced Manufacturing.</strong> 
                </motion.p>
                <motion.p variants={item} className="leading-relaxed">
                He has published several papers in international journals and conferences, and continues to contribute to the academic community through <strong>Faculty Development Programs (FDPs), workshops, and technical collaborations. </strong>His blend of technical acumen, industry-aligned insight, and student-centric approach defines his role as an impactful educator and lifelong learner
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
          {/* Teaching Section with Robotic Theme */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-blue-100 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-2 right-2 text-blue-500 text-xl">
              <FaMicrochip />
            </div>
            <RoboticSectionHeader icon={<FaGraduationCap />}>
             Teaching
            </RoboticSectionHeader>
            <p className="text-gray-700 mb-6 leading-relaxed">
            Mr. Chopra is a passionate educator with over 13 years of experience in teaching various subjects related to <strong>Manufacturing process, Machine Drawing & Design, Renewable Energy, Robotics Engineering, Advanced Manufacturing, and Supply Chain management.</strong>
            </p>

            {/* <motion.div 
              whileHover={{ scale: 1.01 }}
              className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100"
            >
              <h3 className="font-semibold text-blue-800 mb-2 flex items-center">
                <GiMechanicalArm className="mr-2" /> Robotics Course Highlights:
              </h3>
              <ul className="space-y-2">
                {["Robotics Kinematics & Dynamics", "Automation Control Systems", "Mechatronics Engineering", "AI in Robotics"].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div> */}
          </motion.div>

          {/* Research Section with Robotic Theme */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-blue-100 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-2 right-2 text-blue-500 text-xl">
              <FaCogs />
            </div>
            <RoboticSectionHeader icon={<GiMechanicalArm />}>
              Resarch And Guidance
            </RoboticSectionHeader>
            <p className="text-gray-700 leading-relaxed">
            Mr. Chopra has played a crucial role in guiding young graduates in the areas of Mechanical Engineering, Automobile Engineering, Mechanical & Automation Engineering, Fire Technology Engineering, and Robotics Engineering.
            </p>
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="mt-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100"
            >
              <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                <RiRobot2Line className="mr-2" /> Research Focus Areas:
              </h3>
              <ul className="space-y-2">
              {["Robotics & Automation", "Electric Vehicles (Automobile)", "Renewable Energy Generation" , "Operation Management"].map((item, index) => (
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

          {/* Education Section with Robotic Theme */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-blue-100 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-2 right-2 text-blue-500 text-xl">
              <FaMicrochip />
            </div>
            <RoboticSectionHeader icon={<FaGraduationCap />}>
            Education & Training
            </RoboticSectionHeader>
            
            <div className="mb-6">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                <RiRobot2Line className="mr-2" /> Engineering & Technology
              </h3>
              <ul className="space-y-4">
                {EngTechItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    whileHover={{ scale: 1.01 }}
                    variants={item}
                  >
                    <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <FaRobot className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{item[0]}</div>
                      <div className="text-gray-600 text-sm">{item[1]}</div>
                      <div className="text-gray-500 text-xs mt-1">{item[2]}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                <FaBriefcase className="mr-2" /> Management 
              </h3>
              <ul className="space-y-4">
                {ManagementItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    whileHover={{ scale: 1.01 }}
                    variants={item}
                  >
                    <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <FaBriefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{item[0]}</div>
                      <div className="text-gray-600 text-sm">{item[1]}</div>
                      <div className="text-gray-500 text-xs mt-1">{item[2]}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                <FaBriefcase className="mr-2" /> Medical
              </h3>
              <ul className="space-y-4">
                {MedicalItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start group"
                    whileHover={{ scale: 1.01 }}
                    variants={item}
                  >
                    <span className="bg-blue-100 text-blue-600 rounded-full p-2 mr-3 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <FaBriefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{item[0]}</div>
                      <div className="text-gray-600 text-sm">{item[1]}</div>
                      <div className="text-gray-500 text-xs mt-1">{item[2]}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Skills Section with Robotic Theme */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-blue-100 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-2 right-2 text-blue-500 text-xl">
              <FaTools />
            </div>
            <RoboticSectionHeader icon={<FaTools />}>
            Skills & Expertise
            </RoboticSectionHeader>
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
                  <FaRobot className="mr-1" /> {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Certificates Section with Robotic Theme */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-blue-100 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute top-2 right-2 text-blue-500 text-xl">
              <FaAward />
            </div>
            <RoboticSectionHeader icon={<FaAward />}>
              Certifications
            </RoboticSectionHeader>
            {/* <p className="text-gray-700 leading-relaxed mb-4">
              NCC 'A' Certificate, 1st Haryana Battalion (Jan 2007)
            </p> */}
            <ul className="space-y-4">
              {certificates.map((cert, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group border border-gray-100"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <span className="bg-blue-100 text-blue-600 rounded-full p-3 mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors">
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

          {/* Experience Section with Robotic Theme */}
          <motion.div 
            variants={item}
            className="bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-blue-100 relative overflow-hidden md:col-span-2 lg:col-span-3"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute top-4 right-4 text-blue-500 text-2xl">
              <RiRobot2Line />
            </div>
            <RoboticSectionHeader icon={<FaBriefcase />}>
            Professional Experience
            </RoboticSectionHeader>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 transform translate-x-0.5"></div>
              
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
                    <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center transform translate-x-1/2 z-10">
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-lg hover:bg-gray-50 transition-all shadow-sm hover:shadow-md border border-gray-100">
                      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-2xl">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
                          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
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
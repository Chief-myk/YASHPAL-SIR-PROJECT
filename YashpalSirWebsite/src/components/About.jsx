import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrochip,
  FaCogs,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaCertificate,
  FaTools,
} from "react-icons/fa";
import { GiMechanicalArm } from "react-icons/gi";
import { RiRobot2Line } from "react-icons/ri";

const About = () => {
  // Animation variants (unchanged)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const flipVariants = {
    offscreen: {
      rotateX: 90,
      opacity: 0,
    },
    onscreen: {
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
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
        duration: 0.8,
      },
    },
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
        duration: 0.8,
      },
    },
  };

  const EngTechItems = [
    [
      "PGC R&AI",
      "Post Graduation certification in Robotics & Artificial intelligence ",
      "IIT, Bhuvneshwar ",
    ],
    [
      "Ph.D",
      "Ph.D in Automation & Robotics",
      "Guru Gobind Singh Indraprastha University, Delhi",
    ],
    [
      "M.Tech.",
      "Masters in Technology (Machine Design)",
      "Maharshi Dayanand University, Rohtak, Haryana",
    ],
    [
      "B.Tech.",
      "Bachelor in Technology (Mechanical Engineering)",
      "Kurukshetra University, Kurukshetra",
    ],
  ];

  const ManagementItems = [
    [
      "M.B.A",
      "Masters of Business Administration (Operations & Marketing Management)",
      "Deenbandu Chotu ram University of Science & Technology (DCRUST),Murthal",
    ],
  ];

  const MedicalItems = [["Coming Soon"]];

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
      icon: "🏛️",
    },
    {
      role: "Guest Faculty",
      institution: "Delhi Technological University",
      duration: "Aug 2017 - July 2018",
      length: "1 yr",
      location: "Delhi, India",
      icon: "🎓",
    },
    {
      role: "Assistant Professor",
      institution: "Jagnath University NCR",
      duration: "Aug 2016 - July 2017",
      length: "1 yr",
      location: "Delhi, NCR",
      icon: "📚",
    },
    {
      role: "Assistant Professor",
      institution: "Ganga Institute Of Technology & Management",
      duration: "Aug 2014 - July 2016",
      length: "2 yr",
      location: "Jahjjar",
      icon: "🏫",
    },
    {
      role: "Quality Engineer",
      institution: "Masu Brakes Pvt Ltd",
      duration: "Aug 2013 - July 2014",
      length: "1 yr",
      location: "bahadurgarh",
      icon: "⚙️",
    },
    {
      role: "Assistant Professor",
      institution: "Delhi Global Institute Of Technology",
      duration: "Aug 2011 - July 2013",
      length: "2 yr",
      location: "Sampala",
      icon: "👨‍🏫",
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
    "Event Planning",
  ];

  const certificates = [
    {
      title: "NCC 'A' Certificate, 1st Haryana Battalion ",
      // issuer: "NCC",
      date: "Jan 2007",
      icon: <FaCertificate className="text-red-600" />,
    },
    {
      title: "Student Guidance Counselor",
      issuer: "IGNOU",
      date: "Jul 2023",
      icon: <FaCertificate className="text-red-600" />,
    },
    {
      title: "Career Counselor",
      issuer: "TCS ION",
      date: "Jun 2023",
      icon: <FaCertificate className="text-red-600" />,
    },
  ];

  // Robotic theme elements
  const RoboticDecoration = ({ position = "left" }) => (
    <div
      className={`absolute ${position}-0 top-0 h-full flex items-center justify-center opacity-10`}
    >
      <FaRobot className="text-blue-500 text-9xl" />
    </div>
  );

  const RoboticSectionHeader = ({ children, icon }) => (
    <div className="flex items-center mb-6 relative">
      <div className="mr-3 text-3xl text-blue-500">{icon}</div>
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
                <h2 className="text-2xl font-bold flex flex-wrap items-center gap-2">
                  Founder of{" "}
                  <span className="text-blue-300">Career Margdarshak</span> &{" "}
                  <span className="text-blue-300">Assistant Professor</span>
                </h2>
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
                  <span className="font-bold text-blue-700">Mr. Chopra</span> is
                  a dedicated educator, researcher, counsellor, and mentor with
                  over <span className="font-bold text-blue-600">15 years</span>{" "}
                  of combined academic and industrial experience across diverse
                  domains, including{" "}
                  <span className="font-medium text-indigo-600">
                    engineering, management, humanities, pharmacy, and career
                    counselling
                  </span>
                  . He is widely recognized for his commitment to technical
                  education and holistic student development. Over the years, he
                  has been associated with reputed institutions such as{" "}
                  <span className="font-medium text-indigo-600">
                    Delhi Technological University, Jagannath University
                  </span>
                  , and premier institutes affiliated with{" "}
                  <span className="font-medium text-indigo-600">
                    Guru Gobind Singh Indraprastha University
                  </span>
                  .
                </motion.p>

                <motion.p variants={item} className="leading-relaxed">
                  <span className="font-bold text-blue-700">Mr. Chopra</span>{" "}
                  holds a diverse range of academic and administrative
                  responsibilities, including delivering lectures and serving as
                  a{" "}
                  <span className="font-medium text-indigo-600">
                    Class Counsellor
                  </span>{" "}
                  to support students' academic and personal growth. He provides
                  project guidance and actively contributes to co-curricular
                  activities such as sports and cultural events. He is also
                  involved in key institutional processes, including{" "}
                  <span className="font-medium text-indigo-600">
                    NBA accreditation work (Criteria 3 & 5)
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-indigo-600">
                    NAAC departmental activities
                  </span>
                  . His responsibilities further extend to managing affiliation
                  procedures as per UGC norms, contributing to curriculum
                  design, and supporting the establishment of laboratories.
                  Additionally, he plays a significant role in marketing and
                  student counselling to strengthen outreach and admissions.
                </motion.p>

                <motion.p variants={item} className="leading-relaxed">
                  He actively contributes to the academic community through{" "}
                  <span className="font-medium text-indigo-600">
                    Faculty Development Programs (FDPs)
                  </span>
                  , workshops, and technical collaborations. He is a key member
                  in organizing and conducting departmental{" "}
                  <span className="font-medium text-indigo-600">
                    AICTE-sponsored ATAL FDPs
                  </span>
                  , showcasing strong leadership and coordination in academic
                  initiatives. Furthermore, he has participated in numerous
                  workshops conducted by reputed institutions such as{" "}
                  <span className="font-medium text-indigo-600">
                    IITs, IIITs
                  </span>
                  , and other prestigious organizations. His blend of technical
                  expertise, industry-oriented insight, and student-centric
                  approach defines him as an impactful educator and a committed
                  lifelong learner.
                </motion.p>

                <motion.p variants={item} className="leading-relaxed">
                  Beyond academics, he is deeply involved in co-curricular and
                  community-oriented activities. He has been a dedicated member
                  of the{" "}
                  <span className="font-medium text-indigo-600">
                    Sports Coordination Committee
                  </span>{" "}
                  for the past five years, contributing to the successful
                  organization of sporting events. He also actively supports and
                  participates in various awareness initiatives organized by the
                  institution, including dental check-up camps, eye check-up
                  camps, and digital awareness programs, reflecting his
                  commitment to community engagement and holistic development.
                </motion.p>

                <motion.p variants={item} className="leading-relaxed">
                  In addition, he is the{" "}
                  <span className="font-bold text-blue-700">
                    Founder and Faculty Coordinator
                  </span>{" "}
                  of the{" "}
                  <span className="font-medium text-indigo-600">
                    Association for Advancement in Artificial Intelligence
                    Development & Robotics (AAIRO) Society
                  </span>
                  . Through this platform, he organizes a wide range of
                  technical events, seminars, workshops, and student development
                  programs aimed at fostering innovation and practical learning.
                  He has also successfully led his flagship initiative,{" "}
                  <span className="font-medium text-indigo-600">
                    Engineering Synergy
                  </span>
                  , organizing the event twice to promote collaborative learning
                  and technical excellence among students.
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
              <span className="font-bold text-blue-700">Mr. Chopra</span> is a
              passionate educator with over{" "}
              <span className="font-bold text-blue-600">15 years</span> of
              teaching experience in subjects such as{" "}
              <span className="font-medium text-indigo-600">
                Manufacturing Processes, Machine Drawing & Design, Renewable
                Energy, Robotics Engineering, Advanced Manufacturing, and Supply
                Chain Management
              </span>
              . He has held faculty positions at leading institutions, including{" "}
              <span className="font-medium text-indigo-600">
                Delhi Technological University
              </span>{" "}
              and{" "}
              <span className="font-medium text-indigo-600">
                Jagannath University
              </span>
              . In the early phase of his career, he also served at{" "}
              <span className="font-medium text-indigo-600">
                Delhi Global Institute of Technology Delhi-NCR
              </span>
              .
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Currently, he is working as an{" "}
              <span className="font-bold text-blue-700">
                Assistant Professor
              </span>{" "}
              at a prestigious institute affiliated with{" "}
              <span className="font-medium text-indigo-600">
                Guru Gobind Singh Indraprastha University
              </span>
              , where he is actively engaged in teaching and exploring
              cutting-edge research in advanced mechanical systems
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              He has also shared his academic notes on this website across a
              range of subjects to support student learning and self-study.
              These include:
            </p>

            <ul className="text-gray-700 mb-6 leading-relaxed">
              <li className="font-medium text-indigo-600">
                Manufacturing Processes
              </li>
              <li className="font-medium text-indigo-600">
                Engineering Mechanics
              </li>
              <li className="font-medium text-indigo-600">
                Engineering Graphics
              </li>
              <li className="font-medium text-indigo-600">
                Enterprise Analytics
              </li>
              <li className="font-medium text-indigo-600">
                Supply Chain Analytics
              </li>
            </ul>

            <p className="text-gray-700 mb-6 leading-relaxed">
              These resources are designed to strengthen both foundational
              knowledge and advanced understanding among students.
            </p>
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
            <p className="text-gray-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-700">Mr. Chopra</span> is a
              doctoral scholar at{" "}
              <span className="font-medium text-indigo-600">
                University School of Automation and Robotics, Guru Gobind Singh
                Indraprastha University
              </span>
              , specializing in{" "}
              <span className="font-bold text-blue-600">
                Automation and Robotics
              </span>
              . He has also served for two years as a Research Scholar at{" "}
              <span className="font-medium text-indigo-600">
                Ganga Institute of Technology and Management
              </span>
              , where he strengthened his research foundation. Throughout his
              professional career, he has actively worked on multiple
              student-driven projects in the field of automation, fostering
              innovation and practical learning.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              He has played a significant role in mentoring and guiding young
              graduates across various disciplines, including{" "}
              <span className="font-medium text-indigo-600">
                Mechanical Engineering, Automobile Engineering, Mechanical &
                Automation Engineering, Fire Technology Engineering, Robotics
                Engineering, Artificial Intelligence, and Operations Management
              </span>
              . His guidance emphasizes both technical excellence and industry
              relevance.
            </p>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-100"
            >
              <h3 className="font-semibold text-purple-800 mb-2 flex items-center">
                <RiRobot2Line className="mr-2" /> Research Focus Areas:
              </h3>
              <ul className="space-y-2">
                {[
                  "Robotics & Automation",
                  "Electric Vehicles (Automobile)",
                  "Renewable Energy Generation",
                  "Operation Management",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    whileHover={{ x: 5 }}
                  >
                    <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 font-medium">{item}</span>
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
                      <div className="text-gray-700 font-bold group-hover:text-gray-900 transition-colors">
                        {item[0]}
                      </div>
                      <div className="text-gray-600 text-sm">{item[1]}</div>
                      <div className="text-gray-500 text-xs mt-1 font-medium">
                        {item[2]}
                      </div>
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
                      <div className="text-gray-700 font-bold group-hover:text-gray-900 transition-colors">
                        {item[0]}
                      </div>
                      <div className="text-gray-600 text-sm">{item[1]}</div>
                      <div className="text-gray-500 text-xs mt-1 font-medium">
                        {item[2]}
                      </div>
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
            <motion.div className="flex flex-wrap gap-3" variants={container}>
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
                    {cert.issuer && (
                      <p className="text-gray-600 font-medium">{cert.issuer}</p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      Issued:{" "}
                      <span className="font-medium text-gray-600">
                        {cert.date}
                      </span>
                    </p>
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
                    variants={
                      index % 2 === 0 ? slideInFromLeft : slideInFromRight
                    }
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
                          <h3 className="text-lg font-bold text-gray-800">
                            {exp.role}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                            <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded">
                              {exp.duration}
                            </span>
                            <span className="text-gray-500 text-sm font-medium">
                              {exp.length}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-700 font-bold mt-1">
                          {exp.institution}
                        </p>
                        <div className="flex items-center mt-2 text-gray-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-sm font-medium">
                            {exp.location}
                          </span>
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

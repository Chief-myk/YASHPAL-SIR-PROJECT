import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHandshake,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaVideo,
  FaComments,
  FaRegLightbulb,
  FaGraduationCap,
  FaUserTie,
  FaSchool
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: "One-on-One Offline Counseling",
      icon: <FaHandshake className="text-4xl" />,
      duration: "1 Hour 30 mins",
      price: "₹1,499",
      description: "Personal face-to-face sessions with aptitude tests and detailed reports at our Delhi offices.",
      highlight: "bg-gradient-to-r from-purple-500 to-blue-500"
    },
    {
      title: "Online Video Counseling",
      icon: <FaVideo className="text-4xl" />,
      duration: "30 minutes",
      price: "₹449",
      description: "Virtual sessions via Zoom/Google Meet with full digital report and follow-up support.",
      highlight: "bg-gradient-to-r from-cyan-400 to-blue-600"
    },
    {
      title: "Career Workshop",
      icon: <FaChalkboardTeacher className="text-4xl" />,
      duration: "2 Hours",
      price: "₹4,999",
      description: "Group workshops with interactive activities and Q&A sessions.",
      highlight: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    {
      title: "Online Quick Doubt Solving",
      icon: <FaComments className="text-4xl" />,
      duration: "Depends",
      price: "₹49 Per Que",
      description: "Instant video consultation for specific career-related queries.",
      highlight: "bg-gradient-to-r from-yellow-400 to-orange-500"
    },
    {
      title: "Student Mentorship",
      icon: <FaRegLightbulb className="text-4xl" />,
      duration: "Ongoing",
      price: "₹15,000/mo",
      description: "Monthly mentorship program with weekly checkins and progress tracking.",
      highlight: "bg-gradient-to-r from-green-400 to-cyan-600"
    },
    {
      title: "Offline Parent Guidance",
      icon: <FaHandshake className="text-4xl" />,
      duration: "1 Hour",
      price: "₹2,499",
      description: "Special sessions for parents to understand career pathways.",
      highlight: "bg-gradient-to-r from-red-400 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Transform Your Career Path
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Personalized career guidance combining scientific assessment with human insight to unlock your true potential.
            </p>
          </motion.div>

          {/* Parallax Grid Background */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            <div className="grid grid-cols-8 gap-4 w-full h-full transform rotate-45 scale-150">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="h-12 w-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div
            variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <motion.img
              src="/group.jpg"
              alt="Career Counseling"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            <motion.div
              className="absolute bottom-0 left-0 p-6 text-white"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold">Personalized Sessions</h3>
              <p className="text-sm opacity-90">One-on-one guidance with expert counselors</p>
            </motion.div>
          </motion.div>
          <motion.div
            variants={{ hidden: { x: 50 }, visible: { x: 0 } }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Personalized Career Guidance
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
             Mr. Yashpal Chopra personally conducts all sessions to help students and professionals identify achievable career goals and develop clear, structured success roadmaps. Our guidance framework is focused on three key verticals: 
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                <FaSchool className="text-cyan-400 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">School Students</h3>
                  <p className="text-gray-300">From Grade 9th to 12th</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                <FaGraduationCap className="text-cyan-400 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Graduates & Post-Graduates</h3>
                  <p className="text-gray-300">Students pursuing or completed higher education</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                <FaUserTie className="text-cyan-400 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Working Professionals</h3>
                  <p className="text-gray-300">Individuals with work experience seeking career growth</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>


      <div>
        <div className="max-w-7xl mx-auto mb-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div
              variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-80"
            >
              <img
                src="ab.jpeg"
                alt="Methodology"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-semibold">Our Assessment Process</h3>
              </div>
            </motion.div>

            <motion.div
              variants={{ hidden: { x: 50 }, visible: { x: 0 } }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-64 md:h-80"
            >
              <img
                src="bc.jpeg"
                alt="Workshops"
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <img
              src="de.jpeg"
              alt="Success Stories"
              className="w-full h-full object-fill max-h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-semibold">Proven Success</h3>
              <p className="text-sm opacity-90">Helping students achieve their career goals</p>
            </div>
          </motion.div>
        </div>
        {/* Methodology Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
  <motion.div
    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-8 flex items-center gap-2">
      <span className="text-cyan-400 text-4xl">⚙️</span>
      Our Methodology
      <span className="h-0.5 flex-1 bg-gradient-to-r from-cyan-400 to-blue-600 ml-4"></span>
    </h2>

    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-6 text-gray-300">
        <p className="leading-relaxed text-lg">
          Our approach integrates digital aptitude assessments with a comprehensive evaluation process, considering academic and non-academic achievements, personality traits, interests, and family background to provide well-rounded and personalized career guidance. 
        </p>
        <p className="leading-relaxed text-lg">
          We follow a multi-format counselling model to ensure accessibility and effectiveness: 
        </p>

        <div className="p-5 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 border-l-4 border-cyan-400">
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-cyan-400">🎯</span> One-on-One Offline Counseling Sessions
          </h3>
          <p className="leading-relaxed mb-3">
            Sessions are conducted at a mutually convenient location, such as your place or a nearby café, with prior appointment. Each session typically lasts 45–60 minutes and includes a detailed assessment along with a personalized report.
          </p>
          <p className="font-bold text-cyan-400 mt-2">
            Students: ₹1499/-
          </p>
          <p className="font-bold text-cyan-400">
            Students along with parents: ₹2499/-
          </p>
        </div>

        <div className="p-5 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 border-l-4 border-blue-400">
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-blue-400">💻</span> Online video Counseling Sessions
          </h3>
          <p className="leading-relaxed mb-3">
            Sessions for remote participants are conducted via Zoom or Google Meet with prior scheduling. Each session typically lasts 45–60 minutes and includes a comprehensive assessment along with a personalized report. 
          </p>
          <p className="font-bold text-blue-400">₹499/-</p>
        </div>
      </div>

      <div className="space-y-6 text-gray-300">
        <div className="p-5 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 border-l-4 border-purple-400">
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-purple-400">⚡</span> Quick Doubt Solving
          </h3>
          <p className="leading-relaxed mb-3">
            Short 5-minute video consultations are available for specific queries related to subjects, exams, or career decisions, offering quick clarity and immediate expert validation. 
          </p>
          <p className="font-bold text-purple-400">₹99 per Question</p>
        </div>

        <div className="p-5 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-all duration-300 border-l-4 border-green-400">
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-green-400">🎓</span> Workshops & Webinars
          </h3>
          <p className="leading-relaxed mb-3">
            60-minute group sessions for institutions featuring interactive lectures, structured presentations, and engaging Q & A discussions to address student queries and career insights. 
          </p>
          <p className="font-bold text-green-400">₹4999/-</p>
        </div>

        <div className="p-5 bg-gradient-to-br from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-400/30 hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-cyan-400">✨</span> Post-Session Support
          </h3>
          <p className="leading-relaxed mb-3">
            All clients receive a detailed written report along with 12 months of ongoing support, including implementation assistance and follow-up guidance to ensure effective execution of their career roadmap 
          </p>
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-lg">₹14999/-</p>
        </div>
      </div>
    </div>
  </motion.div>
</div>
      </div>




      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="relative group bg-gray-800 rounded-2xl p-6 transform transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
            >
              <div className={`absolute inset-0 rounded-2xl ${service.highlight} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="flex flex-col h-full">
                <div className="mb-4 text-cyan-400">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <div className="flex items-center gap-2 text-cyan-300 mb-4">
                  <FaCalendarAlt />
                  <span>{service.duration}</span>
                </div>
                <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    {service.price}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold hover:scale-105 transition-transform">
                    Book Now <FiArrowRight className="text-lg" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      

      {/* Process Section */}
      {/*  */}

      {/* Workshop CTA */}
      <div className="relative py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-cyan-400/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Looking for Group Workshops?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Conducted at your institution with customized curriculum and interactive sessions
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl text-white font-semibold text-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
              Schedule Workshop <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
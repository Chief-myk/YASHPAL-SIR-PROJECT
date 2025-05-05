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
      price: "₹6,500",
      description: "Personal face-to-face sessions with aptitude tests and detailed reports at our Delhi offices.",
      highlight: "bg-gradient-to-r from-purple-500 to-blue-500"
    },
    {
      title: "Online Video Counseling",
      icon: <FaVideo className="text-4xl" />,
      duration: "1 Hour 15 mins",
      price: "₹5,500",
      description: "Virtual sessions via Zoom/Google Meet with full digital report and follow-up support.",
      highlight: "bg-gradient-to-r from-cyan-400 to-blue-600"
    },
    {
      title: "Career Workshop",
      icon: <FaChalkboardTeacher className="text-4xl" />,
      duration: "2 Hours",
      price: "₹8,500",
      description: "Group workshops with interactive activities and Q&A sessions.",
      highlight: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    {
      title: "Quick Doubt Solving",
      icon: <FaComments className="text-4xl" />,
      duration: "15 mins",
      price: "₹1,500",
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
      title: "Parent Guidance",
      icon: <FaHandshake className="text-4xl" />,
      duration: "1 Hour",
      price: "₹4,500",
      description: "Special sessions for parents to understand career pathways.",
      highlight: "bg-gradient-to-r from-red-400 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
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
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/group.jpg" 
              alt="Career Counseling" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </motion.div>

          <motion.div 
            variants={{ hidden: { x: 50 }, visible: { x: 0 } }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Personalized Career Guidance
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
             Mr. Yashpal Chopra personally conducts all sessions to help students discover achievable career goals and create perfect success roadmaps. Our services focus on three key verticles:
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

      {/* Methodology Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div 
          className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-8">
            Our Methodology
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed">
                Our approach combines digital aptitude testing with comprehensive clinical examination, analyzing academic/non-academic achievements, personality traits, interests, and family background.
              </p>
              
              <div className="p-4 bg-gray-700 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Offline Sessions</h3>
                <p>
                  Conducted at our New Delhi offices (East of Kailash & Dwarka) with prior appointment. 
                  Each session lasts 90-120 minutes including detailed report preparation.
                </p>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Online Sessions</h3>
                <p>
                  Available via Zoom/Google Meet for remote participants. Includes 12 months of follow-up 
                  support and expert guidance.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-gray-300">
              <div className="p-4 bg-gray-700 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Quick Doubt Solving</h3>
                <p>
                  15-minute video consultations for specific queries on subjects, exams, or career choices 
                  with immediate expert validation.
                </p>
              </div>
              
              <div className="p-4 bg-gray-700 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-3">Workshops & Webinars</h3>
                <p>
                  90-minute group sessions for institutions featuring interactive lectures, presentations, 
                  and Q&A discussions.
                </p>
              </div>
              
              <div className="p-4 bg-cyan-900/30 rounded-xl border border-cyan-400/20">
                <h3 className="text-xl font-semibold text-white mb-3">Post-Session Support</h3>
                <p>
                  All clients receive written reports and 12 months of ongoing support for implementation 
                  and follow-up guidance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
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
      <div className="relative py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
              Our Scientific Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combining digital assessment with personalized clinical evaluation for optimal career mapping
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 -translate-x-1/2" />

            {[
              { title: "Digital Assessment", desc: "Comprehensive aptitude testing" },
              { title: "Clinical Evaluation", desc: "In-depth personal analysis" },
              { title: "Roadmap Creation", desc: "Personalized career strategy" },
              { title: "Ongoing Support", desc: "12-month mentorship program" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-gray-700 rounded-2xl p-6 text-center group"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-gray-900 font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
                    <FiArrowRight className="text-3xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactCard = ({ icon, title, text, isClickable = false }) => {
  return (
    <motion.div
      className={`flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-lg text-center transition-all duration-300 h-full group border border-gray-700 ${isClickable
          ? "hover:from-blue-900 hover:to-blue-800 hover:border-blue-500 cursor-pointer hover:shadow-blue-500/20"
          : ""
        }`}
      whileHover={{
        y: isClickable ? -5 : 0,
        scale: isClickable ? 1.03 : 1
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className={`p-3 rounded-full mb-4 transition-colors duration-300 ${isClickable
            ? "bg-blue-600 group-hover:bg-white group-hover:text-blue-600"
            : "bg-gray-800"
          }`}
        whileHover={{ rotate: isClickable ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {icon.startsWith("/") ? (
          <img src={icon} alt={title} className="w-8 h-8" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </motion.div>
      <h3 className={`text-lg font-semibold transition-colors duration-300 ${isClickable ? "text-white group-hover:text-blue-300" : "text-white"
        }`}>
        {title}
      </h3>
      <p className="text-gray-300 mt-2 text-sm md:text-base transition-colors duration-300">
        {text}
      </p>
      {isClickable && (
        <motion.span
          className="mt-2 text-blue-400 text-xs font-medium transition-all duration-300 group-hover:translate-x-1"
          whileHover={{ scale: 1.1 }}
        >
          Click to connect →
        </motion.span>
      )}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactItems = [
    {
      icon: "📞",
      title: "Contact Number",
      text: "+91-9992192456",
      href: "tel:+919992192456",
      isExternal: true
    },
    {
      icon: "✉️",
      title: "Email Address",
      text: "ypschopra@gmail.com",
      href: "mailto:ypschopra@gmail.com",
      isExternal: true
    },
    {
      icon: "🏢",
      title: "Office Address",
      text: "Professor at Dr. Akhilesh Das Gupta Institute, Delhi. Available 10AM-6PM."
    },
    {
      icon: "/linkedin-svgrepo-com.svg",
      title: "LinkedIn Profile",
      text: "yashpal-chopra-27ab0340",
      href: "https://www.linkedin.com/in/yashpal-chopra-27ab0340/",
      isExternal: true
    }
  ];

  const socialPlatforms = [
    { name: "linkedin", url: "https://www.linkedin.com/in/yashpal-chopra-27ab0340/" },
    // { name: "twitter", url: "#" },
    // { name: "facebook", url: "#" },
    { name: "instagram", url: "https://www.instagram.com/yashpal_chopra/" },
    // { name: "github", url: "#" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

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

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            I'm passionate about mentoring students and helping them shape their future.
            Whether you need academic guidance, research collaboration, or professional advice,
            feel free to reach out. I typically respond within 24-48 hours.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, index) => (
            item.href ? (
              <motion.a
                key={index}
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="hover:no-underline"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <ContactCard
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                  isClickable={true}
                />
              </motion.a>
            ) : (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }} // Slightly less hover effect for non-clickable card
              >
                <ContactCard
                  icon={item.icon}
                  title={item.title}
                  text={item.text}
                  isClickable={false}
                />
              </motion.div>
            )
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 mb-16 border border-gray-700 hover:border-blue-500 transition-all duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Send Me a Message
              </h2>
              <p className="text-gray-400">
                Have a question or want to discuss a project? Fill out the form below.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-gray-300 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${errors.name ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                  placeholder="John Doe"
                />
                {errors.name && <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.name}
                </motion.p>}
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-gray-300 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${errors.email ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                  placeholder="john@example.com"
                />
                {errors.email && <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.email}
                </motion.p>}
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-gray-300 font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${errors.message ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                  placeholder="I'd like to discuss..."
                ></textarea>
                {errors.message && <motion.p
                  className="text-red-400 text-sm mt-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.message}
                </motion.p>}
              </motion.div>

              <motion.div
                className="pt-2 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 ${isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:from-blue-500 hover:to-blue-600"
                    }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      <span>Send Message</span>
                    </span>
                  )}
                </motion.button>

                {submitSuccess && (
                  <motion.div
                    className="mt-6 p-4 bg-green-600/90 text-white rounded-lg flex items-center justify-center space-x-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
              </motion.div>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            whileHover={{ scale: 1.02 }}
          >
            Connect With Me
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Follow me on social media to stay updated with my latest projects, research, and educational content.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            {socialPlatforms.map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center shadow-lg border border-gray-700 hover:border-blue-500 hover:bg-blue-600/50"
                aria-label={platform.name}
                whileHover={{
                  y: -5,
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={`/${platform.name}-svgrepo-com.svg`}
                  alt={platform.name}
                  className="w-6 h-6 filter invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <hr className="w-full border-t border-gray-500 my-6 sm:my-8" />
      </div>
    </motion.div>
  );
};

export default Contact;
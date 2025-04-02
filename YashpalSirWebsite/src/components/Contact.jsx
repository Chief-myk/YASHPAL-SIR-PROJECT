// components/Contact.js
import React, { useState } from "react";

const ContactCard = ({ icon, title, text, isClickable = false }) => {
  return (
    <div className={`flex flex-col items-center bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl shadow-lg text-center transition-all duration-300 h-full group border border-gray-700 ${
      isClickable 
        ? "hover:from-blue-900 hover:to-blue-800 hover:border-blue-500 cursor-pointer hover:shadow-blue-500/20" 
        : ""
    }`}
    >
      <div className={`p-3 rounded-full mb-4 transition-colors duration-300 ${
        isClickable 
          ? "bg-blue-600 group-hover:bg-white group-hover:text-blue-600" 
          : "bg-gray-800"
      }`}>
        {icon.startsWith("/") ? (
          <img src={icon} alt={title} className="w-8 h-8" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </div>
      <h3 className={`text-lg font-semibold transition-colors duration-300 ${
        isClickable ? "text-white group-hover:text-blue-300" : "text-white"
      }`}>
        {title}
      </h3>
      <p className="text-gray-300 mt-2 text-sm md:text-base transition-colors duration-300">
        {text}
      </p>
      {isClickable && (
        <span className="mt-2 text-blue-400 text-xs font-medium transition-all duration-300 group-hover:translate-x-1">
          Click to connect →
        </span>
      )}
    </div>
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
    { name: "twitter", url: "#" },
    { name: "facebook", url: "#" },
    { name: "instagram", url: "#" },
    { name: "github", url: "#" }
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

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about mentoring students and helping them shape their future. 
            Whether you need academic guidance, research collaboration, or professional advice, 
            feel free to reach out. I typically respond within 24-48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactItems.map((item, index) => (
            item.href ? (
              <a 
                key={index}
                href={item.href}
                target={item.isExternal ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="hover:no-underline transition-transform duration-300 hover:-translate-y-1"
              >
                <ContactCard 
                  icon={item.icon} 
                  title={item.title} 
                  text={item.text}
                  isClickable={true}
                />
              </a>
            ) : (
              <div key={index}>
                <ContactCard 
                  icon={item.icon} 
                  title={item.title} 
                  text={item.text}
                  isClickable={false}
                />
              </div>
            )
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 md:p-10 mb-16 border border-gray-700 hover:border-blue-500 transition-all duration-500">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Send Me a Message
              </h2>
              <p className="text-gray-400">
                Have a question or want to discuss a project? Fill out the form below.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-300 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${
                    errors.name ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-300 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${
                    errors.email ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-gray-300 font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-5 py-3 rounded-xl bg-gray-700 border ${
                    errors.message ? "border-red-500" : "border-gray-600 hover:border-blue-500"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-gray-500`}
                  placeholder="I'd like to discuss..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 ${
                    isSubmitting 
                      ? "opacity-70 cursor-not-allowed" 
                      : "hover:from-blue-500 hover:to-blue-600 transform hover:scale-105"
                  }`}
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
                </button>
                
                {submitSuccess && (
                  <div className="mt-6 p-4 bg-green-600/90 text-white rounded-lg flex items-center justify-center space-x-2 animate-fade-in">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Connect With Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Follow me on social media to stay updated with my latest projects, research, and educational content.
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {socialPlatforms.map((platform) => (
              <a 
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-700 hover:border-blue-500 hover:bg-blue-600/50"
                aria-label={platform.name}
              >
                <img 
                  src={`/${platform.name}-svgrepo-com.svg`} 
                  alt={platform.name} 
                  className="w-6 h-6 filter invert opacity-80 hover:opacity-100 transition-opacity" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
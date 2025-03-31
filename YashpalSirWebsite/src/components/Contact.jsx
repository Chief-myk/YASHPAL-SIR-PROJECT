// components/Contact.js
import React, { useState } from "react";

const ContactCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg text-center hover:scale-[1.02] transition-transform duration-300 h-full">
      <div className="bg-blue-600 p-3 rounded-full mb-4">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300 mt-2 text-sm md:text-base">{text}</p>
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
      icon: "/address-svgrepo-com.svg", 
      title: "Address", 
      text: "Tulip Grand, Near O.P. Jindal Global University, Sonipat, Haryana. Available from 7:00 - 10:00 AM & 6:00 - 9:00 PM. Consider a call to fix an appointment." 
    },
    { 
      icon: "/call-contact-phone-svgrepo-com.svg", 
      title: "Contact Number", 
      text: "+91-9996498977" 
    },
    { 
      icon: "/mail-svgrepo-com.svg", 
      title: "Email Address", 
      text: "yashpal337@gmail.com" 
    },
    { 
      icon: "/address-svgrepo-com.svg", 
      title: "Office Address", 
      text: "Doctoral Studies, A-374, T3 block, 4th floor, O.P. Jindal Global University, Sonipat, Haryana. Available from 10:00 AM - 6:00 PM. Consider a call to fix an appointment." 
    },
  ];

  const socialPlatforms = ["github", "linkedin", "facebook", "instagram", "twitter"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
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
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
            Contact Me
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I would be happy to assist you with your research/project work. I also provide support in business administration. Feel free to contact me via email or phone for consultancy services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <ContactCard key={index} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl shadow-xl p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${errors.name ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${errors.email ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-gray-700 border ${errors.message ? "border-red-500" : "border-gray-600"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Your message"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : "Send Message"}
              </button>
              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-600 text-white rounded-lg animate-fade-in">
                  Message sent successfully!
                </div>
              )}
            </div>
          </form>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">Find Me On</h2>
          <div className="flex justify-center gap-5 flex-wrap">
            {socialPlatforms.map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <img 
                  src={`/${platform}-svgrepo-com.svg`} 
                  alt={platform} 
                  className="w-6 h-6 filter invert" 
                />
              </a>
            ))}
          </div>
        </div>

        <footer className="text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
          ©{new Date().getFullYear()} All rights reserved | Made with ❤️ by Mayank
        </footer>
      </div>
    </div>
  );
};

export default Contact;
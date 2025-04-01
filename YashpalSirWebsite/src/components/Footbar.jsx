// Footbar.js
import React from 'react';

const Footbar = () => {
  const socialPlatforms = [
    { name: "linkedin", url: "https://www.linkedin.com/in/yashpal-chopra-27ab0340/" },
    { name: "twitter", url: "#" },
    { name: "facebook", url: "#" },
    { name: "instagram", url: "#" },
    { name: "github", url: "#" }
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Services", url: "#" },
    { name: "Portfolio", url: "#" },
    { name: "Contact", url: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Mayank Mittal
            </h3>
            <p className="text-gray-300">
              Full Stack Developer creating beautiful, functional websites and applications for businesses and individuals.
            </p>
            <div className="flex space-x-4">
              {socialPlatforms.map((platform) => (
                <a 
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  aria-label={platform.name}
                >
                  <img 
                    src={`/${platform.name}-svgrepo-com.svg`} 
                    alt={platform.name} 
                    className="w-5 h-5 filter invert" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100 uppercase tracking-wider">Contact Me</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:mayankixa17@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  mayankixa17@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919990538802" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 9990538802
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Feel free to contact me for professional website or app development for business or personal use.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-100 uppercase tracking-wider">Newsletter</h3>
            <p className="text-gray-400">Subscribe to get updates on my latest projects and articles.</p>
            <form className="mt-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-r-md transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mayank Mittal. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">Sitemap</a>
            </div>
          </div>
          <p className="text-center text-gray-600 text-xs mt-4">
            Made with ❤️ and React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footbar;
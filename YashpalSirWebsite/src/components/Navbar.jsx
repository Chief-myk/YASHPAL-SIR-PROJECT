// components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  // Close navbar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap justify-between items-center sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-md shadow-xl" : "bg-gray-900/90 backdrop-blur-sm"}`}>
      <div className="flex items-center">
        <Link to="/" className="block w-20 h-20 md:w-24 md:h-24">
          <img 
            src="/ysLogo-removebg-preview.png" 
            alt="Logo" 
            className="w-full h-full object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:rotate-2 hover:shadow-cyan-500/20" 
          />
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden z-50">
        <button 
          onClick={toggleNavbar} 
          className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8 text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-white hover:text-cyan-400 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-2 lg:space-x-4 text-white">
        {navLinks.map((item) => (
          <NavItem key={item.path} item={item} currentPath={location.pathname} />
        ))}
      </ul>

      {/* Mobile menu */}
      <div className={`fixed inset-0 md:hidden bg-gray-900/95 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out transform ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
        <div className="flex flex-col items-center justify-center h-full pt-24">
          <ul className="flex flex-col space-y-8 text-center w-full px-8">
            {navLinks.map((item) => (
              <MobileNavItem 
                key={item.path} 
                item={item} 
                currentPath={location.pathname}
                onClick={handleOptionClick}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/notes", label: "Notes" },
  { path: "/projects", label: "Projects" }
];

const NavItem = ({ item, currentPath }) => (
  <li>
    <Link
      to={item.path}
      className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 hover:text-cyan-400 group ${currentPath === item.path ? "text-cyan-400" : "text-white"}`}
    >
      {item.label}
      <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 transform transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${currentPath === item.path ? "scale-x-100" : ""}`}></span>
    </Link>
  </li>
);

const MobileNavItem = ({ item, currentPath, onClick }) => (
  <li className="w-full">
    <Link
      to={item.path}
      onClick={onClick}
      className={`block w-full py-4 px-6 text-2xl font-medium rounded-lg transition-all duration-300 ${currentPath === item.path ? "bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400" : "text-white hover:bg-gray-800"}`}
    >
      {item.label}
    </Link>
  </li>
);

export default Navbar;
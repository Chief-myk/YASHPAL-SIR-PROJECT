// components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black px-4 sm:px-6 lg:px-8 py-1 flex flex-wrap justify-between items-center sticky top-0 z-50 shadow-lg">
      <div className="flex items-center">
        <Link to="/" className="block w-24 h-24 md:w-32 md:h-32">
          <img 
            src="/ysLogo-removebg-preview.png" 
            alt="Logo" 
            className="w-full h-full object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" 
          />
        </Link>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-4 lg:space-x-6 text-white text-lg">
        {navLinks.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </ul>

      {/* Mobile menu */}
      {isOpen && (
        <div className="w-full md:hidden mt-4">
          <ul className="flex flex-col space-y-3 text-white">
            {navLinks.map((item) => (
              <NavItem key={item.path} item={item} mobile />
            ))}
          </ul>
        </div>
      )}
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

const NavItem = ({ item, mobile = false }) => (
  <li className={mobile ? "py-2 border-b border-gray-700" : ""}>
    <Link
      to={item.path}
      className={`hover:text-gray-300 transition-colors duration-300 ${mobile ? "block px-4 py-2" : ""}`}
    >
      {item.label}
    </Link>
  </li>
);

export default Navbar;
// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-700 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl text-center relative z-10 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
          Professor Yashpal Chopra
        </h1>
        <p className="text-xl italic mb-6 text-indigo-200 animate-slide-up delay-100">
          Senior Professor | Mentor | Innovator
        </p>
        <div className="animate-slide-up delay-200">
          <img
            src="/fotor-2025032912356.png" 
            alt="Professor Yashpal Chopra"
            className="rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 shadow-lg border-4 border-white hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="space-y-4 animate-slide-up delay-300">
          <p className="text-lg leading-relaxed">
            With over 20 years of teaching experience, Professor Yashpal Chopra is a distinguished educator at
            <strong> Dr. Akhilesh Das Gupta Institute of Technology</strong>. His passion for teaching and mentorship has inspired
            countless students to excel in the field of technology and engineering.
          </p>
          <p className="text-lg leading-relaxed">
            He specializes in <strong>Data Structures, Algorithms, Artificial Intelligence, and Cloud Computing</strong>.
            With a track record of publishing multiple research papers and mentoring students in national-level competitions,
            he continues to shape the future of technology with his unparalleled dedication.
          </p>
        </div>
        <div className="mt-8 animate-slide-up delay-500">
          <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <Link to="/about" className="hover:text-gray-300 transition">
              Learn More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
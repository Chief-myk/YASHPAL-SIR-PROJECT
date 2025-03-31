// Footbar.js
import React from 'react';

const Footbar = () => {
  const features = [
    { title: "Financial Expertise", desc: "Get expert guidance to maximize your wealth." },
    { title: "Advanced Technology", desc: "Utilizing cutting-edge AI for financial analysis." },
    { title: "Right Advice", desc: "Tailored investment strategies for your needs." }
  ];

  return (
    <footer className="bg-gray-950 text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Black Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footbar;
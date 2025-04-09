import React from 'react';
import { motion } from 'framer-motion';
import { FaImages } from 'react-icons/fa';

const Gallery = () => {
  const imageUrls = [
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1025/600/400',
    'https://picsum.photos/id/1039/600/400',
    'https://picsum.photos/id/1050/600/400',
    'https://picsum.photos/id/1062/600/400',
    'https://picsum.photos/id/1074/600/400',
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 to-blue-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaImages className="text-white text-6xl mx-auto mb-4 drop-shadow" />
          <h1 className="text-white text-4xl sm:text-5xl font-bold drop-shadow-lg">
            Gallery Showcase
          </h1>
          <p className="text-blue-200 mt-2 text-lg">
            A visual journey into creativity and memories.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imageUrls.map((url, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={url}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

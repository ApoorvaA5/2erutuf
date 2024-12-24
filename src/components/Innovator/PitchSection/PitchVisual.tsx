import React from 'react';
import { motion } from 'framer-motion';

const PitchVisual = () => {
  const investors = [
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      position: "top-0 right-20"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      position: "top-32 right-0"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
      position: "top-64 right-20"
    }
  ];

  return (
    <div className="relative">
      {/* Main Pitch Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md"
      >
        <div className="w-full h-40 bg-blue-100 rounded-lg mb-6" />
        <div className="space-y-4">
          <div className="h-4 bg-gray-100 rounded w-3/4" />
          <div className="h-4 bg-gray-100 rounded w-1/2" />
          <div className="h-4 bg-gray-100 rounded w-2/3" />
        </div>
      </motion.div>

      {/* Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {investors.map((_, index) => (
          <motion.path
            key={index}
            d={`M 350,${100 + index * 80} L 450,${50 + index * 80}`}
            stroke="#ddd"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        ))}
      </svg>

      {/* Investor Avatars */}
      {investors.map((investor, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className={`absolute ${investor.position}`}
        >
          <img
            src={investor.image}
            alt={`Investor ${index + 1}`}
            className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PitchVisual;
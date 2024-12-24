import React from 'react';
import { motion } from 'framer-motion';
import { DealCategory } from './types';

interface DealCardProps extends DealCategory {
  index: number;
}

export const DealCard: React.FC<DealCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl transform transition-transform group-hover:scale-105" />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>

        <motion.button
          whileHover={{ x: 5 }}
          className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700"
        >
          Read more
          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};
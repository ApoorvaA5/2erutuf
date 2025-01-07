import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface PathData {
  id: string;
  title: string;
  description: string;
}

interface PathOptionProps {
  path: PathData;
  index: number;
  onClick: () => void;
}

const PathOption: React.FC<PathOptionProps> = ({ path, index, onClick }) => {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileHover={{ scale: 1.02, y: -3 }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-md bg-gradient-to-br from-blue-50 to-purple-50 p-4 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-0 hover:opacity-20 rounded-md transition-opacity duration-500" />

      <div className="relative z-10 text-left">
        <h3 className="text-base font-medium text-gray-700 mb-1 transition-colors duration-300">
          {path.title}
        </h3>
        <p className="text-sm text-gray-500 hover:text-gray-600 transition-colors duration-300">
          {path.description}
        </p>
      </div>
    </motion.div>
  );
};

export default PathOption;


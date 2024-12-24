import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  index: number;
  delay: number;
}

const ProcessCard = ({ icon: Icon, title, description, gradient, delay }: ProcessCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
    >
      <div className="absolute inset-0 bg-white rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl" />
      <div className="relative p-8 backdrop-blur-sm">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.8, type: "spring" }}
          className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center transform transition-all duration-300 group-hover:shadow-lg`}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        <motion.h3 
          className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p 
          className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.4 }}
        >
          {description}
        </motion.p>

        {/* Decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default ProcessCard;

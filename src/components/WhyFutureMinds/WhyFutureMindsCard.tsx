import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface WhyFutureMindsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const WhyFutureMindsCard = ({ icon: Icon, title, description, index }: WhyFutureMindsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative overflow-hidden group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
      />
      
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300"
      >
        <Icon className="h-8 w-8 text-white" />
      </motion.div>
      
      <motion.h3 
        className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.4 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 via-purple-500/10 to-transparent rounded-tl-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default WhyFutureMindsCard;
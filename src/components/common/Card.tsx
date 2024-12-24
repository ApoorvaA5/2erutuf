import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface CardProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  hover?: boolean;
}

const Card = ({ 
  children, 
  index = 0,
  className = '',
  hover = true 
}: CardProps) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className={`
        bg-white rounded-2xl p-6
        ${hover ? 'hover:shadow-xl transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;
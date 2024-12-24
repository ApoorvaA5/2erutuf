import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { gradients } from '../../utils/gradients';

interface IconWrapperProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg';
  gradient?: keyof typeof gradients;
  className?: string;
}

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-14 h-14'
} as const;

const iconSizes = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7'
} as const;

const IconWrapper = ({ 
  icon: Icon, 
  size = 'md',
  gradient = 'primary',
  className = ''
}: IconWrapperProps) => {
  return (
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.8 }}
      className={`
        ${sizeClasses[size]}
        bg-gradient-to-br ${gradients[gradient]}
        rounded-lg flex items-center justify-center
        ${className}
      `}
    >
      <Icon className={`${iconSizes[size]} text-white`} />
    </motion.div>
  );
};

export default IconWrapper;
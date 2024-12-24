import React from 'react';
import { gradients } from '../../utils/gradients';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: keyof typeof gradients;
  className?: string;
}

const GradientText = ({ 
  children, 
  gradient = 'secondary',
  className = ''
}: GradientTextProps) => {
  return (
    <span className={`bg-gradient-to-r ${gradients[gradient]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
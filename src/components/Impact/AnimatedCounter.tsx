import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value }) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const num = Math.round(latest);
    if (value.includes('Cr+')) {
      return `${num} Cr+`;
    }
    if (value.includes('+')) {
      return `${num}+`;
    }
    return num.toString();
  });

  React.useEffect(() => {
    const animation = animate(count, numericValue, { duration: 2 });
    return animation.stop;
  }, [numericValue, count]);

  return <motion.span>{rounded}</motion.span>;
};

export default AnimatedCounter;
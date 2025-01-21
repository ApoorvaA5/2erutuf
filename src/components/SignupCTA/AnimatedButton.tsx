import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href: string;
  variant: 'primary' | 'secondary';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, href, variant }) => {
  const baseClasses =
    'px-8 py-4 rounded-full font-semibold inline-flex items-center group relative overflow-hidden';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg',
    secondary: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50',
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to={href} className={`${baseClasses} ${variantClasses[variant]}`}>
        {variant === 'primary' && (
          <motion.span
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        )}
        {variant === 'secondary' && (
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 20, opacity: 0.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-full bg-orange-600"
            style={{ originX: 0.5, originY: 0.5 }}
          />
        )}
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
};

export default AnimatedButton;
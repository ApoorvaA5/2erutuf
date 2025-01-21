import React from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

interface LoginButtonProps {
  onClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
    >
      <LogIn className="w-4 h-4" />
      <span>Login</span>
    </motion.button>
  );
};

export default LoginButton;
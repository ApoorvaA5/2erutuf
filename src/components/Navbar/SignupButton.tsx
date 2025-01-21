import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';

interface SignupButtonProps {
  onClick: () => void;
}

const SignupButton: React.FC<SignupButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-2 border-2 border-white-500 text-orange-500 red-500 rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300"
    >
      <UserPlus className="w-4 h-4" />
      <span>Sign Up</span>
    </motion.button>
  );
};

export default SignupButton;

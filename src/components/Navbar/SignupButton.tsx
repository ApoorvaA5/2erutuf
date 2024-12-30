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
      className="flex items-center space-x-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
    >
      <UserPlus className="w-4 h-4" />
      <span>Sign Up</span>
    </motion.button>
  );
};

export default SignupButton;
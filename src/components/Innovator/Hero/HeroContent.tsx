import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';

const HeroContent = () => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="space-y-8"
    >
      <h1 className="text-5xl font-bold text-gray-900">
        Transform your ideas with{' '}
        <span className="relative">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Future Minds
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left"
          />
        </span>
      </h1>
      
      <p className="text-xl text-gray-600">
        Join a thriving ecosystem of innovators, mentors, and investors. We provide the resources, 
        guidance, and connections you need to turn your vision into reality.
      </p>

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center group"
        >
          Start Your Journey
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300"
        >
          Explore Programs
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroContent;
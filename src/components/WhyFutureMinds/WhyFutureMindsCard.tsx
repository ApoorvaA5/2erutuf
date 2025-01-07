import React from 'react';
import { motion } from 'framer-motion';

interface WhyFutureMindsCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

const WhyFutureMindsCard = ({ image, title, description, index }: WhyFutureMindsCardProps) => {
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
      className="relative overflow-hidden group p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
      />
      
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.2,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="w-20 h-20 mx-auto mb-6 relative"
        >
          {/* Animated background circles */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-full"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Image container */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ 
              clipPath: "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)"
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -4, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 rounded-xl overflow-hidden"
            >
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.h3 
        className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-lg text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.4 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/10 via-purple-500/10 to-transparent rounded-tl-full"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.15 }}
        transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
      />
    </motion.div>
  );
};

export default WhyFutureMindsCard;
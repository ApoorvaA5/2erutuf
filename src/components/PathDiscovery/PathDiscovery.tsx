import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PathDiscovery = () => {
  const navigate = useNavigate();
  
  const paths = [
    {
      id: 'innovator',
      title: 'For Innovators',
      description: 'Find funding and mentorship for your next breakthrough',
      href: '/innovate',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 'investor',
      title: 'For Investors',
      description: 'Discover and support the next generation of innovation',
      href: '/partner',
      gradient: 'from-purple-500 to-pink-400',
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-6" // Reduced gap between buttons
      >
        {paths.map((path, index) => (
          <motion.button
            key={path.id}
            onClick={() => navigate(path.href)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }} // Reduced hover lift
            className="relative rounded-md bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 p-6 transition-all duration-300 w-full text-left" // Adjusted padding
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300"> {/* Adjusted text size */}
                {path.title}
              </h3>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                {path.description}
              </p>
              <div className="mt-4 flex items-center text-white/70 group-hover:text-white transition-colors duration-300">
                <span className="text-xs font-semibold">Get Started</span> {/* Adjusted text size */}
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default PathDiscovery;

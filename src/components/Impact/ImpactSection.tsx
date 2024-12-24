import React from 'react';
import { motion } from 'framer-motion';
import ImpactStat from './ImpactStat';
import { impactStats } from './ImpactData';

const ImpactSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2574" 
          alt="Impact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-xl text-white/80">Making a difference in the startup ecosystem</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <ImpactStat key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

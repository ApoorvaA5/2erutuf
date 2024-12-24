import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LogoSlider from './LogoSlider';
import GradientText from '../common/GradientText';

const InvestmentPhilosophy = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-50" />
        <div className="absolute inset-0 bg-grid-gray-100 opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            <GradientText>Future Minds</GradientText> Investment Philosophy
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Invest and breed innovative startups solving real-world problems, driven by technology, 
            targeting a large market led by founders focused on execution and excellence. Our investment 
            strategy is built on risk mitigated high return strategy, driven by leveraging the Group's 
            mentor and expert pool and global networks.
          </p>
          
          <motion.button
            whileHover={{ x: 10 }}
            className="inline-flex items-center text-blue-600 font-semibold mt-8 group"
          >
            Read More
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
        </motion.div>

        {/* Company Logos Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <LogoSlider />
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;
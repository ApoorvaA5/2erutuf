import React from 'react';
import { motion } from 'framer-motion';
import PitchVisual from './PitchVisual';
import { fadeInLeft, fadeInRight } from '../../../utils/animations';

const PitchSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <PitchVisual />
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Pitch your business to investors
            </h2>
            <p className="text-xl text-gray-600">
              Build your pitch using our tried and tested template and put your business 
              in front of our growing network of angel investors.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-blue-600">₹1,000,000</div>
                <div className="text-gray-600">Total Required</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-bold text-purple-600">₹25,000</div>
                <div className="text-gray-600">Min per Investor</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PitchSection;
import React from 'react';
import { motion } from 'framer-motion';
import { DealCard } from './DealCard';
import { dealCategories } from './data';
import GradientText from '../common/GradientText';

export const DealSourcingSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Deal sourcing for <GradientText>every kind</GradientText> of business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover opportunities tailored to your business needs and growth objectives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dealCategories.map((category, index) => (
            <DealCard
              key={category.id}
              {...category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealSourcingSection;
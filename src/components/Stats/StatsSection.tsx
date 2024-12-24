import React from 'react';
import { motion } from 'framer-motion';
import StatCard from './StatCard';
import { statsData } from './data';

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making a difference in the startup ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
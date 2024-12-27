import React from 'react';
import { motion } from 'framer-motion';
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

        <div className="space-y-12">
          {dealCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white rounded-2xl shadow-lg p-8 hover:bg-gray-50 transition-all duration-300"
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${category.gradient}`}
              ></div>
              <div className="flex items-center space-x-6">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealSourcingSection;

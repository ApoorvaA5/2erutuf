import React from 'react';
import { motion } from 'framer-motion';
import CodeFeatureCard from './CodeFeatureCard';
import { codeFeatures } from './codeFeatureData';
import CodePreview from './CodePreview';
import GradientText from '../common/GradientText';
import { fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

const ExcitingCodeSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50/50 to-indigo-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Write Better Code,{' '}
                <GradientText>Faster</GradientText>
              </h2>
              <p className="text-lg text-gray-600">
                Experience the future of coding with our advanced development environment
                and intelligent tools.
              </p>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {codeFeatures.map((feature, index) => (
                <CodeFeatureCard key={feature.id} {...feature} index={index} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CodePreview />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExcitingCodeSection;
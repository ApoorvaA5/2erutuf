import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { testimonials } from './data';
import GradientText from '../common/GradientText';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-1/2 border border-blue-200/20 rounded-full"
            style={{
              width: `${150 + i * 20}%`,
              height: `${150 + i * 20}%`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by our customers across <GradientText>India</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over the past 15 years we've raised funding for thousands of businesses who have been kind enough to recognise our support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
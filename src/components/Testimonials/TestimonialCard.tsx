import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <Quote className="h-8 w-8 text-blue-500 mb-4 opacity-50" />
      
      <p className="text-gray-700 mb-6 relative z-10">
        {testimonial.content}
      </p>
      
      <div className="flex items-center gap-4">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          src={testimonial.author.avatar}
          alt={testimonial.author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author.name}</h4>
          <p className="text-sm text-gray-600">
            {testimonial.author.role} at {testimonial.author.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
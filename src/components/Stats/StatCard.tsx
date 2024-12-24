import React from 'react';
import { motion } from 'framer-motion';
import { StatCardProps } from './types';
import AnimatedCounter from './components/AnimatedCounter';

const StatCard: React.FC<StatCardProps> = ({ 
  icon: Icon, 
  value, 
  label, 
  prefix, 
  gradient, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          {prefix}<AnimatedCounter value={value} />
        </h3>
        <p className="text-gray-600">{label}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;
import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Lightbulb } from 'lucide-react';
import { fadeInUp } from '../../../utils/animations';

const stats = [
  { icon: Users, value: "354,789", label: "Active Mentors & Investors" },
  { icon: TrendingUp, value: "$2.1B", label: "Innovation Capital" },
  { icon: Lightbulb, value: "15,000+", label: "Success Stories" }
];

const HeroStats = () => {
  return (
    <motion.div 
      variants={fadeInUp}
      className="grid grid-cols-3 gap-6"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-center"
          >
            <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 mb-3">
              <Icon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default HeroStats;
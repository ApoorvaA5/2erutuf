import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

interface ImpactStatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  index: number;
}

const ImpactStat: React.FC<ImpactStatProps> = ({ icon: Icon, value, label, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="text-center"
    >
      <Icon className="h-12 w-12 mx-auto mb-4 text-emerald-400" />
      <motion.div
        className="text-4xl font-bold text-emerald-400 mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.2 }}
      >
        <AnimatedCounter value={value} />
      </motion.div>
      <p className="text-white/80">{label}</p>
    </motion.div>
  );
};

export default ImpactStat;
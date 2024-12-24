import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { LocationInfo } from './types';

interface LocationBadgeProps {
  location: LocationInfo;
  index: number;
}

const LocationBadge: React.FC<LocationBadgeProps> = ({ location, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-center space-x-2 text-sm text-gray-600"
    >
      <MapPin className="h-4 w-4 text-blue-600" />
      <span>{location.country}</span>
      <span className="text-gray-400">•</span>
      <span>{location.city}</span>
    </motion.div>
  );
};
export default LocationBadge;
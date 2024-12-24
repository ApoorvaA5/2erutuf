import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink } from './types';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex space-x-4">
      {links.map(({ platform, href, icon: Icon }) => (
        <motion.a
          key={platform}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
        >
          <Icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
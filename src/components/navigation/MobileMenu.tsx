import React from 'react';
import { NavItem } from '../../types/navigation';

interface MobileMenuProps {
  items: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items }) => {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        <button className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
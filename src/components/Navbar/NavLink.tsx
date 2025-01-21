import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, isActive, onClick }) => {
  if (href.startsWith('#')) {
    return (
      <button
        onClick={onClick}
        className={`text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
          isActive ? 'text-orange-600' : ''
        }`}
      >
        {title}
        <span
          className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform origin-left transition-transform duration-300 ${
            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      </button>
    );
  }

  return (
    <Link
      to={href}
      onClick={onClick}
      className={`text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium relative group transition-colors duration-300 ${
        isActive ? 'text-orange-600' : ''
      }`}
    >
      {title}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform origin-left transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </Link>
  );
};

export default NavLink;

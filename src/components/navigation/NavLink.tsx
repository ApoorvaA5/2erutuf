import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, hasDropdown }) => {
  return (
    <a 
      href={href} 
      className="text-gray-700 hover:text-indigo-600 flex items-center transition-colors duration-200"
    >
      {children}
      {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
    </a>
  );
};

export default NavLink;
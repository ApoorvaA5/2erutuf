import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { NavItem } from '../../types/navigation';

const navigationItems: NavItem[] = [
  { label: 'Solutions', href: '#', hasDropdown: true },
  { label: 'Features', href: '#' },
  { label: 'Resources', href: '#' },
  { label: 'Pricing', href: '#' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DevStudio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavLink key={item.label} href={item.href} hasDropdown={item.hasDropdown}>
                {item.label}
              </NavLink>
            ))}
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu items={navigationItems} />}
    </nav>
  );
};

export default Navbar;
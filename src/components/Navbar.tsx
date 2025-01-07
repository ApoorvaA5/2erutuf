import React from 'react';
import { Menu as MenuIcon, ShoppingCart, User, Home, Info, FileText, Settings } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-12 w-auto"
              src="https://media.licdn.com/dms/image/v2/D4D0BAQHGBCaY3o1hKg/company-logo_200_200/company-logo_200_200/0/1713012126041"
              alt="Go Spoon"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink icon={<Home className="w-4 h-4" />} text="Home" />
            <NavLink icon={<Info className="w-4 h-4" />} text="About Us" />
            <NavLink icon={<MenuIcon className="w-4 h-4" />} text="Menu" />
            <NavLink icon={<ShoppingCart className="w-4 h-4" />} text="Shop" />
            <NavLink icon={<FileText className="w-4 h-4" />} text="Our Process" />
            <NavLink icon={<User className="w-4 h-4" />} text="Account" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="p-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-orange-50 focus:outline-none">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink text="Home" />
          <MobileNavLink text="About Us" />
          <MobileNavLink text="Menu" />
          <MobileNavLink text="Shop" />
          <MobileNavLink text="Our Process" />
          <MobileNavLink text="Account" />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

function MobileNavLink({ text }: { text: string }) {
  return (
    <a
      href="#"
      className="text-gray-700 hover:text-orange-500 block px-3 py-2 rounded-md text-base font-medium"
    >
      {text}
    </a>
  );
}
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import LoginModal from '../auth/LoginModal';
import SignupModal from '../auth/SignupModal';
import Logo from '../common/Logo';
import { scrollToElement } from '../../utils/scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#') && location.pathname === '/') {
      scrollToElement(href.slice(1));
    }
  };

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Innovator', href: '/innovate' },
    { title: 'Invest', href: '/partner' },
    { title: 'Blogs', href: '#blog' },
    { title: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0">
              <Logo size="md" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.title} 
                  href={link.href} 
                  title={link.title}
                  isActive={location.pathname === link.href}
                  onClick={() => handleNavClick(link.href)}
                />
              ))}
              <LoginButton onClick={() => setIsLoginModalOpen(true)} />
              <SignupButton onClick={() => setIsSignupModalOpen(true)} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/90 backdrop-blur-md`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
                  location.pathname === link.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.title}
              </Link>
            ))}
            <div className="px-3 py-2 space-y-2">
              <LoginButton onClick={() => setIsLoginModalOpen(true)} />
              <SignupButton onClick={() => setIsSignupModalOpen(true)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
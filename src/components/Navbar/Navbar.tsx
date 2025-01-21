import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import Logo from "../common/Logo"; // Updated to support `size` prop

interface NavbarProps {
  onOpenSignup: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSignup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Innovator", href: "/innovate" },
    { title: "Invest", href: "/partner" },
    { title: "Blogs", href: "#blog" },
    { title: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white/90 backdrop-blur-md shadow-lg"
      : "bg-transparent"
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo with size prop */}
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
            activeClassName="text-orange-600"
          />
        ))}
        <LoginButton
          onClick={() => setIsLoginModalOpen(true)}
          className="text-orange-500 hover:text-red-500"
        />
        <SignupButton
          onClick={onOpenSignup}
          className="text-orange-500 hover:text-red-500"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-orange-600 hover:text-red-500 transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden transition-all duration-300 ease-in-out ${
      isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    } overflow-hidden bg-white/90 backdrop-blur-md`}
  >
    <div className="px-4 pt-2 pb-3 space-y-1">
      {navLinks.map((link) => (
        <Link
          key={link.title}
          to={link.href}
          className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-300 ${
            location.pathname === link.href
              ? "text-orange-600 bg-orange-50"
              : "text-gray-700 hover:text-red-500 hover:bg-orange-100"
          }`}
        >
          {link.title}
        </Link>
      ))}
      <div className="px-3 py-2 space-y-2">
        <LoginButton
          onClick={() => setIsLoginModalOpen(true)}
          className="text-orange-500 hover:text-red-500"
        />
        <SignupButton
          onClick={onOpenSignup}
          className="text-orange-500 hover:text-red-500"
        />
      </div>
    </div>
  </div>
</nav>
      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Navbar;

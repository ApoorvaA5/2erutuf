import React from 'react';
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import LocationBadge from './LocationBadge';
import { serviceLinks, supportLinks, socialLinks, locations } from './data';
import logo from '../../assets/logo.png'; // Adjust path if necessary

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container to align sections */}
        <div className="flex flex-wrap justify-center gap-16 pb-12 border-b border-gray-700">
          
          {/* Logo and Description */}
          <div className="flex flex-col items-center text-center">
            <Link to="/" className="flex items-center justify-center space-x-2 mb-4">
              <img src={logo} alt="Future Minds Logo" className="h-20 w-auto" />
              <span className="text-xl font-bold text-white">Future Minds</span>
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Empowering innovators and investors <br /> to build a better future together.
            </p>
            <SocialLinks links={socialLinks} />
          </div>

          {/* Services Links */}
          <div className="flex flex-col items-center text-center">
            <FooterLinks title="Services" links={serviceLinks} />
          </div>

          {/* Support Links */}
          <div className="flex flex-col items-center text-center">
            <FooterLinks title="Support" links={supportLinks} />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>+91 80266 18661</p>
              <p>info@futureminds.in</p>
              <p>
                #25/1, 1st Floor, Lotus Building,
                <br />
                Bull Temple Road, Gandhi Bazaar,
                <br />
                Basavanagudi, Bengaluru,
                <br />
                Karnataka 560004
              </p>
            </div>
          </div>
        </div>

        {/* Global Presence */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {locations.map((location, index) => (
            <LocationBadge key={location.country} location={location} index={index} />
          ))}
        </div>

        <p className="text-sm text-gray-300 text-center">
          © {new Date().getFullYear()} Future Minds. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;



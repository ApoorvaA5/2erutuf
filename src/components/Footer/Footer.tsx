import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import LocationBadge from './LocationBadge';
import { serviceLinks, supportLinks, socialLinks, locations } from './data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-gray-200">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Future Minds
              </span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Empowering innovators and investors to build a better future together.
            </p>
            <SocialLinks links={socialLinks} />
          </div>

          {/* Services Links */}
          <div className="col-span-2">
            <FooterLinks title="Services" links={serviceLinks} />
          </div>

          {/* Support Links */}
          <div className="col-span-1">
            <FooterLinks title="Support" links={supportLinks} />
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-600">
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
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {locations.map((location, index) => (
              <LocationBadge key={location.country} location={location} index={index} />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Future Minds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
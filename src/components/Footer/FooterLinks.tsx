import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLink } from './types';

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
  titleClass?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links, titleClass = "text-white" }) => {
  return (
    <div>
      <h3 className={`font-semibold ${titleClass} mb-4`}>{title}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

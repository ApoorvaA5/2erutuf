import { Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';
import { FooterLink, SocialLink, LocationInfo } from './types';

export const serviceLinks: FooterLink[] = [
  { label: 'For Innovators', href: '/innovate' },
  { label: 'For Investors', href: '/partner' },
  { label: 'Investment Process', href: '#investment-process' },
  { label: 'Deal Sourcing', href: '#deal-sourcing' },
  { label: 'Success Stories', href: '#success-stories' }
];

export const supportLinks: FooterLink[] = [
  { label: 'Contact us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
  { label: 'FAQ', href: '/faq' }
];

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', href: '#', icon: Linkedin },
  { platform: 'Twitter', href: '#', icon: Twitter },
  { platform: 'Instagram', href: '#', icon: Instagram },
  { platform: 'Facebook', href: '#', icon: Facebook }
];

export const locations: LocationInfo[] = [
  { country: 'India', city: 'Bangalore' },
  { country: 'Singapore', city: 'Singapore' },
  { country: 'United Kingdom', city: 'London' },
  { country: 'Europe', city: 'Berlin' },
  { country: 'UAE', city: 'Dubai' }
];
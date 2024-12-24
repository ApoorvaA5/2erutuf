import { Building, Users, Briefcase, LineChart } from 'lucide-react';
import { DealCategory } from './types';

export const dealCategories: DealCategory[] = [
  {
    id: 'corporate',
    title: 'Corporate',
    description: 'Accelerate your growth. Discover and source strategic deals quickly and efficiently.',
    icon: Building,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'family-offices',
    title: 'Family Offices & UHNWIs',
    description: 'Grow your wealth. Access investments, M&A and real estate deals confidentially.',
    icon: Users,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'sme',
    title: 'Small & Medium Enterprise',
    description: 'Expand your market, at home and abroad, with new clients, suppliers and investors.',
    icon: Briefcase,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'private-equity',
    title: 'Private Equity & Venture Capital',
    description: 'Originate proprietary deal flow. Source investment opportunities directly from CEOs.',
    icon: LineChart,
    gradient: 'from-green-500 to-emerald-500'
  }
];
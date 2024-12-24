import { Building, Users, TrendingUp, ArrowRightLeft } from 'lucide-react';
import { StatData } from './types';

export const statsData: StatData[] = [
  {
    icon: Building,
    value: 8073957701,
    label: 'Capital Raised for Startups',
    prefix: '₹',
    gradient: 'from-emerald-400 to-cyan-400'
  },
  {
    icon: TrendingUp,
    value: 260,
    label: 'Deals Invested',
    gradient: 'from-blue-400 to-indigo-400'
  },
  {
    icon: Users,
    value: 23500,
    label: 'Investors on Platform',
    gradient: 'from-purple-400 to-pink-400'
  },
  {
    icon: ArrowRightLeft,
    value: 121,
    label: 'Follow-ons/Exits',
    gradient: 'from-orange-400 to-red-400'
  }
];
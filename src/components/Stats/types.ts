import { LucideIcon } from 'lucide-react';

export interface StatData {
  icon: LucideIcon;
  value: number;
  label: string;
  prefix?: string;
  gradient: string;
}

export interface StatCardProps extends StatData {
  index: number;
}
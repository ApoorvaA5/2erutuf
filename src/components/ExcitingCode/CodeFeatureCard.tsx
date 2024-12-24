import React from 'react';
import { LucideIcon } from 'lucide-react';
import Card from '../common/Card';
import IconWrapper from '../common/IconWrapper';

interface CodeFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const CodeFeatureCard = ({ icon, title, description, index }: CodeFeatureCardProps) => {
  return (
    <Card 
      index={index}
      className="flex gap-4 hover:bg-white/80 group"
      hover={false}
    >
      <IconWrapper icon={icon} size="md" />
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default CodeFeatureCard;
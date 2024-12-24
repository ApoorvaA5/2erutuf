import React from 'react';
import { Sparkles } from 'lucide-react';

interface AnnouncementBadgeProps {
  text: string;
}

const AnnouncementBadge: React.FC<AnnouncementBadgeProps> = ({ text }) => {
  return (
    <div className="inline-flex items-center rounded-full px-6 py-2 bg-indigo-100 mb-8">
      <Sparkles className="h-4 w-4 text-indigo-600 mr-2" />
      <span className="text-sm font-medium text-indigo-600">{text}</span>
    </div>
  );
};

export default AnnouncementBadge;
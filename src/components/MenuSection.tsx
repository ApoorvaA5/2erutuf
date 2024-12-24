import React, { useState } from 'react';
import { MenuItem } from './MenuItem';
import { ChevronDown } from 'lucide-react';

type MenuSectionProps = {
  title: string;
  items: Array<{
    name: string;
    image?: string;
  }>;
  icon?: React.ReactNode;
};

export function MenuSection({ title, items, icon }: MenuSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 hover:bg-white/40 transition-colors duration-300">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between gap-2 mb-2"
      >
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-orange-800">{title}</h3>
          {icon && <span className="text-orange-600">{icon}</span>}
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-orange-600 transition-transform duration-300 ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-3 transition-all duration-300 origin-top ${
          isExpanded ? 'opacity-100 max-h-[1000px]' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        {items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}
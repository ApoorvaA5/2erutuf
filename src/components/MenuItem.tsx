import React from 'react';

type MenuItemProps = {
  name: string;
  image?: string;
};

export function MenuItem({ name, image }: MenuItemProps) {
  return (
    <li className="group relative bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:bg-orange-50">
      <div className="flex items-center gap-2">
        {image && (
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        )}
        <span className="text-sm text-orange-900 group-hover:text-orange-600 transition-colors font-medium">
          {name}
        </span>
      </div>
    </li>
  );
}
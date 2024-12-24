import React from 'react';
import { MenuSection } from './MenuSection';
import { Diamond } from 'lucide-react';

const menuData = {
  vegGravy: [
    { name: 'Rajma Masala', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=100&h=100' },
    { name: 'Paneer Manchurian', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=100&h=100' },
    { name: 'Chana Masala', image: 'https://images.unsplash.com/photo-1612611741189-282a96a6d6a4?auto=format&fit=crop&w=100&h=100' },
    { name: 'Soyabean Curry', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=100&h=100' },
    { name: 'Mushroom masala', image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=100&h=100' },
    { name: 'Paneer Butter Masala', image: 'https://images.unsplash.com/photo-1631452180775-8b4e4b9c0ba8?auto=format&fit=crop&w=100&h=100' }
  ],
  drySabzi: [
    { name: 'Mushroom (Dry)', image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=100&h=100' },
    { name: 'Baingan Bharta', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=100&h=100' },
    { name: 'Mix veg', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=100&h=100' },
    { name: 'Paneer Bhurji', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=100&h=100' },
    { name: 'Sprout Mix', image: 'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?auto=format&fit=crop&w=100&h=100' },
    { name: 'Bhindi Masala', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=100&h=100' }
  ],
  dal: [
    { name: 'Dal Tadka', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=100&h=100' },
    { name: 'Dal Fry', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=100&h=100' },
    { name: 'Mix Dal', image: 'https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?auto=format&fit=crop&w=100&h=100' },
    { name: 'Dal Makhani', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=100&h=100' }
  ],
  rice: [
    { name: 'Ghee rice', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=100&h=100' },
    { name: 'Steam rice', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=100&h=100' },
    { name: 'Jeera rice', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=100&h=100' },
    { name: 'Mixed Veg Pulao', image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=100&h=100' }
  ]
};

export function Menu() {
  return (
    <div className="bg-orange-50/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">Our Menu</h2>
      <div className="space-y-4">
        <MenuSection 
          title="Veg Gravy" 
          items={menuData.vegGravy} 
          icon={<Diamond className="h-5 w-5" />} 
        />
        <MenuSection 
          title="Dry Sabzi" 
          items={menuData.drySabzi} 
          icon={<Diamond className="h-5 w-5" />} 
        />
        <MenuSection 
          title="Dal" 
          items={menuData.dal} 
          icon={<Diamond className="h-5 w-5" />} 
        />
        <MenuSection 
          title="Rice" 
          items={menuData.rice} 
          icon={<Diamond className="h-5 w-5" />} 
        />
      </div>
      <div className="mt-6 text-center">
        <p className="text-orange-800 font-medium text-sm">
          Sweet & Salad included with all meals
        </p>
      </div>
    </div>
  );
}
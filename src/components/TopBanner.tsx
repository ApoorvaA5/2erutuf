import React from 'react';
import { MapPin } from 'lucide-react';

export function TopBanner() {
  return (
    <div className="bg-orange-500 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D0BAQHGBCaY3o1hKg/company-logo_200_200/company-logo_200_200/0/1713012126041"
            alt="GO Spoon"
            className="h-6 w-6"
          />
          <span className="text-sm">Download the App and Get FLAT 25% Off + 25% Cashback on 1st Order</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-medium hover:bg-orange-50 transition-colors">
            Download
          </button>
          <button className="flex items-center space-x-1 text-sm hover:text-orange-100 transition-colors">
            <MapPin className="h-4 w-4" />
            <span>Select your location</span>
          </button>
        </div>
      </div>
    </div>
  );
}
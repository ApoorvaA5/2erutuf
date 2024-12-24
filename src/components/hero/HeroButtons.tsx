import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <button className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-700 transition-colors duration-200 inline-flex items-center">
        Get started now
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
      <button className="text-lg font-semibold leading-6 text-gray-700 hover:text-indigo-600 transition-colors duration-200">
        Learn more <span aria-hidden="true">→</span>
      </button>
    </div>
  );
};

export default HeroButtons;
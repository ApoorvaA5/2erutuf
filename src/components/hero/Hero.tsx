import React from 'react';
import AnnouncementBadge from './AnnouncementBadge';
import HeroButtons from './HeroButtons';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl">
          <AnnouncementBadge text="New Features Available" />
          
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Build faster with
            <span className="text-indigo-600"> DevStudio</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Empower your development workflow with our cutting-edge tools and resources. 
            Build, deploy, and scale your applications with confidence.
          </p>
          
          <HeroButtons />
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default Hero;
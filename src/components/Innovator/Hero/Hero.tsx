import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <HeroBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <HeroContent />
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
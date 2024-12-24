import React from 'react';

const HeroImage = () => {
  return (
    <div className="mt-16 flow-root">
      <div className="relative rounded-xl bg-gray-900/5 p-8">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
          alt="Developer workspace"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroImage;
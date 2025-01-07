import React from 'react';

const Background = () => {
  return (
    <>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://media.gettyimages.com/id/2170886075/photo/close-up-on-hands-filming-chicago.jpg?s=612x612&w=0&k=20&c=CBJYmUo7kMHmrNr7bGP7Vm8U1cKPjIfrZnkGNZlihUQ=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-900/50 z-0" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="animate-float absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${10 + Math.random() * 20}s linear infinite`,
            }}
          >
            <div className="w-2 h-2 bg-white/10 rounded-full backdrop-blur-sm" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Background;
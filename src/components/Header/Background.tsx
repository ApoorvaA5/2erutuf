import React from 'react';

const Background = () => {
  return (
    <>
      {/* Clean Background Video */}
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        poster="/content/dam/public/mastercardcom/in/en/homepage/Home/small_video-still-sunset-over-bridge_2017x1135.jpg"
        data-src="https://mastercard-a.akamaihd.net/videos/RSA_Header_video_1080p_new.mp4?autoplay=1"
        src="https://mastercard-a.akamaihd.net/videos/RSA_Header_video_1080p_new.mp4?autoplay=1"
        autoPlay
        loop
        muted
        playsInline
      />
    </>
  );
};

export default Background;

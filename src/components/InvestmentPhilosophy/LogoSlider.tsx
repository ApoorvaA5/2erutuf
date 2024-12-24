import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { companyLogos } from './data';

import 'swiper/css';

const LogoSlider = () => {
  return (
    <div className="w-full overflow-hidden bg-white/50 backdrop-blur-sm py-8 rounded-xl">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="max-w-5xl mx-auto"
      >
        {companyLogos.map((company) => (
          <SwiperSlide key={company.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-4"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
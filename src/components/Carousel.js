import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/carousel.css';

import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper';
SwiperCore.use([EffectFlip, Pagination, Navigation]);

export default function Carousel({ images }) {
  const shouldDisableNavigation = images.length === 1;

  return (
    <Swiper
      loop={!shouldDisableNavigation}
      effect={'flip'}
      grabCursor={true}
      pagination={{ clickable: true }}
      navigation={!shouldDisableNavigation} // Disable navigation when shouldDisableNavigation is true
      className='mySwiper'
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <img src={image} alt='carousel-img' className='carousel-img' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

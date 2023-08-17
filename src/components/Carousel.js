import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css' // Import Swiper styles
import 'swiper/css/effect-flip'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import './styles.css';
import '../styles/carousel.css'

// Don't need to import specific modules anymore
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper'
SwiperCore.use([EffectFlip, Pagination, Navigation]) // Initialize required modules

export default function Carousel() {
  const images = [
    './folio2/assets/toni/logo.png',
    './folio2/assets/toni/profile_picture.png',
    './folio2/assets/toni/atria.png',
  ]

  return (
    <Swiper
      loop={true}
      effect={'flip'}
      grabCursor={true}
      pagination={{ clickable: true }}
      navigation={true}
      className='mySwiper'
    >
      {images.map(
        (
          image,
          i // Changed 'testimonials.map' to 'images.map'
        ) => (
          <SwiperSlide key={i}>
            <img src={image} alt='carousel-img' className='carousel-img' />{' '}
            {/* Changed 'images[i]' to 'image' */}
          </SwiperSlide>
        )
      )}
    </Swiper>
  )
}

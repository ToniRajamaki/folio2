import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../styles/work.css'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation';

const TestimonialCarousel = ({ testimonials }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  const images = [
    './folio2/assets/toni/logo.png',
    './folio2/assets/toni/profile_picture.png',
    './folio2/assets/toni/atria.png',
  ]
  return (
    <Swiper
      className='testimonial__container'
      loop={true}
      navigation={true}
      grabCursor={true}
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 48,
        },
      }}
      modules={[Navigation,Pagination]}
    >
      {testimonials.map((el, i) => (
        <SwiperSlide key={i}>
          <img src={images[i]} alt='carousel-img' className='carousel-img' />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TestimonialCarousel

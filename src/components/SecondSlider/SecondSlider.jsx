import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SecondSlider.css';
import Image3 from "../../Images/adaptor.png"
import Image4 from "../../Images/gaming.png"

// import required modules
import { Pagination } from 'swiper/modules';

export default function SecondSlider() {
  return (
    <>
      <Swiper
      
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper special-swiper"
      >
        <SwiperSlide><img src={Image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Image3} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

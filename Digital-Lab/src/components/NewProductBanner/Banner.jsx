import React from 'react'
import img from "./dashimg.webp";
import "./Banner.scss";
import { Swiper , SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from 'swiper';
import ImageWithText from '../ImageWithText/ImageWithText';
import slides from "../../helper/Slides";

function Banner(props) {
  const announcement = props.announcement;

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      // autoplay={{
      //   delay: 2500
      // }}
      modules={[Pagination, Navigation, Autoplay]}
    >
        {
          slides.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <ImageWithText data={slide} />
              </SwiperSlide>
            );
          })
        }
    </Swiper>
  );
}

export default Banner
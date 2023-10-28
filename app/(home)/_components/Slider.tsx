"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SlideData } from "../data/slideData";
import Image from "next/image";

const Slider = () => {
  return (
    <section className='h-[calc(100vh-5rem)]'>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={700}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className='mySwiper h-full w-full'
      >
        {SlideData.map((slide) => (
          <SwiperSlide key={slide.heading}>
            <Image
              src={slide.image}
              alt={slide.heading}
              height={750}
              width={1125}
              priority
              className='w-full h-full object-cover'
            />
            <h2 className='text-light'>{slide.heading}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;

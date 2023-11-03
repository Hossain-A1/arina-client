"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { SlideData } from "../data/slideData";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Overlay from "@/components/ui/Overlay";
import { buttonVariants } from "@/components/ui/Button";

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
        className='mySwiper h-full w-full '
      >
        {SlideData.map((slide) => (
          <SwiperSlide key={slide.heading} className='w-full h-full relative'>
            <Image
              src={slide.image}
              alt={slide.heading}
              width={1920}
              height={1080}
              priority
              className='w-full h-full object-cover'
            />
            <Overlay />
            <div className='section-p container absolute bottom-0 left-0 right-0 top-0 h-full w-full space-y-5 text-white'>
              <h1>{slide.heading}</h1>
              <p className='max-w-6xl'>{slide.subHeading}</p>
              <Link
                href='/packages'
                className={cn(buttonVariants({ variant: "secondary" }))}
              >
                Browse Beauty Packages
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;

"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, FreeMode } from "swiper/modules";
import HeroCard from "./cards/HeroCard";

const HeroSection = () => {
  const cardsArray = [1, 2, 3, 4];
  return (
    <div
      style={{
        backgroundImage: "url('/assets/heroBg.png')",
      }}
      className="hero-section px-12 xl:px-0 h-fit bg-cover bg-no-repeat py-40"
    >
      <Swiper
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          // When the viewport is >= 320px
          320: {
            slidesPerView: 1,
          },
          // When the viewport is >= 1024px
          1200: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper !pb-40"
      >
        {cardsArray.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <HeroCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <p className="text-center text-[#9E0159] leading-10 text-3xl">
        Lorem Ipsum is simply dummy text of the printing and
      </p>
    </div>
  );
};

export default HeroSection;

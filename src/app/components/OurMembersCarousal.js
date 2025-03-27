"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Navigation, Pagination } from "swiper/modules";
import MemberProfileCard from "./cards/MemberProifleCard";

const OurMembersCarousal = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="member-slider w-full max-w-sm md:max-w-3xl lg:max-w-xl mx-auto py-10 relative z-20">
      <Swiper
        modules={[Grid, Pagination, Navigation]}
        centeredSlides={false}
        speed={800}
        grid={{ rows: isMobile ? 1 : 2, fill: "row" }}
        spaceBetween={10}
        navigation={!isMobile}
        pagination={isMobile ? { clickable: true } : false}
        slidesPerView={isMobile ? 1 : 3}
      >
        {[...Array(12)].map((_, i) => (
          <SwiperSlide key={i}>
            <MemberProfileCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurMembersCarousal;

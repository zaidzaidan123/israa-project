"use client";
import React, { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import CourseCard from "./cards/CourseCard";

const TheorticalPracticalSection = () => {
  const [activeTab, setActiveTab] = useState("Theoretical");

  const cardsArray = [
    {
      image: "/assets/cardImage.png",
      title: "Course1",
      rate_number: "20",
      stars_rate: "4.5",
      price: "500",
    },
    {
      image: "/assets/cardImage.png",
      title: "Course2",
      rate_number: "50",
      stars_rate: "3.5",
      price: "1000",
    },
    {
      image: "/assets/cardImage.png",
      title: "Course3",
      rate_number: "100",
      stars_rate: "5",
      price: "200",
    },
    {
      image: "/assets/cardImage.png",
      title: "Course4",
      rate_number: "120",
      stars_rate: "4.5",
      price: "5200",
    },
    {
      image: "/assets/cardImage.png",
      title: "Course5",
      rate_number: "20",
      stars_rate: "4.5",
      price: "500",
    },
    {
      image: "/assets/cardImage.png",
      title: "Course6",
      rate_number: "20",
      stars_rate: "4.5",
      price: "600",
    },
  ];
  return (
    <div className="px-12 xl:px-52 mb-24 xl:mb-60">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-semibold text-3xl text-center leading-10">
          Skincare by <span className="text-[#9E0159]">Israa Elshebli</span>
        </h2>
        <p className="xl:leading-10 font-semibold text-lg text-center mb-6 xl:mb-0 xl:w-3/4">
          Israa Elshebli, a certified skincare specialist, brings years of
          experience in beauty and aesthetics. Join her courses to learn the
          latest techniques and industry secrets.
        </p>
      </div>
      <div className="flex justify-center gap-10 text-center">
        <div>
          <p className="text-2xl font-bold text-[#9E0159]">500+</p>
          <p className="text-sm text-[#9E0159] mt-1">Students</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#9E0159]">4</p>
          <p className="text-sm mt-1">Theoretical</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#9E0159]">2</p>
          <p className="text-sm mt-1">Practical</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 my-10">
        <div className="flex w-full max-w-md rounded-lg shadow-lg overflow-hidden">
          <button
            className={`w-1/2 py-3 text-center font-medium  transition-all cursor-pointer ${
              activeTab === "Theoretical"
                ? "bg-[#C5B2DB] text-white"
                : "bg-white text-[#dbd1ed]"
            }`}
            onClick={() => setActiveTab("Theoretical")}
          >
            Theoretical
          </button>
          <button
            className={`w-1/2 py-3 text-center font-medium transition-all cursor-pointer ${
              activeTab === "Practical"
                ? "bg-[#C5B2DB] text-white"
                : "bg-white text-[#dbd1ed]"
            }`}
            onClick={() => setActiveTab("Practical")}
          >
            Practical
          </button>
        </div>
      </div>
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
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {cardsArray.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <CourseCard
                image={card.image}
                title={card.title}
                price={card.price}
                rate_number={card.rate_number}
                stars_rate={card.stars_rate}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TheorticalPracticalSection;

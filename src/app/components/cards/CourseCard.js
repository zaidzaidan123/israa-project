import Image from "next/image";
import React from "react";
import { ArrowUpRightWhite } from "@/app/icons";
import Rating from "@mui/material/Rating";

const CourseCard = ({ image, title, stars_rate, rate_number, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[6px_8px_20px_rgba(0,0,0,0.08)] w-[282px] h-[374px]">
      {/* Image */}
      <div className=" w-full overflow-hidden rounded-t-2xl p-2.5">
        <img
          src={image}
          alt="card image"
          className="rounded-xl h-[200px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-2.5">
        <h3 className="swiper-selected-text text-lg font-medium truncate text-left">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1 mb-2">
          <Rating className="swiper-selected-rate" name="read-only" value={stars_rate} readOnly precision={0.5} />

          <span className="swiper-selected-rate-number text-lg text-[#52565C] ml-1">
            ({rate_number})
          </span>
        </div>
      </div>

      {/* Footer */}
      <hr className="selected-hr text-[#E7E9EB] mb-2" />
      <div className="flex justify-between items-center p-2.5">
        <p className="swiper-selected-price text-2xl font-semibold text-black">
          $ {price}
        </p>
        <button className="bg-[#dbd1ed] p-1 rounded-md cursor-pointer">
          <Image src={ArrowUpRightWhite} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;

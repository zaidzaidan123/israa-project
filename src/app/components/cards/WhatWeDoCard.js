import React from "react";

const WhatWeDoCard = () => {
  return (
    <div className="bg-white shadow-[0px_-4px_12px_rgba(0,0,0,0.1),6px_8px_16px_rgba(0,0,0,0.25)] h-[418px] rounded-2xl max-w-[300px]  px-10 py-12">
      <h2 className="text-xl font-medium text-center mb-16">
        WHAT DO <span className="text-[#dbd1ed] font-extrabold">WE</span> DO?
      </h2>
      <p className="text-center text-gray-700 leading-10">
        Monthly Discussion of <br />
        <span className="text-[#dbd1ed] font-bold text-lg">
          scientific articles
        </span>
        <br /> in Skincare Topics by our Active members to stay updated
        scientifically
      </p>
    </div>
  );
};

export default WhatWeDoCard;

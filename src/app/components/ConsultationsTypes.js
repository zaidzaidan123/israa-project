"use client";
import React, { useState } from "react";

const ConsultationsTypes = () => {
  const [hoveredCard, setHoveredCard] = useState("left");

  const getCardClasses = (side) => {
    const isHovered = hoveredCard === side;
    return `
      rounded-3xl pt-8 pb-6 px-6 shadow-md text-center transition-all duration-500 ease-in-out flex flex-col justify-between
      ${
        isHovered
          ? "w-[230px] h-[330px] bg-[#C5B2DB] text-white"
          : "w-[190px] h-[270px] bg-white text-[#C5B2DB]"
      }
    `;
  };

  const getHeadingClasses = (side) =>
    `text-xl font-semibold mb-4 ${hoveredCard === side ? "text-white" : ""}`;

  const getHrClasses = (side) =>
    `mb-4 ${hoveredCard === side ? "border-white" : "border-[#C5B2DB]"}`;

  const getListClasses = (side) =>
    `text-left space-y-2 text-sm mb-6 list-disc list-inside ${
      hoveredCard === side ? "text-white" : "text-[#C5B2DB]"
    }`;

  const getButtonClasses = (side) =>
    `font-medium py-2 px-4 w-full rounded-lg transition-all duration-300 cursor-pointer ${
      hoveredCard === side
        ? "bg-white text-[#C5B2DB]"
        : "bg-[#C5B2DB] text-white"
    }`;

  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, #C5B2DB 0%, rgba(255, 255, 255, 0.6) 100%)",
      }}
      className="flex flex-col items-center py-10 px-4 space-y-8 mb-24 xl:h-svh"
    >
      <div className="text-center">
        <h2 className="text-4xl text-[#9E0159] font-medium">
          Consultations Types
        </h2>
        <p className="text-gray-600 mt-2 text-2xl">
          Lorem Ipsum is simply dummy text of the printing and
        </p>
      </div>

      <div
        className="flex flex-col md:flex-row gap-20 mt-4"
        onMouseLeave={() => setHoveredCard("left")} // Reset to default when mouse leaves both
      >
        {/* Left Card */}
        <div
          onMouseEnter={() => setHoveredCard("left")}
          className={getCardClasses("left")}
        >
          <h3 className={getHeadingClasses("left")}>
            individual
            <br />
            services
          </h3>
          <hr className={getHrClasses("left")} />
          <ul className={getListClasses("left")}>
            <li>point one</li>
            <li>point two</li>
          </ul>
          <button className={getButtonClasses("left")}>Book Now</button>
        </div>

        {/* Right Card */}
        <div
          onMouseEnter={() => setHoveredCard("right")}
          className={getCardClasses("right")}
        >
          <h3 className={getHeadingClasses("right")}>
            individual
            <br />
            services
          </h3>
          <hr className={getHrClasses("right")} />
          <ul className={getListClasses("right")}>
            <li>point one</li>
            <li>point two</li>
          </ul>
          <button className={getButtonClasses("right")}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationsTypes;

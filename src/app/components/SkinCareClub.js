import React from "react";
import { LightBulb } from "../icons";
import ButtonWithIconAndColor from "./buttons/ButtonWithIconAndColor";
import WhatWeDoCard from "./cards/WhatWeDoCard";
import MemberCard from "./cards/MemberCard";
import OurMembersCarousal from "./OurMembersCarousal";

const SkinCareClub = () => {
  const buttonsArray = [
    {
      text: "Join the Club",
      icon: LightBulb,
      backgroundColor: "#dbd1ed",
    },
    {
      text: "More Information",
      icon: LightBulb,
      backgroundColor: "#ffebc0",
    },
  ];
  return (
    <div
      style={{
        backgroundImage: "url('/assets/skinCareBg.png')",
      }}
      className="lg:h-lvh bg-cover bg-no-repeat px-12 lg:px-24 pt-3"
    >
      <div className="flex justify-between flex-col xl:flex-row items-center xl:items-start gap-16 lg:gap-2">
        <div className="">
          <div>
            <h1 className="text-xl font-medium">Skincare Club</h1>
            <div className="flex items-center space-x-4">
              <h2 className="text-4xl font-semibold text-[#dbd1ed]">Arabia</h2>
              <p className="text-xs">
                <span className="block">Where Science Meets Skincare</span>
                Connect with a vibrant community of
              </p>
            </div>
            <p className="font-semibold mt-2 text-xs">
              skincare enthusiasts, pharmacists, and industry professionals.
            </p>
          </div>
          <div className="flex gap-5 mt-6">
            {buttonsArray.map((button, index) => {
              return (
                <ButtonWithIconAndColor
                  text={button.text}
                  icon={button.icon}
                  backgroundColor={button.backgroundColor}
                  key={index}
                />
              );
            })}
          </div>
          <div className="flex gap-8 mt-12 flex-col lg:flex-row items-center">
            <WhatWeDoCard />
            <div className="flex flex-col justify-between gap-3.5">
              <MemberCard />
              <MemberCard />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex">
            <div className="text-center w-24">
              <p className="text-[#9E0159] text-3xl font-bold">30+</p>
              <p className="text-sm">Active Member</p>
            </div>

            <div className="text-center w-24">
              <p className="text-[#9E0159] text-3xl font-bold">20+</p>
              <p className="text-sm">Attending member</p>
            </div>

            <div className="text-center w-24">
              <p className="text-[#9E0159] text-3xl font-bold">5</p>
              <p className="text-sm">Country</p>
            </div>
          </div>
          <div>
            <p className="text-center font-medium leading-10 text-xl">Our <span className="text-[#dbd1ed]">Member</span></p>
            <OurMembersCarousal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinCareClub;

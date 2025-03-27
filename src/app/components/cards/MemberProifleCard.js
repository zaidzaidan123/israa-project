import React from "react";
import { Ellipse1,Ellipse2 } from "@/app/icons";
import Image from "next/image";

const MemberProfileCard = () => {
  return (
    <div className="w-[150px] h-[240px] rounded-[6px] relative">
        <Image src={Ellipse1} alt="ellipse1" className="absolute z-11 top-1.5 left-1.5"/>
        <Image src={Ellipse2} alt="ellipse2" className="absolute z-10 top-[-1.5] "/>

      {/* Profile Image */}
      <div className="relative w-full">
        <img
          src="/assets/israapic.png"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Info */}
      <div className="bg-[#D9C7EB] p-3 text-white rounded-b-[6px] text-left">
        <h2 className="text-[10px] font-light mb-3">Israa Elshbeli</h2>
        <ul className="space-y-2 px-3 font-semibold text-[8px] list-disc">
          <li>Member</li>
          <li>email@gmail.com</li>
          <li>0791234567</li>
          <li>Since 2023-01-22</li>
        </ul>
      </div>
    </div>
  );
};

export default MemberProfileCard;

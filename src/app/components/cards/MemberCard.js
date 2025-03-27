import React from "react";
import { LightBulb } from "@/app/icons";
import ButtonWithIconAndColor from "../buttons/ButtonWithIconAndColor";

const MemberCard = () => {
  return (
    <div className="bg-white shadow-md rounded-xl">
      <div className="bg-[#DBD1ED] text-white text-center py-4 rounded-t-xl">
        <h3 className="text-lg font-light">ACTIVE MEMBER</h3>
      </div>
      <div className="px-5 pt-5">
        <ul className="text-gray-700 list-disc list-inside max-w-[80%]">
          <li>submit your CV and</li>
          <li>Wait for an online interview</li>
        </ul>
        <div className="flex justify-end mb-4">
          <ButtonWithIconAndColor
            text="Join the Club"
            icon={LightBulb}
            backgroundColor="#dbd1ed"
            className="!pl-4 !pb-2 !pt-1 !pr-4 !rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

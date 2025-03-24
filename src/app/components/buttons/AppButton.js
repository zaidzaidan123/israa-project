import Image from "next/image";
import React from "react";

const AppButton = ({ icon, text }) => {
  return (
    <button className="flex items-center gap-3 px-4 sm:px-6 py-4 rounded-2xl shadow-[0_4px_6px_rgba(0,0,0,0.3),_0_1px_3px_rgba(0,0,0,0.06)] bg-white hover:shadow-lg transition-shadow cursor-pointer">
      <Image src={icon} alt="STORE" width={25} height={25} />
      <span className="text-[#0A2A37] text-sm font-semibold">{text}</span>
    </button>
  );
};

export default AppButton;

import Image from "next/image";
import React from "react";

const ButtonWithIconAndColor = ({ text, icon, backgroundColor,className }) => {
  return (
    <button
      style={{ backgroundColor }}
      className={`flex items-center gap-2 text-xs px-4 pl-7 pt-2 pb-4 rounded-lg shadow-sm cursor-pointer ${className}`}
    >
      <Image src={icon} alt={icon} />
      {text}
    </button>
  );
};

export default ButtonWithIconAndColor;

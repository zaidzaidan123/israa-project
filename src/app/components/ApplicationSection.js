import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/logo.svg";
import phone from "../../../public/assets/phone.svg";
import { AppStore, PlayStore } from "../icons";
import AppButton from "./buttons/AppButton";

const ApplicationSection = () => {
  const applicationButtonsArray = [
    {
      text: "App Store",
      icon: AppStore,
    },
    {
      text: "Play Store",
      icon: PlayStore,
    },
  ];
  return (
    <div className="flex px-12 lg:px-24 flex-col lg:flex-row">
      <div className="flex flex-col items-center lg:items-start lg:w-1/2">
        <Image src={logo} alt="Genskin Logo" />
        <p className="md:w-9/12 leading-10">
          <span className="text-[#9E0159] text-lg">GenSkin</span> is
          an innovative application designed to streamline and personalize
          skincare experiences for both users and skincare professionals. It
          offers a comprehensive platform that connects individuals seeking
          tailored treatments with certified clinics and freelance doctors.
        </p>
      </div>
      <div className="lg:w-1/2 mt-16">
        <div className="flex gap-6 justify-center">
          {applicationButtonsArray.map((button,index) => {
            return <AppButton icon={button.icon} text={button.text} key={index}/>;
          })}
        </div>
        <div className="flex gap-8 mt-10 justify-center items-center sm:items-start flex-col sm:flex-row">
        {Array.from({ length: 2 }, (_, i) => (
        <Image src={phone} alt="phone" key={i}/>
      ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationSection;

import React from "react";

const WhyChooseGen = () => {
  const WhyChooseGenArray = [
    {
      title: "Personalized Approach: ",
      description: "Get tailored recommendations based on skin profiles.",
    },
    {
      title: "Seamless Communication: ",
      description: "Directly interact with users for better service.",
    },
    {
      title: "All-in-One Solution: ",
      description: "Manage bookings, profiles, and progress in one place.",
    },
  ];

  return (
    <div className="flex flex-col items-center mb-16 lg:mb-32 mt-11">
      <h2 className="text-[#06241B] text-xl mb-4 font-light">
        Why Choose <span className="text-[#9E0159] font-bold">GenSkin</span>?
      </h2>
      <ul className="list-disc px-12">
        {WhyChooseGenArray.map((text, index) => {
          return (
            <li key={index} className="leading-10">
              <span className="font-bold">{text.title}</span>
              <span className="font-light">{text.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhyChooseGen;

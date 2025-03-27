import React from "react";

const HeroCard = () => {
  return (
    <div className="relative max-w-4xl w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      {/* Full Image */}
      <img
        src="/assets/slidertest.png"
        alt="test"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute bottom-0 w-full bg-white/70 p-6 text-left">
        <h3 className="text-[#9E0159] text-sm font-semibold mb-2">
          lorem Ipsum
        </h3>
        <p className="text-[#9E0159CC] text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Purus ultrices etiam etiam amet
          volutpat nullam. Aliquam fringilla volutpat magna rhoncus tellus purus
          interdum. Quis adipiscing in rhoncus adipiscing dui suspendisse pulvinar.
          Mi diam egestas laoreet risus diam.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;

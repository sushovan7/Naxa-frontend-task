import React from "react";
import heroImg from "../assets/hero-img.svg";

function HeroSection() {
  return (
    <div className="bg-[#f4f4f4] pb-10 flex flex-col gap-4 items-center justify-center w-full min-h-[50vh] md:h-80 relative overflow-hidden">
      <div className="hidden md:block absolute top-0 left-0">
        <img
          src={heroImg}
          width={900}
          alt="Decorative graphic"
          className="h-91 max-h-[300px]"
        />
      </div>

      <h1 className="font-medium text-[#FFAB02] uppercase text-lg md:text-xl">
        Portfolio
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-5 px-4 text-center">
        <span className="text-5xl md:text-5xl font-light tracking-wide">
          Diverse,
        </span>
        <span className="text-[#124BF4] text-5xl md:text-5xl font-light tracking-wide">
          Impactful,
        </span>
        <span className="text-5xl md:text-5xl font-light tracking-wide">
          and Reliable
        </span>
      </div>
    </div>
  );
}

export default HeroSection;

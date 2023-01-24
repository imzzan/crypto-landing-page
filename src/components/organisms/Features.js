import React from "react";
import {
  ImageFeature1,
  ImageFeature2,
  ImageFeature3,
  ImageFeature4,
} from "../../assets";

const Features = () => {
  return (
    <div className="mt-8 sm:mt-14 md:mt-20">
      <h1 className=" font-roboto text-center font-normal text-[28px] lg:text-[32x] text-color1 leading-[41.23px]">
        Featured on
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-between lg:justify-center lg:gap-28 gap-5 items-center mt-5 lg:mt-8 animate-pulse transition-all">
        <img src={ImageFeature1} alt="image1" className="w-[120px]" />
        <img src={ImageFeature2} alt="image2" className="w-[105px]" />
        <img src={ImageFeature3} alt="image3" className="w-[45px]" />
        <img src={ImageFeature4} alt="image4" className="w-[75px]" />
      </div>
    </div>
  );
};

export default Features;

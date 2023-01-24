import React from "react";
import { Image3 } from "../../assets";
import { Button1 } from "../atoms";
import AOS from "aos";
import "aos/dist/aos.css";

const SellPageNft = () => {
  AOS.init();
  return (
    <div
      className="mt-10 sm:mt-16 flex flex-col gap-10 sm:flex-row sm:items-center lg:mt-28"
      id="pricing"
    >
      <img
        src={Image3}
        alt="image2"
        className=" rounded-xl w-[200px] mx-auto sm:w-[50%] md:w-[40%] xl:w-[30%]"
        data-aos="flip-up"
        data-aos-offset="200"
      />
      <div className="sm:w-[50%]">
        <p className=" font-roboto uppercase text-[20px] leading-[27.5px] tracking-widest text-center sm:text-left text-color2">
          24/7 access
        </p>
        <h1 className=" font-[700] text-[28px] leading-[30.8px] text-center sm:text-left my-3 text-color1 lg:text-[40px] lg:leading-[60.4px]">
          sell your NFTs from anywhere at any time
        </h1>
        <p className=" font-roboto font-normal text-[18px] text-center sm:text-left leading-[28px] lowercase text-color2 mb-5 lg:mb-8">
          With our easy-to-use platform, you can buy or sell assets from
          anywhere in the world, at any time
        </p>
        <div className="flex justify-center sm:justify-start">
          <Button1
            name="GET STARTED"
            width="w-[75%] md:w-[50%] xl:w-[30%]"
            height="h-[50px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SellPageNft;

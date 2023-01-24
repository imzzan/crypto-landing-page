import React from "react";
import { Image1 } from "../../assets";
import Typed from "react-typed";
import { Button1, Button2 } from "../atoms";

const HeroSection = () => {
  return (
    <div
      className="flex flex-col-reverse pt-24 gap-5 sm:pt-36 lg:pt-44 sm:flex-row md:justify-between items-center"
      id="home"
    >
      <div className="sm:w-[50%] lg:w-[40%]">
        <h1 className="font-[700] text-[40px] lg:text-[64px] leading-[70.4px] text-center sm:text-left text-color1">
          discover and collect{" "}
          <span className=" text-color6">
            <Typed
              className="typed"
              strings={["Rare"]}
              typeSpeed={200}
              backSpeed={140}
              loop
            />
          </span>{" "}
          <span className="block">NFTs</span>
        </h1>
        <p className="font-normal text-[20px] leading-[27.5px] text-center sm:text-left text-color1 lg:mt-5">
          The most secure marketplace for buying and selling unique crypto
          assets
        </p>
        <div className="flex justify-center mt-8 sm:justify-start gap-5 lg:gap-10">
          <Button1 name="BUY NFTS" width="w-[140px]" height="h-[50px]" />
          <Button2 name="SELL NFTS" width="w-[140px]" height="h-[50px]" />
        </div>
      </div>
      <div>
        <img src={Image1} alt="image1" className=" lg:w-[400px] xl:w-[500px] animate-bounce transition-all " />
      </div>
    </div>
  );
};

export default HeroSection;

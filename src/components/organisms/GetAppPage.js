import React from "react";
import { Image2 } from "../../assets";
import { Button1 } from "../atoms";
import AOS from "aos";
import "aos/dist/aos.css";

const GetAppPage = () => {
  AOS.init();
  return (
    <div className="mt-10 sm:mt-16 lg:mt-28 flex flex-col-reverse gap-10 sm:flex-row sm:items-center">
      <div className='sm:w-[50%]'>
        <p className=" font-roboto uppercase text-[20px] leading-[27.5px] tracking-widest text-center sm:text-left text-color2">
        get our app
        </p>
        <h1 className=" font-[700] text-[28px] lg:text-[40px] lg:leading-[60.4px] leading-[30.8px] text-center sm:text-left my-3 text-color1">
        browse NFTs from your smartphone
        </h1>
        <p className=" font-roboto font-normal text-[18px] text-center sm:text-left leading-[28px] lowercase text-color2 mb-5 lg:mb-8">
        Our Krypto app is the easiest way to keep track of your assets when you’re on the go
        </p>
        <div className="flex justify-center sm:justify-start">
          <Button1 name="DOWNLOAD ON IOS" width="w-[85%] md:w-[62%] lg:w-[45%] xl:w-[40%]" height="h-[50px]" />
        </div>
        
      </div>
      <img
        src={Image2}
        alt="image2"
        className=" rounded-xl w-[200px] mx-auto sm:w-[50%] md:w-[40%] xl:w-[30%]"
        data-aos="flip-right"
        data-aos-offset="100"
      />
    </div>
  );
};

export default GetAppPage;

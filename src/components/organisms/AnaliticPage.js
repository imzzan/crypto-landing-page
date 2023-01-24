import React from "react";
import { Image2 } from "../../assets";
import { Button1 } from "../atoms";
import Typed from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const AnaliticPage = () => {
  const desc =
    "Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time";

  return (
    <div className="mt-10 sm:mt-16 lg:mt-20 flex flex-col gap-10 sm:flex-row items-center lg:justify-between" id="about">
      <img
        src={Image2}
        alt="image2"
        className=" rounded-xl w-[200px] mx-auto w-[50%] md:w-[40%] xl:w-[30%]"
        data-aos="flip-left"
        data-aos-offset="100"
      />
      <div className="sm:w-[50%]">
        <p className=" font-roboto uppercase text-[20px] leading-[27.5px] tracking-widest text-center sm:text-left text-color2">
          analytics
        </p>
        <h1 className=" font-[700] text-[28px] md:text-[31px] lg:text-[40px] leading-[30.8px] lg:leading-[60.4px] text-center sm:text-left my-3 lg:my-4 text-color1">
          built-in analytics to track your NFTs
        </h1>
        <p className=" font-roboto font-normal text-[18px] text-center sm:text-left leading-[28px] lowercase text-color2 mb-5 lg:mb-8">
          <Typed strings={[desc]} typeSpeed={100} />
        </p>
        <div className="flex justify-center sm:justify-start">
          <Button1 name="VIEW OUR PRICING" width="w-[80%] md:w-[60%] lg:w-[45%] xl:w-[35%]" height="h-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default AnaliticPage;

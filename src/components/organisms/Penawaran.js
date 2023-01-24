import React from "react";
import { Button1 } from "../atoms";

const Penawaran = () => {
  return (
    <div className="mt-14">
      <p className=" font-roboto uppercase text-[20px] leading-[27.5px] tracking-widest text-center text-color2">
      are you ready?
      </p>
      <h1 className="font-[700] text-[32px] leading-[40px] text-center text-color1 mt-2 mb-5 lg:text-[40px] lg:leading-[60.4px]">
        be a part of the <span className=" text-color6">next big thing</span> 
      </h1>
      <div  className="flex justify-center">
        <Button1 name="GET STARTED" width="w-[75%] sm:w-[40%] md:w-[23%] xl:w-[15%]" height="h-[50px]" />
      </div>
      
    </div>
  );
};

export default Penawaran;

import React from "react";
import { IconPlane } from "../../assets";
import { Button1 } from "../atoms";

const Footer = () => {
  const crypto = ["home", "about", "buy nfts", "sell nfts"];
  const market = ["browse nfts", "buy nfts", "sell nfts"];
  const contact = ["e-mail", "linkind", "instagram", "twitter"];

  return (
    <div className="mt-14 px-5 sm:px-7 flex flex-col lg:flex-row lg:justify-center lg:items-center">
      <div className="lg:w-[50%]">
        <h1 className=" font-roboto font-[700] text-[22px] leading-[26px] text-center text-color1 uppercase">
          KRYPTO
        </h1>
        <div className="flex items-start mt-5 justify-between sm:justify-around">
          <div className="flex flex-col justify-center text- sm:text-start gap-2">
            <p className="font-[700] text-[16px] leading-[22px] text-color1">
              kryto
            </p>
            {crypto.map((item, i) => (
              <p className="text-[16px] text-color2 font-normal leading-[30px]">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col justify-center text-start gap-2 sm:text-start">
            <p className="font-[700] text-[16px] leading-[22px] text-color1">
              market
            </p>
            {market.map((item, i) => (
              <p className="text-[16px] text-color2 font-normal leading-[30px]">
                {item}
              </p>
            ))}
          </div>
          <div className="flex flex-col justify-center text-start gap-2 sm:text-start">
            <p className="font-[700] text-[16px] leading-[22px] text-color1">
              contact
            </p>
            {contact.map((item, i) => (
              <p className="text-[16px] text-color2 font-normal leading-[30px]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-[50%]">
        <h1 className="font-[400] font-roboto text-[22px] leading-[26px] text-center mt-5 text-color1">
          join our newsletter
        </h1>
        <div className="flex justify-around my-5 md:justify-center gap-5">
          <input
            type="text"
            name="email"
            id="email"
            className="w-[70%] h-[50px] rounded-[20px] bg-color3 px-5 outline-none border-none text-color2"
            placeholder="Email Address"
          />
          <div className=" bg-color5 h-[50px]  flex items-center justify-center rounded-[20px] w-[50px] cursor-pointer">
            <img src={IconPlane} alt="iconplane" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

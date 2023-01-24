import React, { useState } from "react";
import { IconHumberger, IconX } from "../../assets";
import { useScrollspy } from "./../../helpers/handleScroll";
import { Button1 } from "../atoms";

const NavMobile = ({ items, handleScroll }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  const activeId = useScrollspy(
    items.map((item) => item.id),
    250
  );

  return (
    <>
      <div className="flex lg:hidden px-5 sm:px-7 h-[60px] sm:h-[80px] items-center justify-between bg-gradient-to-r from-color3 to-color5">
        <h1 className=" font-[600] text-[20px] leading-[27.5px] text-color1">
          <a href="#home">KRYPTO</a>
        </h1>
        <div className="md:flex items-center gap-5">
        <div className="hidden md:block">
            <Button1 name='buy nfts' width='w-[115px]' height='h-[40px]'/>
          </div>
          <img
            src={state ? IconX : IconHumberger}
            alt="iconHumberger"
            className="w-[25px] cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>

      {state ? (
        <ul className="lg:hidden w-screen h-screen absolute px-5 flex flex-col gap-6 bg-gradient-to-r from-color3 to-color5">
          {items.map((item, i) => {
            return (
              <li
                className=" text-color1"
                onClick={() => {
                  setState(!state);
                  handleScroll(item.ref.current);
                }}
              >
                <a
                  href={`#${item.id}`}
                  className={`hover:border-b-2 border-white ${
                    item.id === activeId ? " transition-all" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
};

export default NavMobile;

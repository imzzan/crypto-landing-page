import React, { useRef } from "react";
import { CardTesti } from "../moleculs";
import { Carousel } from "@mantine/carousel";
import { dummyTestimoni } from "../../data";
import Autoplay from "embla-carousel-autoplay";

const Testimoni = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div className="mt-14 sm:mt-20" id="testimoni">
      <p className=" font-roboto uppercase text-[20px] leading-[27.5px] tracking-widest text-center text-color2">
        testimonials
      </p>
      <h1 className="font-[700] text-[32px] leading-[40px] text-center text-color1 mt-2 lg:text-[40px] lg:leading-[60.4px]">
        read what others have to say
      </h1>
      {/* Mobile */}
      <div className="sm:hidden">
        <Carousel
          sx={{ maxWidth: "full" }}
          mx="auto"
          loop
          dragFree
          slideGap="md"
          align="center"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {dummyTestimoni.map((item, i) => {
            return (
              <Carousel.Slide>
                <CardTesti
                  name={item.name}
                  profile={item.profile}
                  id={item.id}
                  desc={item.desc}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
      
      {/* Tablet */}
      <div className="sm:block hidden lg:hidden">
        <Carousel
          sx={{ maxWidth: "full" }}
          mx="auto"
          loop
          dragFree
          slideGap="md"
          height='330px'
          slideSize="70%"
          align="center"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {dummyTestimoni.map((item, i) => {
            return (
              <Carousel.Slide>
                <CardTesti
                  name={item.name}
                  profile={item.profile}
                  id={item.id}
                  desc={item.desc}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>

      {/* Laptop */}
      <div className="sm:block hidden lg:block">
        <Carousel
          sx={{ maxWidth: "full" }}
          mx="auto"
          loop
          dragFree
          slideGap="md"
          height='330px'
          slideSize="0%%"
          align="center"
        >
          {dummyTestimoni.map((item, i) => {
            return (
              <Carousel.Slide>
                <CardTesti
                  name={item.name}
                  profile={item.profile}
                  id={item.id}
                  desc={item.desc}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimoni;

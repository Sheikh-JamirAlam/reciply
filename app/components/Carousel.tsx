/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback } from "react";
import { M_PLUS_Rounded_1c, Rubik } from "next/font/google";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["800"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {};

const Carousel = (props: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden">
      <div className="w-full" ref={emblaRef}>
        <div className="flex">
          <div className="min-w-0 max-h-[65vh] flex-100 cursor-default">
            <h1 className={`${mPlusRounded.className} w-64 top-[30%] left-[60%] absolute text-4xl text-light`}>TASTY RAMEN RECIPES</h1>
            <p className={`${rubik.className} top-[45%] left-[60%] absolute text-light`}>Make delicious ramen from scratch.</p>
            <button className={`p-2 top-[55%] left-[60%] absolute bg-pumpkin rounded-sm text-light text-xl`}>
              <span className={`${rubik.className}`}>Get Recipe</span>
            </button>
            <img src="./carousel/ramen.jpg" alt="Ramen" className="w-full h-full relative z-[-1] brightness-75 object-cover xl:h-auto xl:bottom-[10vh] 2xl:bottom-[15vh]" />
          </div>
          <div className="min-w-0 max-h-[65vh] flex-100 cursor-default">
            <h1 className={`${mPlusRounded.className} w-64 top-[30%] left-[60%] absolute text-4xl text-light`}>HEALTHY FOOD RECIPES</h1>
            <p className={`${rubik.className} top-[45%] left-[60%] absolute text-light`}>Make delicious ramen from scratch.</p>
            <button className={`p-2 top-[55%] left-[60%] absolute bg-pumpkin rounded-sm text-light text-xl`}>
              <span className={`${rubik.className}`}>Get Recipe</span>
            </button>
            <img src="./carousel/taco.jpg" alt="Taco" className="w-full h-full relative z-[-1] brightness-[.85] object-cover xl:h-auto xl:bottom-[20vh] 2xl:bottom-[40vh]" />
          </div>
          <div className="min-w-0 max-h-[65vh] flex-100 cursor-default">
            <img src="./carousel/pasta.jpg" alt="Pasta" className="w-full h-full relative z-[-1] brightness-[.85] object-cover xl:h-auto xl:bottom-[20vh] 2xl:bottom-[30vh]" />
          </div>
        </div>
        <button className="top-[35%] left-8 absolute" onClick={scrollPrev}>
          <BsArrowLeftCircle className="text-4xl fill-platinum" />
        </button>
        <button className="top-[35%] right-8 absolute" onClick={scrollNext}>
          <BsArrowRightCircle className="text-4xl fill-platinum" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

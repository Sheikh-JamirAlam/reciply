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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);

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
          <div className="min-w-0 max-h-[65vh] flex-100">
            <h1 className={`${mPlusRounded.className} w-64 top-[30%] left-[60%] relative text-4xl text-light`}>TASTY RAMEN RECIPES</h1>
            <p className={`${rubik.className} w-72 top-[30%] left-[60%] relative text-light`}>Make delicious ramen from scratch.</p>
            <button className={`p-2 w-32 top-[32%] left-[60%] relative bg-pumpkin rounded-sm text-light text-xl`}>
              <span className={`${rubik.className}`}>Get Recipe</span>
            </button>
            <img src="./carousel/ramen.jpg" alt="Ramen" className="w-full h-full relative z-[-1] brightness-75 object-cover bottom-[148px] xl:h-auto xl:bottom-[20vh] 2xl:bottom-[29vh]" />
          </div>
          <div className="min-w-0 max-h-[65vh] flex-100">
            <h1 className={`${mPlusRounded.className} w-72 top-[50%] left-[30%] relative text-4xl text-light`}>HEALTHY FOOD RECIPES</h1>
            <p className={`${rubik.className} w-72 top-[50%] left-[30%] relative text-light`}>Find easy to follow delicious recipes.</p>
            <button className={`p-2 w-32 top-[52%] left-[30%] relative bg-pumpkin rounded-sm text-light text-xl`}>
              <span className={`${rubik.className}`}>Register</span>
            </button>
            <img src="./carousel/taco.jpg" alt="Taco" className="w-full h-full relative z-[-1] brightness-[.85] object-cover bottom-[148px] xl:h-auto xl:bottom-[25vh] 2xl:bottom-[45vh]" />
          </div>
          <div className="min-w-0 max-h-[65vh] flex-100">
            <h1 className={`${mPlusRounded.className} w-72 top-[35%] left-[65%] relative text-4xl text-light`}>EASY CHEESY PASTA</h1>
            <p className={`${rubik.className} w-72 top-[35%] left-[65%] relative text-light`}>Simple and delicious pasta recipes.</p>
            <button className={`p-2 w-32 top-[37%] left-[65%] relative bg-pumpkin rounded-sm text-light text-xl`}>
              <span className={`${rubik.className}`}>Let&apos;s Cook</span>
            </button>
            <img src="./carousel/pasta.jpg" alt="Pasta" className="w-full h-full relative z-[-1] brightness-[.85] object-cover bottom-[148px] xl:h-auto xl:bottom-[25vh] 2xl:bottom-[45vh]" />
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

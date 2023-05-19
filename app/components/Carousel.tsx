/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback } from "react";
import { Righteous, Rubik } from "next/font/google";
import Link from "next/link";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
});

const Carousel = () => {
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
            <h1 className={`${righteous.className} w-64 top-[30%] left-[25%] sm:left-[45%] lg:left-[60%] relative text-4xl text-light cursor-default`}>TASTY RAMEN RECIPES</h1>
            <p className={`${rubik.className} w-72 top-[30%] left-[25%] sm:left-[45%] lg:left-[60%] relative text-light cursor-default`}>Make delicious ramen from scratch.</p>
            <button className={`p-2 w-32 top-[32%] left-[25%] sm:left-[45%] lg:left-[60%] relative bg-pumpkin rounded-sm text-light text-xl`}>
              <Link href="/signup" className={`${rubik.className}`} prefetch={false}>
                Get Recipe
              </Link>
            </button>
            <img src="./carousel/ramen.jpg" alt="Ramen" className="w-full h-full relative z-[-1] brightness-75 object-cover bottom-[148px] xl:h-auto xl:bottom-[20vh] 2xl:bottom-[29vh]" />
          </div>
          <div className="min-w-0 max-h-[65vh] flex-100">
            <h1 className={`${righteous.className} w-72 top-[30%] sm:top-[50%] left-[25%] sm:left[40%] lg:left-[30%] relative text-4xl text-light cursor-default`}>HEALTHY FOOD RECIPES</h1>
            <p className={`${rubik.className} w-72 top-[30%] sm:top-[50%] left-[25%] sm:left[40%] lg:left-[30%] relative text-light cursor-default`}>Find easy to follow delicious recipes.</p>
            <button className={`p-2 w-32 top-[32%] sm:top-[52%] left-[25%] sm:left[40%] lg:left-[30%] relative bg-pumpkin rounded-sm text-light text-xl`}>
              <Link href="/signup" className={`${rubik.className}`} prefetch={false}>
                Register
              </Link>
            </button>
            <img src="./carousel/taco.jpg" alt="Taco" className="w-full h-full relative z-[-1] brightness-[.85] object-cover bottom-[148px] xl:h-auto xl:bottom-[25vh] 2xl:bottom-[45vh]" />
          </div>
          <div className="min-w-0 max-h-[65vh] flex-100">
            <h1 className={`${righteous.className} w-72 top-[30%] sm:top-[35%] left-[25%] sm:left-[50%] lg:left-[65%] relative text-4xl text-light cursor-default`}>EASY CHEESY PASTA</h1>
            <p className={`${rubik.className} w-72 top-[30%] sm:top-[35%] left-[25%] sm:left-[50%] lg:left-[65%] relative text-light cursor-default`}>Simple and delicious pasta recipes.</p>
            <button className={`p-2 w-32 top-[32%] sm:top-[37%] left-[25%] sm:left-[50%] lg:left-[65%] relative bg-pumpkin rounded-sm text-light text-xl`}>
              <Link href="/signup" className={`${rubik.className}`} prefetch={false}>
                Let&apos;s Cook
              </Link>
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

"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import { TbArrowUpBar } from "react-icons/tb";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "./TestimonialCard";
import { testimonials, TestimonialInfo } from "../utils/testimonials";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["600"],
});

const Testimonial = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 80000, stopOnInteraction: false })]);
  const [windowWidth, setWindowWidth] = useState(() => {
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });
  const [sliceValue, setSliceValue] = useState(() => {
    return window.innerWidth >= 1040 ? 3 : 2;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(() => window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (windowWidth >= 1040) {
      setSliceValue(3);
    } else if (windowWidth >= 744) {
      setSliceValue(2);
    } else {
      setSliceValue(1);
    }
  }, [windowWidth]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-light">
      <div className="h-20 bg-platinum flex justify-center gap-[25vw]">
        <div className="grid grid-flow-col gap-1 content-center">
          <TbArrowUpBar className="my-auto text-lg text-pumpkin" />
          <p className={`${rubik.className} cursor-default`}>FROM OUR CLIENTS</p>
        </div>
        <div className="grid grid-flow-col gap-6 content-center">
          <BsArrowLeftCircle className="cursor-pointer text-2xl" onClick={scrollPrev} />
          <BsArrowRightCircle className="cursor-pointer text-2xl" onClick={scrollNext} />
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex">
            <div className="min-w-0 px-[5vw] lg:px-[2.5vw] xl:px-[10vw] py-20 grid grid-flow-col justify-items-center flex-100">
              {testimonials.slice(0, sliceValue).map((testimonial: TestimonialInfo, index: number) => {
                return <TestimonialCard key={index} name={testimonial.name} description={testimonial.description} />;
              })}
            </div>
            <div className="min-w-0 px-[5vw] lg:px-[2.5vw] xl:px-[10vw] py-20 grid grid-flow-col justify-items-center flex-100">
              {testimonials.slice(sliceValue, sliceValue * 2).map((testimonial: TestimonialInfo, index: number) => {
                return <TestimonialCard key={index} name={testimonial.name} description={testimonial.description} />;
              })}
            </div>
            <div className="min-w-0 px-[5vw] lg:px-[2.5vw] xl:px-[10vw] py-20 grid grid-flow-col justify-items-center flex-100">
              {testimonials.slice(sliceValue * 2, sliceValue * 3).map((testimonial: TestimonialInfo, index: number) => {
                return <TestimonialCard key={index} name={testimonial.name} description={testimonial.description} />;
              })}
            </div>
            {sliceValue === 1 && (
              <>
                <div className="min-w-0 px-[5vw] lg:px-[2.5vw] xl:px-[10vw] py-20 grid grid-flow-col justify-items-center flex-100">
                  {testimonials.slice(sliceValue * 3, sliceValue * 4).map((testimonial: TestimonialInfo, index: number) => {
                    return <TestimonialCard key={index} name={testimonial.name} description={testimonial.description} />;
                  })}
                </div>
                <div className="min-w-0 px-[5vw] lg:px-[2.5vw] xl:px-[10vw] py-20 grid grid-flow-col justify-items-center flex-100">
                  {testimonials.slice(sliceValue * 4, sliceValue * 5).map((testimonial: TestimonialInfo, index: number) => {
                    return <TestimonialCard key={index} name={testimonial.name} description={testimonial.description} />;
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

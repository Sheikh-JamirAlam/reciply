import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

type Props = {
  name: string;
  description: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <div className="w-80 h-[19rem] bg-platinum">
      <div className="w-28 h-28 mx-auto relative bottom-10 bg-platinum rounded-full">
        <div className="w-28 h-28 scale-[.95] mx-auto bg-light rounded-full"></div>
      </div>
      <div className="w-[80%] h-[75%] mx-auto grid gap-2 justify-items-center relative bottom-9">
        <FaQuoteLeft className="mr-auto fill-orange" />
        <p className="font-semibold text-sm">{props.name}</p>
        <p className="text-xs">{props.description}</p>
        <FaQuoteRight className="ml-auto fill-orange" />
      </div>
    </div>
  );
};

export default TestimonialCard;

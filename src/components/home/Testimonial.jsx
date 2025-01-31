import { TestimonialData } from "@/libs/data";
import React from "react";
import { Marquee } from "../ui/marquee";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="w-full pt-[100px]  pb-0   ">
      <div className="relative w-full md:h-[80vh] mx-auto">
        <div className="mb-[50px] md:w-11/12 mx-auto">
          <h2 className="heading-2 w-11/12 mx-auto md:w-full text-start r">What Creators Are Saying</h2>
        </div>
        <Marquee className="w-full lg:w-full">
          <div className="flex gap-x-4 w-full h-[300px]">
          {[...TestimonialData, ...TestimonialData].map((Testimonial, index) => (
            <TestimonialCard {...Testimonial} key={index} className="flex-shrink-0 w-full md:w-2/3 lg:w-1/3" />
          ))}

          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonial;

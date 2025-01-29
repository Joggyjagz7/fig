import { TestimonialData } from "@/libs/data";
import React from "react";
import { Marquee } from "../ui/marquee";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="w-full pt-[50px] pb-0 md:py-[50px] ">
      <div className="relative w-11/12 md:w-9/12   mx-auto">
        <div className="mb-[50px]">
          <h2 className="heading-2 text-start md:text-center">What Creators Are Saying</h2>
        </div>
        <Marquee>
          {[...TestimonialData, ...TestimonialData].map((Testimonial, index) => (
            <TestimonialCard {...Testimonial} key={index} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonial;

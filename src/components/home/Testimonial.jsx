import { TestimonialData } from "@/libs/data";
import React from "react";
import { Marquee } from "../ui/marquee";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="w-full py-[50px]">
      <div className="relative w-10/12 md:w-9/12   mx-auto">
        <div className="mb-[50px]">
          <h2 className="heading-2 text-center">What Creators Are Saying</h2>
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

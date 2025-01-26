import { TestimonialData } from "@/libs/data";
import React from "react";
import { Marquee } from "../ui/marquee";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <section className="w-full py-[50px]">
      <div className="relative w-10/12 md:w-9/12   mx-auto">
      <div className="mb-[20px]">
        <h2 className="heading-2 text-center">What Creators Are Saying</h2>
      </div>
        <Marquee>
          {[...TestimonialData, ...TestimonialData].map((Testimonial) => (
            <TestimonialCard {...Testimonial} key={Testimonial.id} />
          ))}
        </Marquee>
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 md:w-2/12  bg-gradient-to-r from-white dark:from-background"></div> */}
        {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 md:w-2/12 bg-gradient-to-l from-white dark:from-background"></div> */}
      </div>
    </section>
  );
};

export default Testimonial;

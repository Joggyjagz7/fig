"use client";
import { merriweather } from "@/app/fonts";
import { ChevronsRight } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

import MySwiper from "../MySwiper";
import MyTypewriter from "../MyTypewriter";

const Hero = () => {
  return (
    <div className="w-full  pt-[140px] pb-[50px] bg-[#EFEFEF]">
      <div className=" lg:grid grid-cols-2 w-10/12 lg:w-11/12 md:w-9/12  mx-auto ">
        <div className=" mt-[30px]  lg:col-span-1 text-center lg:text-start ">
          <h1
            className={`lg:text-[50px] text-[35px] font-[500] leading-[1.1em]   ${merriweather.className}`}
          >
            Financing for <span className="text-primary">Influencers </span>  and <span className="text-primary">Creators </span>  in Africa
          </h1>
          <span className="text-[25px] lg:flex hidden ">
            We provide creators and influencers {"    "}
            <MySwiper />
          </span>
          <span className="text-[20px]  lg:text-[25px] lg:hidden  ">
            We provide creators and influencers {"    "}{" "}
            <span className="text-[#050914]">
              <MyTypewriter />
            </span>
          </span>
          <div className="flex gap-[20px] mt-[20px] justify-center lg:justify-start">
            <button className="btn-colored">Apply For Funding</button>
            <button className="btn flex gap-2 items-center">
              Learn More
              <ChevronsRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
{
}

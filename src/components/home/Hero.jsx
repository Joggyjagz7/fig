"use client";
import { ChevronsRight } from "lucide-react";

import MySwiper from "../MySwiper";
import MyTypewriter from "../MyTypewriter";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full   pb-[50px] md:pb-0 bg-[#EFEFEF]">
      <div className=" md:grid hero-bg relative  pt-[120px] grid-cols-1 md:grid-cols-2 w-11/12 md:w-11/12 min-h-screen   mx-auto ">
        <div className="  pt-[40px] lg:py-0 md:text-center lg:text-start md:w-9/12 md:mx-auto lg:w-full lg:mx-0  md:col-span-2 lg:col-span-1 ">
          <h4 className="heading-4   text-primary-purple mb-2 ">
            Trusted By 100+ Creators
          </h4>
          <h1
            className={`lg:text-[50px] md:text-[40px] text-[35px]  leading-[1.1em] font-[700]`}
          >
            Financing for{" "}
            <span className="text-primary-purple">Influencers </span> and{" "}
            <span className="text-primary-purple">Creators </span> in Africa
          </h1>
          <span className="text-[25px] lg:flex hidden md:mt-3 ">
            Powering the dreams of {"    "}
            <MySwiper />
          </span>
          <span className="text-[20px] md:h-[30px] block h-[40px] mb-[30px] md:mb-0 mt-3 lg:hidden  ">
            Powering the dreams of {"    "}{" "}
            <span className="text-[#050914] font-[700]">
              <MyTypewriter />
            </span>
          </span>
          <div className="md:flex gap-[20px] md:my-5   lg:mt-[20px] md:justify-center lg:justify-start   ">
            <button className="btn-colored">Apply For Funding</button>
            <button className="btn hidden gap-2 items-center  lg:flex">
              Learn More
              <ChevronsRight />
            </button>
          </div>
        </div>

        <div className=" h-[60vh]  lg:h-full w-full md:w-8/12 lg:w-full md:mx-auto md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-1">
          <div className="h-full w-full relative ">
            <Image
              src="/images/hero-web.gif"
              alt="fig creators gif image"
              fill
              className="object-contain md:object-contain lg:hidden lg:object-cover"
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;

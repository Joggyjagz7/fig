"use client";
import { ChevronsRight } from "lucide-react";

import MySwiper from "../MySwiper";
import MyTypewriter from "../MyTypewriter";
import Image from "next/image";
import { dm_sans } from "@/app/fonts";

const Hero = () => {
  return (
    <div className="w-full  relative  md:pb-0 ">
      <div className=" md:grid  lg:pb-0 pt-[100px] md:pt-[120px] grid-cols-1 md:grid-cols-2 w-full md:w-11/12 min-h-screen lg:grid-cols-12   mx-auto ">
        <div className=" w-11/12 mx-auto   md:pt-[40px] lg:pb-[40px] md:text-center lg:text-start md:w-9/12 md:mx-auto lg:w-full lg:mx-0  md:col-span-2   lg:flex flex-col  lg:justify-center lg:col-span-7">
          <h4 className="heading-4   text-primary-color mb-2 ">
            Trusted By 100+ Creators
          </h4>
          <h1 className={`heading-1`}>
            Financing for{" "}
            <span className="italic text-primary-color"> Creators</span> and{" "}
            <span className="italic text-primary-color">Influencers </span> in
            Africa
          </h1>
          <span className="text-[25px] font-[400] lg:flex hidden md:mt-3 text-primary-black ">
            Powering the dreams of {"    "}
            <MySwiper />
          </span>
          <span className="text-[20px] md:h-[30px] font-[400] text-primary-black block h-[40px] mb-[20px] md:mb-0 mt-3 lg:hidden  ">
            Powering the dreams of {"    "}{" "}
            <span className="text-[#050914] font-[700]">
              <MyTypewriter />
            </span>
          </span>
          <div className="md:flex gap-[20px] md:my-5 lg:mt-[10px] md:justify-center lg:justify-start   ">
            <input type="text" placeholder="Your email address" className="w-[50%] px-[20px] border-gray-300 border-2 rounded-[5px] bg-gray-100 outline-slate-300 hidden md:block" />
            <button className={`btn-colored ${dm_sans.className}`}>
              {" "}
              Apply For Funding
            </button>
          </div>
        </div>

        <div className=" h-[60vh]  lg:h-full w-full md:w-8/12 lg:w-full md:mx-auto md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-5">
          <video
            className="lg:absolute lg:top-0 lg:right-0  lg:z-[-1]  w-full lg:w-[70%] h-full object-cover  "
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/bg-video.mp4" type="video/mp4" />
            {/* <source src="/videos/background.webm" type="video/webm" /> */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hero;

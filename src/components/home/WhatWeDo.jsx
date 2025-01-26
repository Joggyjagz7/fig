"use client";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { inter, merriweather } from "@/app/fonts";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Card from "../Card";
import { CardDetails } from "@/libs/data";
import Image from "next/image";

const style = {
  background:
    "linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.1) 20% ,rgba(255, 255, 255, 0.1) 90% ,  rgba(255, 255, 255, 0.1) )",
};

const WhatWeDo = () => {
  return (
    <section className="w-full  ">
      <div className="relative h-[70px] w-full ">
        <Image src="/images/wave.svg" alt="" fill objectFit="cover" />
      </div>
      <div className="lg:my-[10px] lg:w-10/13 w-11/12  py-[50px] mx-auto ">
        <div className=" h-full ">
          <div className="flex flex-col justify-center lg:w-1/2 lg:mx-auto ">
          <h4 className="heading-4 text-center  text-primary  ">What We Do</h4>
            <h2
              className={`heading-2 text-center mb-[20px] font-[700]  `}
            >
              For Creators and Influencers Who Dream Big
            </h2>
            <p className="parapraph text-center">
              Your creativity knows no boundary. Neither should the resources to
              bring it to life. Fig Finance gives you the financial freedom to
              focus on what matters (your content, your passion, and your
              projects.)
            </p>
          </div>

          <div className="w-full  grid md:grid-cols-2 lg:grid-cols-4  gap-[20px] my-[30px]">
            {CardDetails.map((card) => (
              <div
                key={card.id}
                className="w-11/12 md:w-auto md:col-span-1 mx-auto text-center rounded-[20px] p-[20px] bg-[#EFEFEF]"
              >
                <div className="flex justify-center items-center text-[100px] bg-accent-light  h-[50px] w-[50px] rounded-[50%] mx-auto mb-[20px] text-primary">
                  {card.img}
                </div>
                <div>
                  <h4 className="heading-4 lg:mb-[10px] ">
                    {card.title}
                  </h4>
                  <p className="text-[14px] lg:text-[13px]">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

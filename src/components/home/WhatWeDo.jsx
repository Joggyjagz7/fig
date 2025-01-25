"use client";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { merriweather } from "@/app/fonts";
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
      <div className="lg:grid grid-cols-2 gap-[40px] my-[60px] shadow-lg shadow-[rgb(227,220,239)] w-10/12  border-[#3A4262] border-l-0 rounded-[50px] py-[50px] px-[30px] mx-auto ">
        <div className="lg:col-span-1 flex flex-col justify-center w-full relative">
          <div
            style={style}
            className="absolute top-0 w-full h-full pointer-events-none  "
          />
          <Swiper
            spaceBetween={20}
            // direction={'vertical'}
            centeredSlides={true}
            loop={true}
            slidesPerView={1.4}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper z-0 w-full h-full "
          >
            {CardDetails.map((card) => (
              <SwiperSlide key={card.id}>
                <Card {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:col-span-1  h-full">
          <div className=" h-full flex flex-col   justify-center">
            <h2 className={`heading-2 mb-[20px] ${merriweather.className}`}>
              For Creators and Influencers Who Dream Big
            </h2>
            <p className="parapraph">
              Your creativity knows no boundary. Neither should the resources to
              bring it to life. Fig Finance gives you the financial freedom to
              focus on what matters (your content, your passion, and your
              projects.)
            </p>
            <div className="mt-[20px]">

          <button className="btn-colored">More Offers</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

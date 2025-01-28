import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
const MySwiper = () => {
  return (
    <Swiper
      direction={"vertical"}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper h-[50px] inline-block rounded-[10px] p-[5px]    "
    >
      <SwiperSlide className="h-full w-full  ">
        <p className="font-[700]">Kwame</p>
      </SwiperSlide>
      <SwiperSlide className="h-full flexw-full ">
        <p className="font-[700]">Ejiro</p>
      </SwiperSlide>
      <SwiperSlide className="h-full w-full  ">
        <p className="font-[700]">Busayo</p>
      </SwiperSlide>
      <SwiperSlide className="h-full w-full  ">
        <p className="font-[700]">Anyango</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;

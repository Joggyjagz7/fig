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
      className="mySwiper h-[30px] inline-block    "
    >
      <SwiperSlide className="h-full ">
        <p>Slide 1</p>
      </SwiperSlide>
      <SwiperSlide className="h-full ">
        <p>Slide 2</p>
      </SwiperSlide>
      <SwiperSlide className="h-full ">
        <p>Slide 3</p>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;

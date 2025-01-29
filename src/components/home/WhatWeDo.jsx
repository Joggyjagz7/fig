"use client";

import { motion } from "framer-motion";

import { CardDetails } from "@/libs/data";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

const variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 * index,
      type: "spring",
      stiffness: 100,
      damping: 10,
      bounce: 0.25,
      duration: 0.8,
      ease: "easeInOut",
    },
  }),
};
const WhatWeDo = () => {
  return (
    <section className="w-full bg-accent-light  ">
      <div className=" lg:w-10/13 w-11/12  lg:pt-[20px] py-[50px] mx-auto ">
        <div className=" h-full ">
          <div className="py-[50px]">
            <h2 className="heading-2 text-center lg:text-start  ">What We Do</h2>
            <div className="w-full  border  grid md:grid-cols-2 lg:grid-cols-4  gap-[20px] mt-[30px] lg:px-[20px] ">
              {CardDetails.map((card) => (
                <motion.div
                  variants={variants}
                  initial="initial"
                  whileInView="animate"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  custom={card.id}
                  viewport={{
                    once: true,
                    amount: 0.75,
                  }}
                  key={card.id}
                  className="w-11/12 md:w-auto md:col-span-1 mx-auto text-center rounded-[20px] p-[20px] bg-[#EFEFEF]"
                >
                  <div className="flex justify-center items-center text-[100px] bg-accent-light  h-[50px] w-[50px] rounded-[50%] mx-auto mb-[20px] text-primary-purple">
                    {card.img}
                  </div>
                  <div>
                    <h4 className="heading-4 lg:mb-[10px] ">{card.title}</h4>
                    <p className="text-[14px] font-[400] lg:text-[13px]">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

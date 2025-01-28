"use client";

import { motion } from "framer-motion";

import { CardDetails } from "@/libs/data";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

const variants = {
  initial: {
    opacity: 0,
    x: 100,
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
    <section className="w-full  ">
      {/* <div className="relative h-[70px] w-full ">
        <Image src="/images/wave.svg" alt="" fill objectFit="cover" />
      </div> */}
      <div className="lg:my-[10px] lg:w-10/13 w-11/12  lg:pt-[20px] py-[50px] mx-auto ">
        <div className=" h-full ">
          <div className=" px-[10px]  flex flex-col lg:flex-row  gap-[20px] mx-auto lg:py-[50px] w-full rounded-[20px] ">
            <div className="flex flex-col  md:w-10/12  md:mx-auto justify-center  lg:mx-auto ">
              <motion.h2
               initial={{ opacity: 0, y: 100  }}
               whileInView={{ opacity: 1, y: 0}}
               transition={{duration:1,  type: "spring", bounce: 0.6 }}
               viewport={{ once: true, amount: 0.5 }}
                className={`heading-2 text-center lg:text-start font-[700]  `}
              >
                For Creators and Influencers <br /> Who Dream Big
              </motion.h2>
              <motion.p
              initial={{ opacity: 0, y: 100  }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{duration:1, delay: 0.5,  type: "spring", bounce: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="parapraph text-center lg:text-start lg:w-[80%]">
                Your creativity knows no boundary. Neither should the resources
                to bring it to life.
                <br /> Fig Finance gives you the financial freedom to focus on
                what matters (your content, your passion, and your projects.)
              </motion.p>
              <motion.div
              initial={{ opacity: 0, y: 100  }}
              whileInView={{ opacity: 1, y: 0}}
              transition={{duration:1, delay: 1,  type: "spring", bounce: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
              className="mt-[20px] hidden lg:block">
                <button className="btn gap-2 items-center flex">
                  Learn More
                  <ChevronsRight />
                </button>
              </motion.div>
            </div>
            <div className=" w-full    creators-bg ">
              <div className=" h-[300px] md:h-[400px] w-full relative">
                <Image
                  src="/images/woman-smiling.webp"
                  alt="happy influncer"
                  fill
                  className="object-cover rounded-[20px]"
                />
              </div>
              <div className="mt-[40px] flex justify-center lg:hidden">
                <button className="btn gap-2 items-center flex">
                  Learn More
                  <ChevronsRight />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-[50px]">
            <h2 className="heading-2 text-center  ">What We Do</h2>
            <div className="w-full overflow-hidden  grid md:grid-cols-2 lg:grid-cols-4  gap-[20px] mt-[30px]">
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
                    <p className="text-[14px] lg:text-[13px]">{card.desc}</p>
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

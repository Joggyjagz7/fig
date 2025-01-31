"use client";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
const Creators = () => {
  return (
    <section className="w-full py-[50px] md:py-0   ">
      <div className="h-auto md:h-screen mx-auto relative">
        <div className=" px-[10px] z-[999]  h-full md:justify-center flex flex-col   mx-auto  w-full rounded-[20px] ">
          <div className="relative w-[200px] h-[100px] md:w-[300px] md:h-[150px]  mx-auto">
            <Image src="/images/logo.png" fill className="object-contain" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`heading-2 text-center  font-[700] text-primary-black  `}
          >
            For Creators And Influencers <br /> Who Dream Big💡
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              bounce: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[16px] md:text-[20px] text-primary-black font-[400] text-center mx-auto md:w-[80%] lg:w-[66%] w-[90%]"
          >
            Your creativity knows no boundary. Neither should the resources to
            bring it to life.
            <br /> Fig Finance gives you the financial freedom to focus on what
            matters (your content, your passion, and your projects.)
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring",
              bounce: 0.6,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-[20px]  flex justify-center"
          >
            <button className="btn-normal gap-2 mt-4 md::mt-5 items-center flex">
              Apply For Funding
              <ChevronsRight />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Creators;

"use client";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
const Creators = () => {
  return (
    <section className="w-full py-[50px] md:pb-[10px] md:pt-[20px]   ">
      <div className="h-auto border-4 border-red-500 md:h-screen mx-auto relative">
        <div className=" px-[10px] z-[999]  h-full md:justify-center flex flex-col   mx-auto  w-full rounded-[20px] ">
          <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative w-[70px] mb-4  h-[70px] md:w-[70px] lg:w-[80px] lg:h-[80px] md:h-[70px] mx-auto">
            <Image
              src="/images/logo-icon.png"
              fill
              className="object-contain"
              alt="Logo"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`lg:text-[60px] md:text-[50px] text-[40px] leading-[1.2em] font-[700] mb-3 text-center   text-primary-black  `}
          >
            For <span className="italic text-primary-color"> Creators</span>  And <span className="italic text-primary-color">Influencers </span>  <br /> Who Dream Big💡
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[15px] md:text-[15px] text-primary-black font-[400] text-center mx-auto md:w-[70%] lg:w-[46%] w-[90%]"
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
              bounce: 0.4,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-[20px]  flex justify-center"
          >
            <button className="btn-colored gap-2 mt-4 md::mt-5 items-center flex">
              Apply For Funding
              {/* <ChevronsRight /> */}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Creators;

"use client";

import { OpenSans } from "@/app/fonts";
import Image from "next/image";
import { motion } from "framer-motion";
export  const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 1,
      duration: 2,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const Works = () => {
 
  return (
    <section className="w-full relative py-[60px] bg-accent-light overflow-hidden">
      <div className="w-10/12 mx-auto">
        <div className="mb-[40px]">
          <h2 className={`heading-2 text-center `}>How It Works</h2>
        </div>
        {/* cards */}
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-[20px] o  md:w-9/12 md:mx-auto lg:gap-[30px]">
          {/* card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#F9FAFB] col-span-1 md:col-span-2 md:w-[50%] group p-[20px] rounded-[20px] overflow-hidden hover:bg-primary-purple transition duration-500 mb-[40px] md:mb-0"
          >
            <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
              <div className="flex items-center gap-[30px]">
                <div className=" ">
                  <Image
                    src="/images/work-1.webp"
                    alt="Share Your Vision"
                    width={500}
                    height={500}
                    className="rounded-[20px] "
                  />
                </div>
                <h2
                  className={`text-[40px] text-accent-light ${OpenSans.className}`}
                >
                  01
                </h2>
              </div>
              <div className="mt-[20px]">
                <div className="flex justify-end mb-[10px]">
                  <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12 group-hover:text-white">
                    Share your idea, your project, and your dream. We’ll help
                    you fund it.
                  </p>
                </div>
                <h4 className="heading-4 group-hover:text-white ">
                  Share Your Vision
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{  type: "spring", bounce: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          className="hidden col-span-2 w-1/2 md:flex justify-end ">
            <div className="w-[70px] h-[70px] relative">
              <Image src="/images/Vector.png" fill className="object-contain" />
            </div>
          </motion.div>

          {/* card 2 */}
          <div className="w-full md:flex justify-end md:col-span-2 mb-[40px] md:mb-0">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
              variants={variants}
              className="bg-[#F9FAFB] rounded-[20px]   md:w-[50%] p-[20px] overflow-hidden "
            >
              <div className="w-full h-full transition transform hover:scale-[105%] duration-500 flex flex-col-reverse">
                <div className="flex flex-row-reverse items-center gap-[30px]">
                  <div className=" ">
                    <Image
                      src="/images/work-2.webp"
                      alt="Share Your Vision"
                      width={500}
                      height={500}
                      className="rounded-[20px] "
                    />
                  </div>
                  <h2
                    className={`text-[40px] text-accent-light ${OpenSans.className}`}
                  >
                    02
                  </h2>
                </div>
                <div className="mt-[20px] flex flex-col-reverse ">
                  <div className="flex justify-end mb-[10px]">
                    <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12">
                      Blink and you’ll have the funds. We move quickly. Once
                      approved, the funds are in your account and ready to go
                    </p>
                  </div>
                  <h3 className="heading-4 mb-2 ">Get Funded Fast</h3>
                </div>
              </div>
            </motion.div>
          </div>

          {/* card 3 */}
          <motion.div
             initial={{ opacity: 0, x: -100 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{  type: "spring", bounce: 0.6, duration: 1 }}
            className="bg-[#F9FAFB] group p-[20px] rounded-[20px] md:col-span-2 md:w-[50%] hover:bg-primary-purple transition duration-500 ease-in-out mb-[40px] md:mb-0 "
          >
            <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
              <div className="flex flex-row md:flex-row-reverse items-center gap-[30px]">
                <div className=" ">
                  <Image
                    src="/images/work-3.webp"
                    alt="Share Your Vision"
                    width={500}
                    height={500}
                    className="rounded-[20px] "
                  />
                </div>
                <h2
                  className={`text-[40px] text-accent-light ${OpenSans.className}`}
                >
                  03
                </h2>
              </div>
              <div className="mt-[20px] flex flex-col-reverse ">
                <div className="flex justify-end mb-[10px]">
                  <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12 group-hover:text-white">
                    Shoot. Edit. Post. Let the world see your brilliance.
                  </p>
                </div>
                <h3 className="heading-4 group-hover:text-white mb-2">
                  Create Your Masterpiece
                </h3>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{  type: "spring", bounce: 0.6, duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          className="hidden col-span-2 w-1/2 md:flex justify-end ">
            <div className="w-[70px] h-[70px] relative">
              <Image src="/images/Vector.png" fill className="object-contain" />
            </div>
          </motion.div>

          {/* card 4 */}
          <div className="w-full md:flex justify-end md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{  type: "spring", bounce: 0.6, duration: 1 }}
              className="bg-[#F9FAFB] group p-[20px]  md:w-[50%] rounded-[20px] hover:bg-primary-purple transition duration-500 ease-in-out "
            >
              <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
                <div className="flex flex-row-reverse md:flex-row items-center gap-[30px]">
                  <div className=" ">
                    <Image
                      src="/images/work-4.webp"
                      alt="Share Your Vision"
                      width={500}
                      height={500}
                      className="rounded-[20px] "
                    />
                  </div>
                  <h2
                    className={`text-[40px] text-accent-light ${OpenSans.className}`}
                  >
                    04
                  </h2>
                </div>
                <div className="mt-[20px] flex flex-col-reverse ">
                  <div className="flex justify-start md:justify-end mb-[10px]">
                    <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12 group-hover:text-white">
                      Pay us back when the cash starts flowing. We work with
                      flexible payment options.
                    </p>
                  </div>
                  <h3 className="heading-4 group-hover:text-white mb-2">
                    Repay Own Your Terms
                  </h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

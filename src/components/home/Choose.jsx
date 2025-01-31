"use client";
import { motion } from "framer-motion";



const Choose = () => {
  return (
    <section className="choose-bg relative">
      <div className="lg:h-screen flex lg:justify-between py-[50px] flex-col gap-[20px] ">
        <div className="flex justify-center  lg:justify-start lg:w-11/12 lg:mx-auto items-center">
          <h2 className="heading-2 text-white ">Why Choose Us</h2>
        </div>
        <div className="flex flex-col gap-[20px] text-primary-black  lg:gap-0 lg:flex-row justify-between w-full lg:w-11/12 mx-auto  ">

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
            className="lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%] "
          >
            <div className="bg-white text-primary-black p-[20px] w-9/12 md:w-8/12 mx-auto lg:mx-0 lg:w-[400px] rounded-[10px] flex-1 ">
              <h4 className="group-hover:scale-105 transition ease-in-out heading-4 lg:mb-1 ">
                Instant Funding{" "}
              </h4>
              <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
                No paperwork. Just fast, easy access to the funds you need
                without the wait.
              </p>
            </div>
          </motion.div>
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
            className="lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%] "
          >
            <div className="bg-white text-primary-black p-[20px] w-9/12 md:w-8/12 mx-auto lg:mx-0 lg:w-[400px] rounded-[10px] flex-1 ">
              <h4 className="group-hover:scale-105 transition ease-in-out font-[700] lg:mb-1 leading-[1.4em] ">
                Focus On The Art{" "}
              </h4>
              <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
                Get creative. Create your best work. And leave the financial
                stress to us.
              </p>
            </div>
          </motion.div>
        </div>
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
          className="flex justify-center items-center w-9/12 lg:w-[400px] md:w-8/12 mx-auto  "
        >
          <div className="bg-white md:group transition transform duration-500 ease-in-out md:hover:scale-[110%] text-primary-black  p-[20px] w-11/12  mx-auto lg:mx-0  rounded-[10px] flex-1 ">
            <h4 className="group-hover:scale-105 transition ease-in-out font-[700] lg:mb-1 leading-[1.4em] ">
              Flexible Repayment{" "}
            </h4>
            <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
              Take your time. Create. Deliver. When your funds start rolling in,
              pay us back on your terms
            </p>
          </div>
        </motion.div>
      </div>
      {/* <Ripple /> */}
    </section>
  );
};

export default Choose;

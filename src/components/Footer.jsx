import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full md:py-[100px] bg-primary-color py-[40px] ">
      <div className=" h-full md:flex flex-col gap-[50px]  w-11/12 mx-auto">
        <div className="md:flex mb-[20px]">
          <div className="w-9/12 md:w-[50%]  lg:w-[60%] mb-[30px]">
            <div className="relative w-[150px] h-[50px] object-contain">
              <Image src="/images/logo-white-2.png" alt="logo for footer" fill className="object-contain"/>
            </div>
            <p className="text-[14px] font-[400] leading-[1.5em] text-white md:w-[80%] lg:w-[50%]">
              Your creativity knows no boundary. Neither should the resources to
              bring it to life.
            </p>
          </div>
          <div className="md:flex w-[50%] lg:w-[40%] justify-between lg:justify-start lg:gap-[50px] ">
            <div className="mb-[30px]">
              <h4 className=" mb-2 text-white text-[16px] font-[700] ">Fig Finance</h4>
              <p className="text-[14px] font-[400] leading-[1.5em] text-white mb-1">
                Terms & Conditions
              </p>
              <p className="text-[14px] font-[400] leading-[1.5em] text-white">Privacy Policy</p>
            </div>
            <div className="mb-[30px]">
              <h4 className=" mb-2 text-white text-[16px] font-[700]">About Us</h4>
              <p className="text-[14px] font-[400] leading-[1.5em] text-white mb-1">Contact Us</p>
              <p className="text-[14px] font-[400] leading-[1.5em] text-white">Support</p>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className=" flex flex-col md:flex-row justify-between">
          <div className="flex justify-evenly mb-[30px] md:w-[50%] md:justify-start md:gap-[20px]">
            <p className="text-[14px] font-[400] leading-[1.5em] text-white">Apply</p>
            <p className="text-[14px] font-[400] leading-[1.5em] text-white">
              Get Funded
            </p>
            <p className="text-[14px] font-[400] leading-[1.5em] text-white">Repay</p>
          </div>
          <div className="flex justify-evenly md:justify-end md:gap-[20px] mb-[30px] md:w-[50%]">
          <FaFacebookF className="text-white"/>
          <FaXTwitter className="text-white"/>
          <FaLinkedinIn className="text-white"/>
          <FaInstagram className="text-white"/>
          </div>
        </div>
        <div>
          <div className="">
            <p className="text-gray-200 paragraph text-center text-[14px] font-[400] leading-[1.5em]">
              Copyright © 2024 | Fig Finance | All Rights Reserved
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { poppins } from "@/app/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(() => window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  console.log(isScrolled);
  return (
    <nav
      className={`${
        isScrolled ? "bg-purple-900" : "bg-transparent"
      } sticky top-0    h-[70px]   transition-all duration-300 `}
    >
      <div
        className={`flex justify-between mx-auto w-11/12 h-full items-center ${
          isScrolled ? " text-white" : "text-purple-900"
        }`}
      >
        <div className="text-[25px] font-[900]  ">Fig</div>
        <div className={`flex gap-[20px] text-[13px] font-[500] ${poppins.className} `}>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Showcase</Link>
          <Link href="#">Resource</Link>
          <Link href="#">Enterprise</Link>
        </div>
        <div>
          <button className={`text-[14px] font-[700] ${isScrolled? "btn": "btn-colored"}`}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

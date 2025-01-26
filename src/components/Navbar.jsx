"use client";

import { poppins } from "@/app/fonts";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setSHowDropdown] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setSHowDropdown(!showDropdown);
  };

  const handleScroll = () => {
    setIsScrolled(() => window.scrollY > 0);
  };

  // listen for  clicks outside of the menu dropdown and close the menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref && !ref.current.contains(e.target)) {
        setSHowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // change state if the page is scrolled
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav
      className={`${
        isScrolled ? "bg-primary-purple" : "bg-transparent"
      } sticky top-0  h-[70px]  lg:h-[50px]   transition-all duration-300 `}
    >
      <div
        className={`flex justify-between mx-auto w-11/12 h-full relative items-center ${
          isScrolled ? " text-white" : "text-primary-purple"
        }`}
      >
        <div className="text-[25px] font-[900]  ">Fig</div>
        <div
          className={`lg:flex gap-[20px] hidden  text-[13px] font-[500] ${poppins.className} `}
        >
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Showcase</Link>
          <Link href="#">Resource</Link>
          <Link href="#">Enterprise</Link>
        </div>
        <div className="hidden lg:block">
          <button
            className={`text-[14px] font-[700] ${
              isScrolled ? "btn" : "btn-colored"
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* hamburger menu for mobile  */}
        <div ref={ref} className="lg:hidden " onClick={toggleDropdown}>
          {showDropdown ? <X /> : <Menu />}
        </div>
        {showDropdown && (
          <div className="lg:hidden absolute top-[70px] w-full h-[300px] z-[999] bg-dark-gray ">
            <ul className=" space-y-3 text-black">
              <li className="">
                <Link href="#" className="w-full h-full">
                  About
                </Link>
              </li>
              <li className="">
                <Link href="#" className="w-full h-full">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

"use client"
import { merriweather } from "@/app/fonts"
import { ChevronsRight } from "lucide-react"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

const Hero = () => {
  return (
    <div className="w-full  pt-[140px] pb-[50px] bg-[#EFEFEF]">
      <div className=" lg:grid grid-cols-3  mx-auto ">
        <div className=" mt-[30px] border-4 lg:col-span-2 text-center lg:text-start ">
            <h1 className={`text-[50px]  leading-[1.1em]  text-purple-900 ${merriweather.className}`}>
      Financing for Influencers and Creators in   <span style={{color: "#00000099"}} className="text-[#050914]">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Africa', 'America', 'Europe', 'Asia']}
            loop={false}
            // cursor
            // cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            
          />.
        </span>

            </h1>
            <p className="paragraph">
            We provide creators and influencers upfront capital and flexible repayment deals to help start their next big projects
            </p>
            <div className="flex gap-[20px] mt-[20px] justify-center lg:justify-start">
                <button className="btn-colored">Apply For Funding</button>
                <button className="btn flex gap-2">Learn More
                <ChevronsRight />
                </button>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default Hero
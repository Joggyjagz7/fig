import Choose from "@/components/home/Choose";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import WhatWeDo from "@/components/home/WhatWeDo";
import Works from "@/components/home/Works";


export default function Home() {
  return (
    <main className="">
      <Hero />
     <WhatWeDo />
     <Choose />
     <Works />
     <Testimonial />
     
    </main>

  );
}

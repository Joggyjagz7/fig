import { merriweather } from "@/app/fonts";
import Image from "next/image";

const Works = () => {
  return (
    <section className="w-full py-[60px] bg-accent-light">
      <div className="w-10/12 mx-auto">
        <div className="mb-[40px]">
          <h2 className={`heading-2 text-center `}>
            How It Works 
          </h2>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] lg:gap-[20px]">
          {/* card 1 */}
          <div className="bg-[#F9FAFB] col-span-1 group p-[20px] rounded-[20px] overflow-hidden hover:bg-primary transition duration-500 ease-in-out">
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
                  className={`text-[40px] text-accent-light ${merriweather.className}`}
                >
                  01
                </h2>
              </div>
              <div className="mt-[20px]">
                <div className="flex justify-end mb-[10px]">
                  <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12 group-hover:text-white">
                  Share your idea, your project, and your dream. We’ll help you fund it.
                  </p>
                </div>
                <h3 className="text-[18px] group-hover:text-white ">Share Your Vision</h3>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-[#F9FAFB] rounded-[20px] p-[20px] overflow-hidden ">
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
                  className={`text-[40px] text-accent-light ${merriweather.className}`}
                >
                  02
                </h2>
              </div>
              <div className="mt-[20px] flex flex-col-reverse ">
                <div className="flex justify-end mb-[10px]">
                  <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12">
                  Blink and you’ll have the funds. We move quickly. Once approved, the funds are in your account and ready to go
                  </p>
                </div>
                <h3 className="text-[18px] ">Get Funded Fast</h3>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-[#F9FAFB] group p-[20px] rounded-[20px] hover:bg-primary transition duration-500 ease-in-out ">
            <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
              <div className="flex flex-row-reverse items-center gap-[30px]">
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
                  className={`text-[40px] text-accent-light ${merriweather.className}`}
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
                <h3 className="text-[18px] group-hover:text-white">Create Your Masterpiece</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

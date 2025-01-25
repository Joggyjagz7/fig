import { merriweather } from "@/app/fonts";
import Image from "next/image";

const Works = () => {
  return (
    <section className="w-full py-[60px]">
      <div className="w-10/12 mx-auto">
        <div className="mb-[40px]">
          <h2 className={`heading-2 text-center ${merriweather.className}`}>
            Why Choose Fig Finance
          </h2>
        </div>
        {/* cards */}
        <div className="lg:grid grid-cols-3 gap-[20px]">
          {/* card 1 */}
          <div className="bg-[#F9FAFB] p-[20px] overflow-hidden">
            <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
              <div className="flex items-center gap-[30px]">
                <div className=" ">
                  <Image
                    src="/images/choose-1.webp"
                    alt="Share Your Vision"
                    width={500}
                    height={500}
                    className="rounded-[20px] "
                  />
                </div>
                <h2
                  className={`text-[40px] text-gray-400/60 ${merriweather.className}`}
                >
                  01
                </h2>
              </div>
              <div className="mt-[20px]">
                <div className="flex justify-end mb-[10px]">
                  <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12">
                    No paperwork. Just fast, easy access to the funds you need
                    without the wait.
                  </p>
                </div>
                <h3 className="text-[18px] ">Instant Funding</h3>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-[#F9FAFB] p-[20px] overflow-hidden ">
            <div className="w-full h-full transition transform hover:scale-[105%] duration-500 flex flex-col-reverse">
              <div className="flex flex-row-reverse items-center gap-[30px]">
                <div className=" ">
                  <Image
                    src="/images/choose-2.webp"
                    alt="Share Your Vision"
                    width={500}
                    height={500}
                    className="rounded-[20px] "
                  />
                </div>
                <h2
                  className={`text-[40px] text-gray-400/60 ${merriweather.className}`}
                >
                  02
                </h2>
              </div>
              <div className="mt-[20px] flex flex-col-reverse ">
                <div className="flex justify-end mb-[10px]">
                  <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12">
                    Get creative. Create your best work. And leave the financial
                    stress to us.
                  </p>
                </div>
                <h3 className="text-[18px] ">Focus on the Art</h3>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-[#F9FAFB] p-[20px] ">
            <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
              <div className="flex flex-row-reverse items-center gap-[30px]">
                <div className=" ">
                  <Image
                    src="/images/choose-3.webp"
                    alt="Share Your Vision"
                    width={500}
                    height={500}
                    className="rounded-[20px] "
                  />
                </div>
                <h2
                  className={`text-[40px] text-gray-400/60 ${merriweather.className}`}
                >
                  03
                </h2>
              </div>
              <div className="mt-[20px] flex flex-col-reverse ">
                <div className="flex justify-end mb-[10px]">
                  <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12">
                    Take your time. Create. Deliver. When your funds start
                    rolling in, pay us back on your terms
                  </p>
                </div>
                <h3 className="text-[18px] ">Flexible Repayment</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

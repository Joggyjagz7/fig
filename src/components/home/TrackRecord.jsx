import Image from "next/image";

const TrackRecord = () => {
  return (
    <section className="w-full py-[50px] md:pb-0 lg:py-[50px] ">
      <div className="w-10/12 md:w-11/12 mx-auto md:h-screen ">
        <div className=" mb-[50px]">
          <h2 className="heading-2 text-center ">Our Track Record</h2>
        </div>
        <div className=" md:hidden  r">
          <div className=" grid grid-cols-2 gap-[30px] mb-[20px]">
            <div className="col-span-1">
              <h2 className="heading-3">₦2M+</h2>
              <p className="text-[14px] text-black">
                Funded to support creators and influencers.
              </p>
            </div>
            <div className="col-span-1">
              <h2 className="heading-3">15+</h2>
              <p className="text-[14px] text-black">
                Projects funded across Africa.
              </p>
            </div>
          </div>

          <div className=" grid grid-cols-2 gap-[30px] mb-[20px]">
            <div className="col-span-1">
              <h2 className="heading-3">98%</h2>
              <p className="text-[14px] text-black">
                Approval rate for eligible creators.
              </p>
            </div>
            <div className="col-span-1">
              <h2 className="heading-3">12+ </h2>
              <p className="text-[14px] text-black">
                Creators empowered to level up their craft.
              </p>
            </div>
          </div>
          <div className="md:col-span-3 grid grid-cols-2 gap-[30px] mb-[20px]">
            <div className="col-span-1">
              <h2 className="heading-3">98%</h2>
              <p className="text-[14px] text-black">
                Repayment flexibility rating from satisfied users.
              </p>
            </div>
            <div className="col-span-1">
              <h2 className="heading-3"></h2>
              <p className="text-[14px] text-black"></p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:gap-[10px] lg:gap-[20px] items-center lg:h-[90vh]  ">
          <div className="h-full relative hidden md:block col-span-1 ">
            <Image
              src="/images/Track.webp"
              fill
             className="object-cover rounded-[30px]"
            />
          </div>
            
          {/* desktop */}
          <div className="hidden md:grid grid-cols-2 md:gap-[10px] lg:gap-[40px]  col-span-1 rounded-tr-none rounded-bl-none rounded-[20px]   mx-auto md:p-[20px] lg:p-[30px] bg-[#EFEFEF] justify-center ">
            <div className="col-span-1 bg-white rounded-[20px] rounded-tr-none rounded-bl-none p-[15px]">
              <h2 className="heading-3">₦2M+</h2>
              <p className="text-[14px] text-black">
                Funded to support creators and influencers.
              </p>
            </div>
            <div className="col-span-1 bg-white rounded-[20px] rounded-tr-none rounded-bl-none p-[15px]">
              <h2 className="heading-3">15+</h2>
              <p className="text-[14px] text-black">
                Projects funded across Africa.
              </p>
            </div>
            <div className="col-span-1 bg-white rounded-[20px] rounded-tr-none rounded-bl-none p-[15px]">
              <h2 className="heading-3">98%</h2>
              <p className="text-[14px] text-black">
                Approval rate for eligible creators.
              </p>
            </div>
            <div className="col-span-1 bg-white rounded-[20px] rounded-tr-none rounded-bl-none p-[15px]">
              <h2 className="heading-3">12+ </h2>
              <p className="text-[14px] text-black">
                Creators empowered to level up their craft.
              </p>
            </div>
            <div className="col-span-1 bg-white rounded-[20px] rounded-tr-none rounded-bl-none p-[15px]">
              <h2 className="heading-3">98%</h2>
              <p className="text-[13px] text-black">
                Repayment flexibility rating from satisfied users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;

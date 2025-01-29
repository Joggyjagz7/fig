import Image from "next/image";

const TrackRecord = () => {
  return (
    <section className="w-full py-[50px] lg:py-0 bg-light-bg ">
      <div className="w-10/12    md:w-11/12 mx-auto md:h-screen ">
       
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[70%]">
          <div className="w-full"> <h2 className="heading-2 ">Our Track Record</h2></div>
            <div className="flex mb-3  lg:w-11/12 ">
              <div className="w-[50%] md:w-[30%] lg:w-[50%] ">
                <h3 className="font-[7000] text-[35px] lg:text-[50px] ">₦2M+</h3>
                <p className="font-[400] text-[16px]">
                  {" "}
                  Funded to support creators and influencers.
                </p>
              </div>
              <div className="w-[50%] md:w-[30%] lg:w-[50%] ">
                <h3 className="font-[7000] text-[35px] lg:text-[50px] ">15+ </h3>
                <p className="font-[400] text-[16px]">
                  {" "}
                  Projects funded across Africa.
                </p>
              </div>
            </div>
            <div className="flex mb-3  lg:w-11/12">
              <div className="w-[50%] md:w-[30%] lg:w-[50%] ">
                <h3 className="font-[7000] text-[35px] lg:text-[50px] ">98%</h3>
                <p className="font-[400] text-[16px]">
                  {" "}
                  Approval rate for eligible creators.
                </p>
              </div>
              <div className="w-[50%] md:w-[30%] lg:w-[50%] ">
                <h3 className="font-[7000] text-[35px] lg:text-[50px] ">12+ </h3>
                <p className="font-[400] text-[16px]">
                  {" "}
                  Creators empowered to level up their craft.
                </p>
              </div>
            </div>
            <div className="flex mb-3">
              <div className="w-[50%] md:w-[30%] lg:w-full lg:text-center ">
                <h3 className="font-[7000] text-[35px] lg:text-[50px]">98%</h3>
                <p className="font-[400] text-[16px]">
                  {" "}
                  Repayment flexibility rating from satisfied users.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 ">
            <div className="h-full w-full relative">
            <Image
              src="/images/Track.webp"
              fill
             className="object-cover rounded-[30px]"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
{
  /* <div className="h-full relative hidden md:block col-span-1 ">
           
          </div> */
}

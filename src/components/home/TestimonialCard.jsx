import Image from "next/image";

const TestimonialCard = ({ image, alt, name, title, desc }) => {
  return (
    <div className="rounded-[20px] w-[300px]   p-[20px] mb-[30px] lg:mb-[20px]  bg-accent-light">
      <div className="flex gap-[20px] lg:gap-[10px] mb-[10px]">
        <div className="w-[40px] h-[40px] lg:w-[30px] lg:h-[30px] rounded-[50%] relative  overflow-hidden ">
          <Image src={image} alt={alt} layout="fill" objectFit="cover" />
        </div>
        <div className="text-black">
          <h4 className="heading-4 ">{name}</h4>
          <p className="font-[400] text-[14px]   ">{title}</p>
        </div>
      </div>
      <div>
        <blockquote className=" text-[13px] lg:text-[14px] leading- font-[500] ">
          {`"${desc}"`}
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialCard;

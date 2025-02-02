import { FaqDetails } from "@/libs/data";
import AccordionLayout from "./Accordion";

const Faq = () => {
  return (
    <section>
      <div className=" w-11/12 mx-auto py-[40px] md:py-[50px]">
        <h2 className="text-start heading-2 text-primary-black ">Frequently Asked Question</h2>
        <div className="md:w-full w-full mt-[50px] bg-light-bg">
          {FaqDetails.map((faq) => (
            <AccordionLayout {...faq} key={faq.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

import { FaqDetails } from "@/libs/data";
import AccordionLayout from "./Accordion";

const Faq = () => {
  return (
    <section>
      <div className=" w-11/12 mx-auto py-[80px] md:py-[50px]">
        <h2 className="text-start heading-2 text-primary-black ">Frequently Asked Question</h2>
        <div className="md:w-10/12 w-full mt-[50px] ">
          {FaqDetails.map((faq) => (
            <AccordionLayout {...faq} key={faq.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

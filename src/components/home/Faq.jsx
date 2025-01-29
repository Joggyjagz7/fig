import { FaqDetails } from "@/libs/data";
import AccordionLayout from "./Accordion";

const Faq = () => {
  return (
    <section>
      <div className="md:w-1/2 w-11/12 mx-auto py-[50px]">
        <h2 className="text-start heading-2">Frequently Asked Question</h2>
        <div className="">
          {FaqDetails.map((faq) => (
            <AccordionLayout {...faq} key={faq.value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const AccordionLayout = ({ question, answer, value, id }) => {
  return (
    <div>
      <Accordion className="border rounded-[5px] px-[20px] py-[5px] mb-3 bg-light-bg" type="single" collapsible>
        <AccordionItem value={value}>
          <AccordionTrigger className="text-[18px]  grid grid-cols-12  md:text-[25px] font-[900]  text-primary-black">
            <span className="col-span-2 md:col-span-1 ">{id}</span>
            <span className="col-span-10 md:col-span-11 ">{question} </span>
          </AccordionTrigger>
          <AccordionContent className="text-[16px]  md:text-[18px] font-[400] leading-[1.5em] text-primary-black">{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionLayout

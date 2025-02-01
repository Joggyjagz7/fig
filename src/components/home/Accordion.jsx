import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const AccordionLayout = ({ question, answer, value, id }) => {
  return (
    <div>
      <Accordion className="border rounded-[20px] px-[20px] py-[5px] mb-3 bg-light-bg" type="single" collapsible>
        <AccordionItem value={value}>
          <AccordionTrigger className="text-[16] md::text-[27px] font-[700]  text-primary-black">{`${id}  ${question}`}</AccordionTrigger>
          <AccordionContent className="text-[16px]  md:text-[18px] font-[400] leading-[1.5em] text-primary-black">{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionLayout

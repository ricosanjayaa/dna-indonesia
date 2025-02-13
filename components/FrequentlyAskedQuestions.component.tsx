import { Accordion,  AccordionContent,  AccordionItem,  AccordionTrigger } from "@/components/ui/accordion";

export function FrequentlyAskedQuestions({ questions }: { questions: { question: string, answer: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((question: { question: string, answer: string }, index) => (
        <AccordionItem key={index} value={index.toString()}>
          <AccordionTrigger>{question.question}</AccordionTrigger>
          <AccordionContent>{question.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
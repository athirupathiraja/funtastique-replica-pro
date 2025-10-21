import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Centre Funtastique?",
      answer: "Centre Funtastique is a small and private venue for children's events (maximum capacity of 50 people).",
    },
    {
      question: "How much does it cost to host my party at Centre Funtastique?",
      answer: "We charge $375 for 3 hours. Currently, we have a special promo: $350 for 4 hours! For an extra cost, you can keep the party going.",
    },
    {
      question: "What's included in the package?",
      answer: "A fully private party! With 1 host (helps with setup, spills, party games etc), access to a fully equipped kitchen (microwave, stove, oven, etc), entertainment system (TV, sound system, chairs, tables), and 5 parking spaces included.",
    },
    {
      question: "Can I visit the venue before my party?",
      answer: "Yes, please contact us to arrange a visit. We can also discuss custom decorations and themes for your party.",
    },
    {
      question: "Can you make a custom themed party?",
      answer: "Yes, we can fully customize the venue for an additional cost. Some examples of themes we have done in the past: Frozen, Mario, Paw Patrol. We also have special activities like bracelet making, cupcake decorations, ice-cream making, etc. You can also rent out our popcorn and snow cone machines!",
    },
    {
      question: "Are there any age limits for the venue?",
      answer: "Yes, we cater for kids between 1 - 12 years old. But there are no age limits for the parents!",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border-0 shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

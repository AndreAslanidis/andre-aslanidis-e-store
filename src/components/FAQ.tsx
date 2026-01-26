import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I place an order?",
    answer:
      "Browse the site, add items to your cart, and proceed to checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Visa, Mastercard, American Express, and other secure online payment options depending on location.",
  },
  {
    question: "How long will delivery take?",
    answer:
      "Australia: 3–7 business days. International: 7–21 business days. Express shipping available.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, tracking details are emailed once your order ships.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer returns within 14 days of delivery for unworn items in original packaging.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        {/* Section Header */}
        <h2 className="font-display text-lg md:text-xl text-foreground mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion */}
        <div className="max-w-2xl">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border py-0"
              >
                <AccordionTrigger className="py-4 text-left font-body text-xs hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4 font-body text-xs text-muted-foreground leading-relaxed">
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

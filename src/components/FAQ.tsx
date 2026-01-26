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
      "Browse the site, add items to your cart, and proceed to checkout. Our streamlined process ensures a seamless luxury shopping experience.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, and other secure online payment options depending on your location. All transactions are encrypted and secure.",
  },
  {
    question: "How long will delivery take?",
    answer:
      "Australia: 3–7 business days. International: 7–21 business days. Express shipping is available for time-sensitive orders.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, tracking details are emailed once your order ships. You'll receive real-time updates on your package's journey.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer returns within 14 days of delivery for unworn items in original packaging. Contact our support team to initiate a return.",
  },
];

const FAQ = () => {
  return (
    <section className="relative bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Support
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border px-6 data-[state=open]:border-foreground/30 transition-colors"
              >
                <AccordionTrigger className="py-6 text-left font-display text-lg font-light hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground text-sm leading-relaxed">
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

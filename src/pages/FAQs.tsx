import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "1. HOW CAN I PLACE AN ORDER?",
    answer: "To place an order, simply browse our website and add the desired item(s) to your shopping cart. Proceed to the checkout page, where you can enter your shipping information and payment details to complete the purchase."
  },
  {
    question: "2. WHAT PAYMENT METHODS DO YOU ACCEPT?",
    answer: "We accept various payment methods, including credit/debit cards (Visa, Mastercard, American Express), and other secure online payment options. Please note that availability may vary depending on your location."
  },
  {
    question: "3. HOW LONG WILL IT TAKE TO RECEIVE MY ORDER?",
    answer: "The delivery time depends on your location and the shipping method chosen. Domestic orders within Australia typically take 3-7 business days, while international orders may take longer, usually between 7-21 business days. Express shipping options are available for faster delivery."
  },
  {
    question: "4. CAN I TRACK MY ORDER?",
    answer: "Yes, once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the progress of your shipment through our website or the designated courier's website."
  }
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[800px] mx-auto px-4 md:px-10 py-12 md:py-16">
            {/* Page Title */}
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-12 text-center">
              FAQ's
            </h1>

            {/* FAQ Accordion */}
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border mb-2"
                >
                  <AccordionTrigger className="px-4 py-4 font-body text-xs text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 font-body text-xs text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;

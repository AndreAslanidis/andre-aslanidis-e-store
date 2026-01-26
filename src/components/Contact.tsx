import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-background border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        {/* Section Header */}
        <h2 className="font-display text-lg md:text-xl text-foreground mb-8">
          Contact Us
        </h2>

        <div className="max-w-xl">
          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <a
              href="mailto:shop.andreaslanidis@gmail.com"
              className="flex items-center gap-3 font-body text-xs text-foreground hover:opacity-70 transition-opacity"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              shop.andreaslanidis@gmail.com
            </a>

            <a
              href="https://instagram.com/andreaslanidis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-body text-xs text-foreground hover:opacity-70 transition-opacity"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              @andreaslanidis
            </a>
          </div>

          {/* Response Time */}
          <p className="font-body text-xs text-muted-foreground">
            We aim to respond within 24 hours. In some cases, responses may take 
            up to 2 business days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

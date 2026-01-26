import { Mail, Instagram, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-charcoal">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Contact Us
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:shop.andreaslanidis@gmail.com"
              className="group p-8 bg-background/50 border border-border hover:border-foreground/30 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                  <Mail className="w-5 h-5 text-silver" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Email
                  </p>
                  <p className="text-foreground text-sm">
                    shop.andreaslanidis@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/andreaslanidis"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-background/50 border border-border hover:border-foreground/30 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                  <Instagram className="w-5 h-5 text-silver" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Instagram
                  </p>
                  <p className="text-foreground text-sm">@andreaslanidis</p>
                </div>
              </div>
            </a>
          </div>

          {/* Response Time Notice */}
          <div className="text-center p-8 border border-border">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-4 h-4 text-silver" strokeWidth={1.5} />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Response Time
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We aim to respond within 24 hours. In some cases, responses may take 
              up to 2 business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

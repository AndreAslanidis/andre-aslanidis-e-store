import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[800px] mx-auto px-4 md:px-10 py-12 md:py-16">
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              Contact Information
            </h1>

            {/* Contact Info */}
            <div className="mb-12 space-y-3 font-body text-xs text-foreground leading-relaxed">
              <p>If you have any questions or concerns regarding your order, feel free to contact us.</p>
              <p>You can reach us via the following:</p>
              <p>
                Email:{" "}
                <a href="mailto:shop.andreaslanidis@gmail.com" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  shop.andreaslanidis@gmail.com
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://instagram.com/andreaslanidis" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  @andreaslanidis
                </a>
              </p>
              <p className="text-muted-foreground">
                We try our best to get back to any inquiries within 24 hours, however in some cases it may take up to 2 business days.
              </p>
            </div>

            {/* Contact Form */}
            <div className="mb-8">
              <h2 className="font-display text-lg text-foreground mb-6">Contact form</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 border-border bg-background font-body text-xs placeholder:text-muted-foreground rounded-none focus-visible:ring-1 focus-visible:ring-foreground"
                  />
                  <Input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-border bg-background font-body text-xs placeholder:text-muted-foreground rounded-none focus-visible:ring-1 focus-visible:ring-foreground"
                  />
                </div>
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12 border-border bg-background font-body text-xs placeholder:text-muted-foreground rounded-none focus-visible:ring-1 focus-visible:ring-foreground"
                />
                <Textarea
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="min-h-[120px] border-border bg-background font-body text-xs placeholder:text-muted-foreground rounded-none resize-none focus-visible:ring-1 focus-visible:ring-foreground"
                />
                <button
                  type="submit"
                  className="h-12 px-8 bg-primary text-primary-foreground font-body text-xs tracking-wide hover:opacity-85 transition-opacity"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;

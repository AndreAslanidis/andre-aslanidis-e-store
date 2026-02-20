import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[800px] mx-auto px-4 md:px-10 py-12 md:py-16">
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              Terms of Service
            </h1>

            <div className="space-y-8 font-body text-xs text-foreground leading-relaxed">
              <div>
                <h2 className="font-display text-sm text-foreground mb-3">Return/Refund Policy</h2>
                <p className="mb-4">
                  We do not offer refunds/returns for change of mind. Andre Aslanidis™ is not responsible for loss or damage during shipping, but we ensure every package arrives safely by double boxing your item(s).
                </p>
                <p className="mb-4">
                  Refunds or exchanges are offered only for major faults, such as item(s) missing parts, being unsafe, significantly different from the description, or not functioning as described. Refunds or exchanges will be provided with proof of purchase on faulty merchandise within a reasonable timeframe. Refunds will be provided in the same form as your original payment.
                </p>
                <p>
                  For any questions, email us at{" "}
                  <a href="mailto:shop.andreaslanidis@gmail.com" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                    shop.andreaslanidis@gmail.com
                  </a>{" "}
                  or DM us{" "}
                  <a href="https://instagram.com/andreaslanidis" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                    @andreaslanidis
                  </a>{" "}
                  on Instagram.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-3">Privacy Policy</h2>
                <p className="mb-4">
                  Andre Aslanidis™ values your privacy. We follow the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth), governing how we handle your personal information.
                </p>

                <p className="mb-2 font-display">Personal Information:</p>
                <p className="mb-4">
                  We collect names, addresses, emails, and social media handles to provide services, marketing, and communication. You can opt out of our mailing lists anytime.
                </p>

                <p className="mb-2 font-display">Sensitive Information:</p>
                <p className="mb-4">
                  Sensitive information, like racial or political data, will only be used with your consent or as required by law.
                </p>

                <p className="mb-2 font-display">Third Parties & Disclosure:</p>
                <p className="mb-4">
                  We may share your information with third parties only when necessary or with your consent.
                </p>

                <p className="mb-2 font-display">Security:</p>
                <p className="mb-4">
                  We securely store your personal data and will retain it for at least 7 years. You may request access to or updates to your information by contacting us.
                </p>

                <p className="text-muted-foreground">
                  This policy may be updated and is available on our website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

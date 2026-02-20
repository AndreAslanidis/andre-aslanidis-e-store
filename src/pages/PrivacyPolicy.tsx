import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[800px] mx-auto px-4 md:px-10 py-12 md:py-16">
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              Privacy Policy
            </h1>

            <div className="space-y-6 font-body text-xs text-foreground leading-relaxed">
              <p>
                Andre Aslanidis™ values your privacy. We follow the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth), governing how we handle your personal information.
              </p>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">Personal Information:</h2>
                <p>
                  We collect names, addresses, emails, and social media handles to provide services, marketing, and communication. You can opt out of our mailing lists anytime.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">Sensitive Information:</h2>
                <p>
                  Sensitive information, like racial or political data, will only be used with your consent or as required by law.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">Third Parties & Disclosure:</h2>
                <p>
                  We may share your information with third parties only when necessary or with your consent.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">Security:</h2>
                <p>
                  We securely store your personal data and will retain it for at least 7 years. You may request access to or updates to your information by contacting us.
                </p>
              </div>

              <p className="text-muted-foreground">
                This policy may be updated and is available on our website.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

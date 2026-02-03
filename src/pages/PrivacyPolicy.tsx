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

            <div className="space-y-8 font-body text-xs text-foreground leading-relaxed">
              <div>
                <p className="mb-4">
                  This Privacy Policy describes how Andre Aslanidis™ (the "Site", "we", "us", or "our") collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from andreaslanidis.com (the "Site") or otherwise communicate with us (collectively, the "Services").
                </p>
                <p>
                  For purposes of this Privacy Policy, "you" and "your" means you as the user of the Services, whether you are a customer, website visitor, or another individual whose information we have collected pursuant to this Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Information We Collect</h2>
                <p className="mb-4">
                  We collect information about you directly from you and automatically through your use of our Site and Services.
                </p>
                <h3 className="font-display text-sm text-foreground mb-2">Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Name, email address, shipping and billing addresses</li>
                  <li>Payment information (processed securely through our payment providers)</li>
                  <li>Phone number (if provided)</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                <h3 className="font-display text-sm text-foreground mb-2">Information Collected Automatically</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Device information (browser type, operating system)</li>
                  <li>IP address and location data</li>
                  <li>Browsing behavior on our Site</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>To process and fulfill your orders</li>
                  <li>To communicate with you about your orders and inquiries</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To improve our Site and Services</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Sharing Your Information</h2>
                <p className="mb-4">
                  We may share your personal information with:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Service providers who assist in our operations (shipping, payment processing)</li>
                  <li>Analytics providers to help us understand Site usage</li>
                  <li>Law enforcement when required by law</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Your Rights</h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our practices, please contact us at:
                </p>
                <p className="mt-2">
                  Email: shop.andreaslanidis@gmail.com
                </p>
              </div>

              <div className="text-muted-foreground">
                <p>Last updated: February 2026</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

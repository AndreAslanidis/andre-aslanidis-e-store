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
                <h2 className="font-display text-lg text-foreground mb-4">Overview</h2>
                <p className="mb-4">
                  This website is operated by Andre Aslanidis™. Throughout the site, the terms "we", "us" and "our" refer to Andre Aslanidis™. Andre Aslanidis™ offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                </p>
                <p>
                  By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Online Store Terms</h2>
                <p className="mb-4">
                  By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
                </p>
                <p className="mb-4">
                  You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                </p>
                <p>
                  A breach or violation of any of the Terms will result in an immediate termination of your Services.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">General Conditions</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                  <li>You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.</li>
                  <li>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service without express written permission by us.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Accuracy of Information</h2>
                <p className="mb-4">
                  We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions.
                </p>
                <p>
                  This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Products or Services</h2>
                <p className="mb-4">
                  Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
                </p>
                <p className="mb-4">
                  We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
                </p>
                <p>
                  We reserve the right to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Modifications to the Service and Prices</h2>
                <p className="mb-4">
                  Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
                </p>
                <p>
                  We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Contact Information</h2>
                <p>
                  Questions about the Terms of Service should be sent to us at:
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

export default TermsOfService;

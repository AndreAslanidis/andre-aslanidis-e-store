import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[800px] mx-auto px-4 md:px-10 py-12 md:py-16">
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
              Shipping Policy
            </h1>

            <div className="space-y-6 font-body text-xs text-foreground leading-relaxed">
              <p>
                Thank you for choosing Andre Aslanidis™ for your fashion needs. We strive to provide you with the best shopping experience, including efficient and reliable shipping services. Please find below our shipping policy:
              </p>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">1. Shipping Locations:</h2>
                <p>
                  We currently offer shipping services within Australia and internationally. However, please note that international shipping may be subject to additional fees and customs duties.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">2. Processing Time:</h2>
                <p>
                  Once your order is placed, we will process it within 1-2 business days. Please note that during peak seasons or promotional periods, processing times may be slightly longer.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">3. Shipping Methods and Timeframes:</h2>
                <p className="mb-3">We offer the following shipping methods:</p>

                <p className="mb-1 font-display">a. Domestic Shipping (within Australia):</p>
                <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
                  <li>Standard Shipping: Estimated delivery time is 3-7 business days.</li>
                  <li>Express Shipping: Estimated delivery time is 1-3 business days.</li>
                </ul>

                <p className="mb-1 font-display">b. International Shipping:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Standard Shipping: Estimated delivery time varies depending on the destination, typically between 7-21 business days.</li>
                  <li>Express Shipping: Estimated delivery time is 3-5 business days.</li>
                </ul>

                <p className="mt-3 text-muted-foreground">
                  Please note that these timeframes are estimates and may vary due to unforeseen circumstances or delays beyond our control.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">4. Shipping Costs:</h2>
                <p>
                  Shipping costs will be calculated at checkout based on the destination and the selected shipping method. We offer competitive shipping rates to ensure affordability for our customers.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">5. Order Tracking:</h2>
                <p>
                  Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the progress of your shipment through our website or the designated courier's website.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">6. Delivery Issues:</h2>
                <p>
                  In the rare event of any delivery issues, such as lost or damaged packages, please contact our customer support team immediately. We will work diligently to resolve the issue and ensure your satisfaction.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">7. Customs and Duties:</h2>
                <p>
                  For international orders, please note that customs duties, taxes, or import fees may apply upon arrival in your country. These charges are the responsibility of the customer and are not included in the product or shipping costs.
                </p>
              </div>

              <div>
                <h2 className="font-display text-sm text-foreground mb-2">8. Returns and Exchanges:</h2>
                <p>
                  For information regarding our returns and exchanges policy, please refer to our dedicated policy page on our website.
                </p>
              </div>

              <p className="text-muted-foreground">
                We hope this shipping policy provides you with a clear understanding of our shipping procedures. If you have any further questions or require assistance, please do not hesitate to contact our customer support team.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;

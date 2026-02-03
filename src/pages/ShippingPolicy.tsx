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

            <div className="space-y-8 font-body text-xs text-foreground leading-relaxed">
              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Processing Time</h2>
                <p className="mb-4">
                  All orders are processed within 1-3 business days. Orders are not shipped or delivered on weekends or holidays.
                </p>
                <p>
                  If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Shipping Rates & Delivery Estimates</h2>
                <p className="mb-4">
                  Shipping charges for your order will be calculated and displayed at checkout.
                </p>
                <div className="border border-border p-4 mb-4">
                  <h3 className="font-display text-sm text-foreground mb-3">Domestic Shipping (Australia)</h3>
                  <ul className="space-y-2">
                    <li>Standard Shipping: 5-10 business days - $10 AUD</li>
                    <li>Express Shipping: 2-4 business days - $20 AUD</li>
                    <li>Free Standard Shipping on orders over $150 AUD</li>
                  </ul>
                </div>
                <div className="border border-border p-4">
                  <h3 className="font-display text-sm text-foreground mb-3">International Shipping</h3>
                  <ul className="space-y-2">
                    <li>Standard International: 10-20 business days - $25 AUD</li>
                    <li>Express International: 5-10 business days - $45 AUD</li>
                    <li>Free Standard International Shipping on orders over $250 AUD</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Shipment Confirmation & Order Tracking</h2>
                <p>
                  You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Customs, Duties and Taxes</h2>
                <p className="mb-4">
                  Andre Aslanidis™ is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Damages</h2>
                <p className="mb-4">
                  Andre Aslanidis™ is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim.
                </p>
                <p>
                  Please save all packaging materials and damaged goods before filing a claim.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Returns & Exchanges</h2>
                <p className="mb-4">
                  We accept returns within 30 days of delivery for unworn, unwashed items with original tags attached. Items must be in original condition.
                </p>
                <p>
                  For exchanges, please return the original item and place a new order for the desired item. Return shipping costs are the responsibility of the customer unless the item is defective.
                </p>
              </div>

              <div>
                <h2 className="font-display text-lg text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about shipping, please contact us at:
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

export default ShippingPolicy;

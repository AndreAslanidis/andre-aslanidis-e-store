import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";

const OrderSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-[600px] mx-auto px-4 md:px-10 py-20 text-center">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" strokeWidth={1} />
        <h1 className="font-display text-3xl text-foreground mb-4">Thank you for your order</h1>
        <p className="font-body text-sm text-muted-foreground mb-2">
          Your payment was successful and your order is being processed.
        </p>
        <p className="font-body text-sm text-muted-foreground mb-10">
          A confirmation email will be sent to you shortly.
        </p>
        <Link
          to="/shop"
          className="inline-block h-12 px-8 border border-foreground text-foreground font-body text-xs tracking-wide hover:bg-foreground hover:text-background transition-all leading-[3rem]"
        >
          Continue shopping
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;

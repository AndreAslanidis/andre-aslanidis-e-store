import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      toast({
        title: "Order confirmed!",
        description: "Thank you for your purchase. You will receive an email confirmation shortly.",
      });
      clearCart();
    } else if (searchParams.get("canceled") === "true") {
      toast({
        title: "Order canceled",
        description: "Your order was canceled. Items remain in your cart.",
        variant: "destructive",
      });
    }
  }, [searchParams, toast, clearCart]);

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-checkout", {
        body: {
          items: items.map((item) => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            size: item.size,
            image: item.image,
          })),
          success_url: `${window.location.origin}/cart?success=true`,
          cancel_url: `${window.location.origin}/cart?canceled=true`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout failed",
        description: "There was an error processing your checkout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12">
            {/* Page Title */}
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              Your cart
            </h1>

            {items.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Your cart is currently empty.
                </p>
                <Link
                  to="/shop"
                  className="inline-flex h-12 px-8 items-center justify-center bg-primary text-primary-foreground font-body text-xs tracking-wide hover:opacity-85 transition-opacity"
                >
                  Continue shopping
                </Link>
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  {/* Header Row */}
                  <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-border">
                    <div className="col-span-6">
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wide">Product</span>
                    </div>
                    <div className="col-span-3 text-center">
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wide">Quantity</span>
                    </div>
                    <div className="col-span-3 text-right">
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-wide">Total</span>
                    </div>
                  </div>

                  {/* Cart Items List */}
                  <div className="divide-y divide-border">
                    {items.map((item) => (
                      <div 
                        key={`${item.id}-${item.size}`} 
                        className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                      >
                        {/* Product Info */}
                        <div className="md:col-span-6 flex gap-4">
                          <div className="w-24 h-24 bg-secondary overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link 
                              to={`/products/${item.id}`}
                              className="font-body text-sm text-foreground hover:opacity-70 transition-opacity"
                            >
                              {item.name}
                            </Link>
                            <p className="font-body text-xs text-muted-foreground mt-1">
                              ${item.price.toFixed(2)} AUD
                            </p>
                            <p className="font-body text-xs text-muted-foreground mt-1">
                              Size: {item.size}
                            </p>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="md:col-span-3 flex items-center justify-start md:justify-center gap-3">
                          <div className="inline-flex items-center border border-border">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-12 text-center font-body text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="p-2 hover:opacity-70 transition-opacity"
                          >
                            <Trash2 className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>

                        {/* Total */}
                        <div className="md:col-span-3 text-left md:text-right">
                          <span className="font-body text-sm text-foreground">
                            ${(item.price * item.quantity).toFixed(2)} AUD
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-secondary p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-body text-sm text-foreground">Subtotal</span>
                      <span className="font-body text-sm text-foreground">${totalPrice.toFixed(2)} AUD</span>
                    </div>
                    <p className="font-body text-xs text-muted-foreground mb-6">
                      Taxes and shipping calculated at checkout
                    </p>
                    <button 
                      onClick={handleCheckout}
                      disabled={loading}
                      className="w-full h-12 bg-primary text-primary-foreground font-body text-xs tracking-wide hover:opacity-85 transition-opacity mb-3 disabled:opacity-50"
                    >
                      {loading ? "Processing..." : "Check out"}
                    </button>
                    <button 
                      onClick={handleCheckout}
                      disabled={loading}
                      className="w-full h-12 bg-[#5A31F4] text-white font-body text-xs tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      Buy now with{" "}
                      <span className="font-bold italic">Shop</span>
                      <span className="font-bold">Pay</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;

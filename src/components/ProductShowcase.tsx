import { useState } from "react";
import { Minus, Plus, Check } from "lucide-react";
import heroImage from "@/assets/hoodie-hero.jpg";

const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductShowcase = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="product" className="relative bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Featured Drop
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            The Signature Piece
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Product Image */}
          <div className="relative group">
            <div className="aspect-[4/5] bg-charcoal overflow-hidden">
              <img
                src={heroImage}
                alt="Andre Aslanidis Reflective Embroidered Hoodie in Nardo Grey"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Reflective badge */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-background/90 backdrop-blur-sm border border-border">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Reflective Details
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-32">
            {/* Product Title */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
                Andre Aslanidis™
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
                Reflective Embroidered Hoodie
              </h3>
              <p className="text-xl text-foreground">
                $285.00 <span className="text-xs text-muted-foreground ml-2">AUD</span>
              </p>
            </div>

            {/* Product Description */}
            <div className="mb-8">
              <p className="text-muted-foreground text-sm leading-relaxed">
                A commanding presence in Nardo Grey. Crafted from ultra-thick 470 GSM 
                French Terry cotton, this statement hoodie features reflective 3D "٢٠٠٣" 
                embroidery on the chest and an oversized reflective AA logo across the back. 
                Designed for day presence and night impact.
              </p>
            </div>

            {/* Color */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Colour — Nardo Grey
              </p>
              <div className="w-8 h-8 rounded-full bg-nardo-grey border-2 border-foreground" />
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Select Size
              </p>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 border text-sm transition-all duration-300 ${
                      selectedSize === size
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Quantity
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border border-border flex items-center justify-center hover:border-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart / Buy Now */}
            <div className="flex flex-col gap-4 mb-10">
              <button className="btn-luxury-filled w-full py-5">
                Add to Cart
              </button>
              <button className="btn-luxury w-full py-5">
                <span>Buy Now</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-silver" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground">Premium Materials</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-silver" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground">Limited Production</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-silver" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground">Worldwide Shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-silver" strokeWidth={1.5} />
                <span className="text-xs text-muted-foreground">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

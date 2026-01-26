import { useState } from "react";
import ProductGallery from "./ProductGallery";

const sizes = ["S", "M", "L", "XL", "XXL"];

const ProductShowcase = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <section id="product" className="bg-background border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <ProductGallery />

          {/* Product Info */}
          <div className="lg:sticky lg:top-24">
            {/* Product Title */}
            <div className="mb-6">
              <p className="font-body text-xs text-muted-foreground mb-2">
                Andre Aslanidis™
              </p>
              <h1 className="font-display text-xl md:text-2xl text-foreground mb-3">
                '٢٠٠٣' Nardo Grey Hoodie
              </h1>
              <p className="font-body text-sm text-foreground">
                $285.00 AUD
              </p>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-6" />

            {/* Size Selection */}
            <div className="mb-6">
              <p className="font-body text-xs text-foreground mb-3">
                Size
              </p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-10 px-4 font-body text-xs border transition-all duration-200 ${
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
            <div className="mb-6">
              <p className="font-body text-xs text-foreground mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center font-body text-foreground hover:bg-secondary transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center font-body text-sm text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center font-body text-foreground hover:bg-secondary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button className="w-full h-12 bg-primary text-primary-foreground font-body text-xs tracking-wide hover:opacity-85 transition-opacity mb-3">
              Add to cart
            </button>

            {/* Buy Now */}
            <button className="w-full h-12 border border-foreground text-foreground font-body text-xs tracking-wide hover:bg-foreground hover:text-background transition-all mb-6">
              Buy it now
            </button>

            {/* Product Description */}
            <div className="pt-6 border-t border-border">
              <p className="font-body text-xs text-foreground leading-relaxed mb-4">
                A commanding presence in Nardo Grey. Crafted from ultra-thick 470 GSM 
                French Terry cotton, this statement hoodie features reflective 3D "٢٠٠٣" 
                embroidery on the chest and an oversized reflective AA logo across the back.
              </p>
              <ul className="font-body text-xs text-foreground space-y-2">
                <li>• 470 GSM French Terry Cotton</li>
                <li>• Reflective 3D Embroidery</li>
                <li>• Oversized Luxury Fit</li>
                <li>• Ribbed Cuffs and Hem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

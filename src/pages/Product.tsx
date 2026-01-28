import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hoodieFront from "@/assets/hoodie-front.png";
import hoodieBack from "@/assets/hoodie-back.png";
import hoodieDetail from "@/assets/hoodie-detail.jpg";
import hoodieLifestyle from "@/assets/hoodie-lifestyle.jpg";

const sizes = ["XS", "S", "M", "L", "XL"];

const images = [
  { src: hoodieFront, alt: "Hoodie front view" },
  { src: hoodieBack, alt: "Hoodie back view with AA logo" },
  { src: hoodieDetail, alt: "Reflective embroidery detail" },
  { src: hoodieLifestyle, alt: "Lifestyle shot" },
];

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<string>("XS");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12">
            {/* Skip to product info link */}
            <Link 
              to="#product-info" 
              className="font-body text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors mb-4 inline-block"
            >
              Skip to product information
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Product Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="aspect-square bg-secondary overflow-hidden">
                  <img
                    src={images[selectedImage].src}
                    alt={images[selectedImage].alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Image Counter */}
                <div className="text-center font-body text-xs text-muted-foreground">
                  {selectedImage + 1} / of {images.length}
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square bg-secondary overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? "border-foreground" 
                          : "border-transparent hover:border-muted-foreground"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div id="product-info" className="lg:sticky lg:top-24">
                {/* Brand Name */}
                <p className="font-body text-[10px] tracking-widest text-muted-foreground uppercase mb-2">
                  ANDRE ASLANIDIS™
                </p>

                {/* Product Title */}
                <h1 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  '٢٠٠٣' Nardo Grey Hoodie
                </h1>

                {/* Price */}
                <p className="font-body text-sm text-foreground mb-2">
                  $100.00 AUD
                </p>

                {/* Shipping Note */}
                <p className="font-body text-xs text-muted-foreground mb-6">
                  <Link to="/policies/shipping" className="underline underline-offset-4 hover:text-foreground transition-colors">
                    Shipping
                  </Link>
                  {" "}calculated at checkout.
                </p>

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
                        className={`min-w-[48px] h-10 px-4 font-body text-xs border transition-all duration-200 rounded-full ${
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
                  <div className="inline-flex items-center border border-border rounded-none">
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

                {/* Add to Cart Button */}
                <button className="w-full h-12 border border-foreground text-foreground font-body text-xs tracking-wide hover:bg-foreground hover:text-background transition-all mb-3">
                  Add to cart
                </button>

                {/* Buy Now Button */}
                <button className="w-full h-12 bg-[#5A31F4] text-white font-body text-xs tracking-wide hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-3">
                  Buy now with{" "}
                  <span className="font-bold italic">Shop</span>
                  <span className="font-bold">Pay</span>
                </button>

                {/* More Payment Options */}
                <p className="font-body text-xs text-center underline underline-offset-4 text-foreground hover:opacity-70 transition-opacity cursor-pointer mb-8">
                  More payment options
                </p>

                {/* Product Description */}
                <div className="pt-6 border-t border-border">
                  <p className="font-body text-xs text-foreground leading-relaxed mb-4">
                    Elevate your streetwear collection with the Andre Aslanidis™ Reflective Embroidered Hoodie, a premium blend of luxury and urban edge. Crafted from ultra-thick 470 GSM French Terry cotton, this hoodie offers superior comfort and durability. Its standout feature is the intricate 3D reflective embroidery on the chest, delivering a bold statement whether day or night. The oversized AA reflective logo on the back adds to the hoodie's unique flair, catching the light and attention in every setting.
                  </p>
                  <p className="font-body text-xs text-foreground leading-relaxed mb-6">
                    Designed for those who appreciate both style and substance, the ribbed cuffs and hem provide a snug fit, while the soft cotton ensures all-day comfort. Available in the sleek Nardo Grey colour-way, this hoodie embodies sophistication and street style in equal measure.
                  </p>

                  <p className="font-body text-xs text-foreground font-bold mb-2">Key Features:</p>
                  <ul className="font-body text-xs text-foreground space-y-1 mb-6">
                    <li><strong>470 GSM French Terry Cotton:</strong> Thick, high-quality fabric for comfort and durability.</li>
                    <li><strong>Reflective 3D Embroidery:</strong> Reflective "٢٠٠٣" on the chest for a bold, striking look.</li>
                    <li><strong>Oversized Reflective Back Logo:</strong> Eye-catching reflective AA logo for standout style.</li>
                    <li><strong>Ribbed Cuffs and Hem:</strong> Snug fit for a polished look.</li>
                    <li><strong>Pouch Pocket:</strong> Convenient and stylish front pocket.</li>
                  </ul>

                  <p className="font-body text-xs text-foreground font-bold mb-2">Fabric Composition:</p>
                  <p className="font-body text-xs text-foreground mb-1"><strong>Body:</strong> 100% Cotton (470 GSM)</p>
                  <p className="font-body text-xs text-foreground mb-6"><strong>Ribbing:</strong> 95% Cotton, 5% Elastane</p>

                  <p className="font-body text-xs text-foreground font-bold mb-2">Care Instructions:</p>
                  <p className="font-body text-xs text-foreground">
                    Machine wash cold, inside out. Do not bleach. Hang dry for longevity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;

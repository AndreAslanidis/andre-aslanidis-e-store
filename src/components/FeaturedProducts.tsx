import { Link } from "react-router-dom";
import hoodieFront from "@/assets/hoodie-front.png";

const FeaturedProducts = () => {
  return (
    <section id="collection" className="bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        {/* Section Header */}
        <h2 className="font-display text-lg md:text-xl text-foreground mb-8 md:mb-10">
          Featured products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Product Card */}
          <Link to="/products/nardo-grey-hoodie" className="group block">
            <div className="aspect-square bg-secondary overflow-hidden mb-3">
              <img
                src={hoodieFront}
                alt="'٢٠٠٣' Nardo Grey Hoodie"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-body text-xs text-foreground mb-1">
              '٢٠٠٣' Nardo Grey Hoodie
            </h3>
            <p className="font-body text-xs text-muted-foreground mb-1">
              Andre Aslanidis™
            </p>
            <p className="font-body text-xs text-foreground">
              $100.00 AUD
            </p>
          </Link>

          {/* Duplicate product for display */}
          <Link to="/products/nardo-grey-hoodie" className="group block">
            <div className="aspect-square bg-secondary overflow-hidden mb-3">
              <img
                src={hoodieFront}
                alt="'٢٠٠٣' Nardo Grey Hoodie"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-body text-xs text-foreground mb-1">
              '٢٠٠٣' Nardo Grey Hoodie
            </h3>
            <p className="font-body text-xs text-muted-foreground mb-1">
              Andre Aslanidis™
            </p>
            <p className="font-body text-xs text-foreground">
              $100.00 AUD
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

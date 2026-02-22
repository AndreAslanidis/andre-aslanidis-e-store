import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hoodieFront from "@/assets/hoodie-front-white.png";

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-background">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12">
            {/* Page Title */}
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              Products
            </h1>

            {/* Filters Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border">
              <div className="flex items-center gap-4">
                <span className="font-body text-xs text-muted-foreground">Filter:</span>
                <button className="font-body text-xs text-foreground flex items-center gap-1 hover:opacity-70 transition-opacity">
                  Availability
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="font-body text-xs text-foreground flex items-center gap-1 hover:opacity-70 transition-opacity">
                  Price
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-body text-xs text-muted-foreground">Sort by:</span>
                <button className="font-body text-xs text-foreground flex items-center gap-1 hover:opacity-70 transition-opacity">
                  Alphabetically, A-Z
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <span className="font-body text-xs text-muted-foreground">1 product</span>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Product Card */}
              <Link to="/products/nardo-grey-hoodie" className="group block">
                <div className="aspect-square bg-secondary overflow-hidden mb-3">
                  <img
                    src={hoodieFront}
                    alt="'٢٠٠٣' Nardo Grey Hoodie"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-body text-xs text-foreground mb-1">
                  '٢٠٠٣' Nardo Grey Hoodie
                </h3>
                <p className="font-body text-xs text-foreground">
                  $100.00 AUD
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

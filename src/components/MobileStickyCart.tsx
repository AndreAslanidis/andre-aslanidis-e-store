import { useState, useEffect } from "react";

const MobileStickyCart = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background border-t border-border p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-body text-xs text-foreground">'٢٠٠٣' Nardo Grey Hoodie</p>
          <p className="font-body text-xs text-muted-foreground">$285.00 AUD</p>
        </div>
        <button className="px-6 py-3 bg-primary text-primary-foreground font-body text-xs tracking-wide hover:opacity-85 transition-opacity">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MobileStickyCart;

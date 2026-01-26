import { useState, useEffect } from "react";

const MobileStickyCart = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      setIsVisible(scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-foreground">Reflective Hoodie</p>
          <p className="text-sm text-muted-foreground">$285.00 AUD</p>
        </div>
        <button className="btn-luxury-filled px-6 py-3 text-xs">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MobileStickyCart;

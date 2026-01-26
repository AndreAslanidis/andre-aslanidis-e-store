import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex flex-col items-start">
            <span className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground">
              Andre Aslanidis
            </span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mt-0.5">
              Elegance Redefined
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <a 
              href="#collection" 
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Collection
            </a>
            <a 
              href="#product" 
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Shop
            </a>
            <a 
              href="#contact" 
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <button className="relative group">
              <ShoppingBag className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-foreground text-background text-[10px] flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              ) : (
                <Menu className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border">
          <nav className="flex flex-col py-8 px-6">
            <a 
              href="#collection" 
              className="py-4 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Collection
            </a>
            <a 
              href="#product" 
              className="py-4 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#contact" 
              className="py-4 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

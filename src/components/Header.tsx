import { useState } from "react";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="font-body text-xs tracking-wide text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Home
            </a>
            <a 
              href="#product" 
              className="font-body text-xs tracking-wide text-foreground hover:opacity-70 transition-opacity"
            >
              Shop
            </a>
            <a 
              href="#faq" 
              className="font-body text-xs tracking-wide text-foreground hover:opacity-70 transition-opacity"
            >
              FAQ's
            </a>
            <a 
              href="#contact" 
              className="font-body text-xs tracking-wide text-foreground hover:opacity-70 transition-opacity"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            )}
          </button>

          {/* Center Logo */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-display text-lg md:text-xl italic text-foreground tracking-wide">
              Andre Aslanidis™
            </span>
          </a>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <button className="hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </button>
            <button className="hidden md:block hover:opacity-70 transition-opacity">
              <User className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </button>
            <button className="relative hover:opacity-70 transition-opacity">
              <ShoppingBag className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
          <nav className="flex flex-col py-6 px-4">
            <a 
              href="#" 
              className="py-3 font-body text-sm text-foreground underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#product" 
              className="py-3 font-body text-sm text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a 
              href="#faq" 
              className="py-3 font-body text-sm text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ's
            </a>
            <a 
              href="#contact" 
              className="py-3 font-body text-sm text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

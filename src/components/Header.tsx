import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { openCart, totalItems } = useCart();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path === "/shop" && (location.pathname === "/shop" || location.pathname === "/collections/all" || location.pathname.startsWith("/products"))) return true;
    if (path === "/faqs" && (location.pathname === "/faqs" || location.pathname === "/pages/faqs")) return true;
    if (path === "/contact" && (location.pathname === "/contact" || location.pathname === "/pages/contact")) return true;
    return false;
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-background border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-body text-xs tracking-wide text-foreground hover:opacity-70 transition-opacity ${
                isActive("/") ? "underline underline-offset-4" : ""
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`font-body text-xs tracking-wide text-foreground hover:opacity-70 transition-opacity ${
                isActive("/shop") ? "underline underline-offset-4" : ""
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/faqs" 
              className={`font-body text-xs tracking-wide text-foreground hover:opacity-70 transition-opacity ${
                isActive("/faqs") ? "underline underline-offset-4" : ""
              }`}
            >
              FAQ's
            </Link>
            <Link 
              to="/contact" 
              className={`font-body text-xs tracking-wide text-foreground hover:opacity-70 transition-opacity ${
                isActive("/contact") ? "underline underline-offset-4" : ""
              }`}
            >
              Contact Us
            </Link>
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
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-display text-lg md:text-xl italic text-foreground tracking-wide">
              Andre Aslanidis™
            </span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            <button className="hover:opacity-70 transition-opacity">
              <Search className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </button>
            <button className="hidden md:block hover:opacity-70 transition-opacity">
              <User className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </button>
            <button 
              onClick={openCart}
              className="relative hover:opacity-70 transition-opacity"
            >
              <ShoppingBag className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-foreground text-background text-[10px] font-body flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border z-40">
          <nav className="flex flex-col py-6 px-4">
            <Link 
              to="/" 
              className={`py-3 font-body text-sm text-foreground ${isActive("/") ? "underline underline-offset-4" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`py-3 font-body text-sm text-foreground ${isActive("/shop") ? "underline underline-offset-4" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              to="/faqs" 
              className={`py-3 font-body text-sm text-foreground ${isActive("/faqs") ? "underline underline-offset-4" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ's
            </Link>
            <Link 
              to="/contact" 
              className={`py-3 font-body text-sm text-foreground ${isActive("/contact") ? "underline underline-offset-4" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

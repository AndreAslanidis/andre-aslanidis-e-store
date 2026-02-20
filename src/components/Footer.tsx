import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer>
      {/* Newsletter Section - Dark Background */}
      <div className="bg-charcoal text-ivory">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-display text-sm text-ivory mb-4">Subscribe to our newsletter</h3>
              <form onSubmit={handleSubscribe} className="flex gap-0 max-w-sm">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 flex-1 border-ivory/30 bg-transparent font-body text-xs text-ivory placeholder:text-ivory/60 rounded-none focus-visible:ring-1 focus-visible:ring-ivory"
                />
                <button 
                  type="submit"
                  className="h-10 w-10 flex items-center justify-center border border-l-0 border-ivory/30 hover:bg-ivory/10 transition-colors"
                >
                  <svg className="w-4 h-4 text-ivory" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/andreaslanidis/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ivory hover:opacity-70 transition-opacity"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods & Copyright */}
      <div className="bg-charcoal border-t border-ivory/10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright & Links */}
            <div className="flex flex-wrap items-center gap-2 text-center md:text-left">
              <span className="font-body text-[10px] text-ivory/60">
                © {currentYear}, Andre Aslanidis™
              </span>
              <span className="font-body text-[10px] text-ivory/60">·</span>
              <Link to="/policies/privacy" className="font-body text-[10px] text-ivory/60 hover:text-ivory transition-colors">
                Privacy policy
              </Link>
              <span className="font-body text-[10px] text-ivory/60">·</span>
              <Link to="/policies/terms" className="font-body text-[10px] text-ivory/60 hover:text-ivory transition-colors">
                Terms of service
              </Link>
              <span className="font-body text-[10px] text-ivory/60">·</span>
              <Link to="/policies/shipping" className="font-body text-[10px] text-ivory/60 hover:text-ivory transition-colors">
                Shipping policy
              </Link>
              <span className="font-body text-[10px] text-ivory/60">·</span>
              <Link to="/contact" className="font-body text-[10px] text-ivory/60 hover:text-ivory transition-colors">
                Contact information
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

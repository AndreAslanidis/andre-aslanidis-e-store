const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="font-display text-xl font-light text-foreground">
                Andre Aslanidis
              </span>
              <span className="text-muted-foreground align-super text-xs ml-1">™</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Refined streetwear for those who value craftsmanship, weight, and presence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Navigate
            </p>
            <nav className="space-y-3">
              <a 
                href="#collection" 
                className="block text-sm text-foreground hover:text-silver transition-colors"
              >
                Collection
              </a>
              <a 
                href="#product" 
                className="block text-sm text-foreground hover:text-silver transition-colors"
              >
                Shop
              </a>
              <a 
                href="#contact" 
                className="block text-sm text-foreground hover:text-silver transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Legal
            </p>
            <nav className="space-y-3">
              <a 
                href="#" 
                className="block text-sm text-foreground hover:text-silver transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="block text-sm text-foreground hover:text-silver transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="block text-sm text-foreground hover:text-silver transition-colors"
              >
                Shipping & Returns
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Andre Aslanidis™. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground italic font-display">
            Elegance Redefined
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8">
        {/* Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-body text-xs text-foreground mb-4">Quick links</h3>
            <nav className="space-y-2">
              <a href="#" className="block font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Search
              </a>
            </nav>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-body text-xs text-foreground mb-4">Info</h3>
            <nav className="space-y-2">
              <a href="#contact" className="block font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Our Mission */}
          <div className="col-span-2">
            <h3 className="font-body text-xs text-foreground mb-4">Our mission</h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              Refined streetwear for those who value craftsmanship, weight, and presence.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
            <p className="font-body text-xs text-muted-foreground">
              © {currentYear}, Andre Aslanidis™
            </p>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Powered by Shopify
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy policy
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-charcoal" />
      
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-silver/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Trademark */}
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8 luxury-fade-in opacity-0 stagger-1">
          Est. 2003
        </p>
        
        {/* Main Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 luxury-slide-up opacity-0 stagger-2">
          Andre Aslanidis
          <span className="text-muted-foreground align-super text-2xl md:text-3xl ml-2">™</span>
        </h1>
        
        {/* Tagline */}
        <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic text-silver mb-10 luxury-slide-up opacity-0 stagger-3">
          Elegance Redefined
        </p>
        
        {/* Brand Statement */}
        <p className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed luxury-fade-in opacity-0 stagger-4">
          Elevate your style with our exclusive range of luxury clothing, where sophistication meets unparalleled craftsmanship.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 luxury-fade-in opacity-0 stagger-5">
          <a href="#product" className="btn-luxury-filled">
            Shop Now
          </a>
          <a href="#collection" className="btn-luxury">
            <span>Explore Collection</span>
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 luxury-fade-in opacity-0" style={{ animationDelay: '1.5s' }}>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" strokeWidth={1.5} />
      </div>
    </section>
  );
};

export default Hero;

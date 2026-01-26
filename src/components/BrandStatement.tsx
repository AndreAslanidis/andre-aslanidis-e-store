const BrandStatement = () => {
  return (
    <section id="collection" className="relative bg-charcoal">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative line */}
          <div className="w-px h-20 bg-border mx-auto mb-16" />
          
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8">
            The Philosophy
          </p>
          
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed mb-8">
            "Refined streetwear for those who value{" "}
            <em className="text-silver">craftsmanship</em>,{" "}
            <em className="text-silver">weight</em>, and{" "}
            <em className="text-silver">presence</em>."
          </blockquote>
          
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Every piece is designed to feel substantial, intentional, and rare. 
            We don't follow trends—we define them through meticulous attention to 
            detail and an unwavering commitment to quality.
          </p>
          
          {/* Decorative line */}
          <div className="w-px h-20 bg-border mx-auto mt-16" />
        </div>
      </div>
    </section>
  );
};

export default BrandStatement;

import { Sparkles, Layers, Maximize2, Shield } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "470 GSM French Terry Cotton",
    description: "Premium weight construction for comfort, durability, and commanding presence.",
  },
  {
    icon: Sparkles,
    title: "Reflective 3D Embroidery",
    description: "Bold chest detail featuring '٢٠٠٣' that catches light with every movement.",
  },
  {
    icon: Maximize2,
    title: "Oversized Reflective Back Logo",
    description: "Statement AA branding designed for visibility and impact after dark.",
  },
  {
    icon: Shield,
    title: "Ribbed Cuffs & Hem",
    description: "Structured finishing for a polished, refined silhouette.",
  },
];

const ProductDetails = () => {
  return (
    <section className="relative bg-charcoal">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Craftsmanship
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Key Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-background/50 border border-border hover:border-foreground/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-foreground/50 transition-colors">
                  <feature.icon className="w-5 h-5 text-silver" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fabric & Care */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="luxury-divider mb-16" />
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Fabric Composition */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Fabric Composition
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="text-foreground">Body</span>
                  <span className="text-muted-foreground text-sm">100% Cotton (470 GSM)</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-border">
                  <span className="text-foreground">Ribbing</span>
                  <span className="text-muted-foreground text-sm">95% Cotton, 5% Elastane</span>
                </div>
              </div>
            </div>

            {/* Care Instructions */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
                Care Instructions
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 py-4 border-b border-border">
                  <span className="w-2 h-2 bg-silver rounded-full" />
                  <span className="text-sm text-muted-foreground">Machine wash cold, inside out</span>
                </div>
                <div className="flex items-center gap-4 py-4 border-b border-border">
                  <span className="w-2 h-2 bg-silver rounded-full" />
                  <span className="text-sm text-muted-foreground">Do not bleach</span>
                </div>
                <div className="flex items-center gap-4 py-4 border-b border-border">
                  <span className="w-2 h-2 bg-silver rounded-full" />
                  <span className="text-sm text-muted-foreground">Hang dry for longevity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

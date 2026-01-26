const ProductDetails = () => {
  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-2xl">
          {/* Fabric Composition */}
          <div>
            <h3 className="font-display text-sm text-foreground mb-4">
              Fabric Composition
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between font-body text-xs">
                <span className="text-foreground">Body</span>
                <span className="text-muted-foreground">100% Cotton (470 GSM)</span>
              </div>
              <div className="flex justify-between font-body text-xs">
                <span className="text-foreground">Ribbing</span>
                <span className="text-muted-foreground">95% Cotton, 5% Elastane</span>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          <div>
            <h3 className="font-display text-sm text-foreground mb-4">
              Care Instructions
            </h3>
            <ul className="space-y-2 font-body text-xs text-muted-foreground">
              <li>• Machine wash cold, inside out</li>
              <li>• Do not bleach</li>
              <li>• Hang dry for longevity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

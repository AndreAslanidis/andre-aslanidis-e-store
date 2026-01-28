import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import lifestyle images
import hoodieFront from "@/assets/hoodie-front.png";
import hoodieBack from "@/assets/hoodie-back.png";
import hoodieLifestyle from "@/assets/hoodie-lifestyle.jpg";

const Hero = () => {
  return (
    <section className="relative bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12">
        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Text Content */}
          <div className="md:col-span-4 flex flex-col justify-center py-6 md:py-12">
            <h1 className="font-display text-xl md:text-2xl italic text-foreground mb-4 luxury-fade-in opacity-0 stagger-1">
              Elegance Redefined
            </h1>
            
            <p className="font-body text-xs md:text-sm text-foreground leading-relaxed mb-6 luxury-fade-in opacity-0 stagger-2">
              Elevate your style with our exclusive range of luxury clothing, where sophistication meets unparalleled craftsmanship.
            </p>
            
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 font-body text-xs text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity luxury-fade-in opacity-0 stagger-3"
            >
              Shop all
              <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Image Grid - Two portrait images */}
          <div className="md:col-span-8 grid grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-[3/4] overflow-hidden luxury-fade-in opacity-0 stagger-2">
              <img
                src={hoodieFront}
                alt="Andre Aslanidis hoodie - lifestyle shot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden luxury-fade-in opacity-0 stagger-3">
              <img
                src={hoodieBack}
                alt="Andre Aslanidis hoodie - detail shot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Full Width Images Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
          <div className="aspect-[4/5] overflow-hidden luxury-fade-in opacity-0 stagger-4">
            <img
              src={hoodieLifestyle}
              alt="Andre Aslanidis lifestyle"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden luxury-fade-in opacity-0 stagger-5">
            <img
              src={hoodieFront}
              alt="Andre Aslanidis collection"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="aspect-[4/5] overflow-hidden luxury-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <img
              src={hoodieBack}
              alt="Andre Aslanidis detail"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

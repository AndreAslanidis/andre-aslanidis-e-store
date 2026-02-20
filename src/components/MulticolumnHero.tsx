import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import lifestyleStairs2 from "@/assets/lifestyle-stairs-2.jpg";
import hoodieDetail2 from "@/assets/hoodie-detail-2.jpg";

const MulticolumnHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-center">
        {/* Left: Text column */}
        <div className="flex flex-col justify-center py-6 md:py-0">
          <h2 className="font-display text-lg md:text-xl italic text-foreground mb-3">
            Elegance Redefined
          </h2>
          <p className="font-body text-xs text-muted-foreground mb-6 leading-relaxed">
            Elevate your style with our exclusive range of luxury clothing, where sophistication meets unparalleled craftsmanship.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 font-body text-xs text-foreground hover:opacity-70 transition-opacity"
          >
            Shop all
            <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Middle: Stairs lifestyle photo */}
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={lifestyleStairs2}
            alt="Andre Aslanidis lifestyle"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Detail photo */}
        <div className="aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={hoodieDetail2}
            alt="Andre Aslanidis hoodie detail"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MulticolumnHero;

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import lifestyleGroup from "@/assets/lifestyle-group.jpg";
import lifestyleNight from "@/assets/lifestyle-night.jpg";
import lifestyleStairs from "@/assets/lifestyle-stairs.jpg";

const slides = [
{ src: lifestyleGroup, alt: "Andre Aslanidis group lifestyle", fit: "object-cover" },
{ src: lifestyleNight, alt: "Andre Aslanidis night lifestyle", fit: "object-cover", position: "object-[center_70%]" },
{ src: lifestyleStairs, alt: "Andre Aslanidis stairs lifestyle", fit: "object-cover" }];


const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="max-w-7xl mx-auto px-4 pt-6 md:px-[32px] py-[32px]">
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-secondary">
      {/* Slides */}
      {slides.map((slide, i) =>
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          loading="eager"
          decoding="async"
          className={`absolute inset-0 w-full h-full ${slide.fit} ${slide.position || ''} transition-opacity duration-700 ${
          i === current ? "opacity-100" : "opacity-0"}`
          } />

        )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation Arrows */}
      <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Previous slide">

        <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
      </button>
      <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Next slide">

        <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) =>
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
            i === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"}`
            }
            aria-label={`Go to slide ${i + 1}`} />

          )}
      </div>
      </div>
    </section>);

};

export default Hero;
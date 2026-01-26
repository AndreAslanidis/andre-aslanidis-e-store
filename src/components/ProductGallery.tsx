import { useState } from "react";
import hoodieFront from "@/assets/hoodie-front.png";
import hoodieBack from "@/assets/hoodie-back.png";
import hoodieDetail from "@/assets/hoodie-detail.jpg";
import hoodieLifestyle from "@/assets/hoodie-lifestyle.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: hoodieFront,
    alt: "Andre Aslanidis Reflective Embroidered Hoodie - Front View",
    label: "Front",
  },
  {
    src: hoodieBack,
    alt: "Andre Aslanidis Reflective Embroidered Hoodie - Back View with AA Logo",
    label: "Back",
  },
  {
    src: hoodieDetail,
    alt: "Close-up of reflective 3D embroidery detail",
    label: "Detail",
  },
  {
    src: hoodieLifestyle,
    alt: "Lifestyle shot - Urban night setting",
    label: "Lifestyle",
  },
];

const ProductGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative group">
      {/* Main Image */}
      <div className="aspect-[4/5] bg-charcoal overflow-hidden mb-4">
        <img
          src={galleryImages[selectedIndex].src}
          alt={galleryImages[selectedIndex].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Reflective badge */}
      <div className="absolute top-6 left-6 px-4 py-2 bg-background/90 backdrop-blur-sm border border-border">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Reflective Details
        </span>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-4 gap-3">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`relative aspect-square overflow-hidden transition-all duration-300 ${
              selectedIndex === index
                ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-black/80 to-transparent p-2">
              <span className="text-[9px] uppercase tracking-[0.2em] text-ivory">
                {image.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;

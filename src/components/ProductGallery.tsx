import { useState } from "react";
import hoodieFront from "@/assets/hoodie-front.png";
import hoodieBack from "@/assets/hoodie-back.png";
import hoodieDetail from "@/assets/hoodie-detail.jpg";
import hoodieLifestyle from "@/assets/hoodie-lifestyle.jpg";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: hoodieFront,
    alt: "Andre Aslanidis Reflective Embroidered Hoodie - Front View",
  },
  {
    src: hoodieBack,
    alt: "Andre Aslanidis Reflective Embroidered Hoodie - Back View with AA Logo",
  },
  {
    src: hoodieDetail,
    alt: "Close-up of reflective 3D embroidery detail",
  },
  {
    src: hoodieLifestyle,
    alt: "Lifestyle shot - Urban setting",
  },
];

const ProductGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnail Navigation */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-all duration-200 ${
              selectedIndex === index
                ? "ring-1 ring-foreground"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-square bg-secondary overflow-hidden">
        <img
          src={galleryImages[selectedIndex].src}
          alt={galleryImages[selectedIndex].alt}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductGallery;

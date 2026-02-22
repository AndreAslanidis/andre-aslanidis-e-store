import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import hoodieFront from "@/assets/hoodie-front-white.png";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock product data - in production this would come from an API
const products = [
  {
    id: "nardo-grey-hoodie",
    name: "'٢٠٠٣' Nardo Grey Hoodie",
    price: 100,
    image: hoodieFront,
  },
];

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(products);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute top-0 left-0 right-0 bg-background border-b border-border">
        <div className="max-w-[800px] mx-auto px-4 md:px-10 py-6">
          {/* Search Input */}
          <div className="flex items-center gap-4">
            <Search className="w-5 h-5 text-muted-foreground" strokeWidth={1.5} />
            <Input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
              className="flex-1 h-12 border-0 bg-transparent font-body text-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <button
              onClick={onClose}
              className="hover:opacity-70 transition-opacity"
            >
              <X className="w-5 h-5 text-foreground" strokeWidth={1.5} />
            </button>
          </div>

          {/* Results */}
          {query.trim() !== "" && (
            <div className="mt-6 pb-6">
              {results.length > 0 ? (
                <div className="space-y-4">
                  <p className="font-body text-xs text-muted-foreground">
                    {results.length} result{results.length !== 1 ? "s" : ""}
                  </p>
                  <div className="grid gap-4">
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 hover:bg-muted p-2 -mx-2 transition-colors"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-contain"
                        />
                        <div>
                          <p className="font-body text-xs text-foreground">
                            {product.name}
                          </p>
                          <p className="font-body text-xs text-muted-foreground">
                            ${product.price}.00 AUD
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="font-body text-xs text-muted-foreground">
                  No results found for "{query}"
                </p>
              )}
            </div>
          )}

          {/* Popular Searches */}
          {query.trim() === "" && (
            <div className="mt-6 pb-6">
              <p className="font-body text-xs text-muted-foreground mb-4">
                Popular searches
              </p>
              <div className="flex flex-wrap gap-2">
                {["Hoodie", "Essential", "Black"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 border border-border font-body text-xs text-foreground hover:bg-muted transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;

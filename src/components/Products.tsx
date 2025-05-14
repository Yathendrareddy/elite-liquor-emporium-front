
import { useState, useEffect } from "react";
import { products ,productTypes } from "@/data/products";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ProductsProps {
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

const Products = ({ onAddToCart, searchQuery }: ProductsProps) => {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  useEffect(() => {
    setLocalSearchQuery(searchQuery);
    filterProducts(searchQuery, selectedType);
  }, [searchQuery, selectedType]);

  const filterProducts = (query: string, type: string) => {
    let filtered = products;

    // Filter by type
    if (type !== "All") {
      filtered = filtered.filter((product) => product.type === type);
    }

    // Filter by search query
    if (query.trim() !== "") {
      const searchLower = query.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.type.toLowerCase().includes(searchLower)
      );
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterProducts(localSearchQuery, selectedType);
  };

  return (
    <section id="products" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium spirits from around the world.
            Filter by type or search for your favorite.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 mb-8">
          {/* Type Filter */}
          <div className="flex flex-wrap gap-2">
            {productTypes.map((type) => (
              <Button
                key={type}
                onClick={() => setSelectedType(type)}
                variant={selectedType === type ? "default" : "outline"}
                className="transition-all"
              >
                {type}
              </Button>
            ))}
          </div>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative max-w-xs w-full">
            <Input
              type="search"
              placeholder="Search products..."
              value={localSearchQuery}
              onChange={(e) => setLocalSearchQuery(e.target.value)}
              className="w-full"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try changing your search terms or filter selection.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

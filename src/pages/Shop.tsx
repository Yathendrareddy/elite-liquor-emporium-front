
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import ProductCard from "@/components/ProductCard";
import { products, productTypes } from "@/data/products";
import { CartItem, Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Search } from "lucide-react";

const Shop = () => {
  const { toast } = useToast();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeFromUrl = queryParams.get("type");

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>(typeFromUrl || "All");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  // Get min and max prices from products
  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));
  
  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
    
    // Initialize price range
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Apply filters when they change
  useEffect(() => {
    filterProducts(searchQuery, selectedType, priceRange);
  }, [searchQuery, selectedType, priceRange]);

  // Apply type filter from URL params
  useEffect(() => {
    if (typeFromUrl) {
      setSelectedType(typeFromUrl);
    }
  }, [typeFromUrl]);

  const filterProducts = (query: string, type: string, range: [number, number]) => {
    let filtered = products;

    // Filter by type
    if (type !== "All") {
      filtered = filtered.filter((product) => product.type === type);
    }

    // Filter by price
    filtered = filtered.filter(
      (product) => product.price >= range[0] && product.price <= range[1]
    );

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

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
      duration: 2000,
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterProducts(searchQuery, selectedType, priceRange);
  };

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onCartToggle={toggleCart} 
        cartItemsCount={cartItemsCount} 
        onSearch={setSearchQuery}
      />
      
      <main className="flex-1 pt-24 lg:pt-28">
        {/* Page Header */}
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Shop Our Collection</h1>
            <p className="text-muted-foreground">
              Browse our premium spirits and discover your next favorite bottle
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0 space-y-6">
              {/* Search */}
              <div>
                <h3 className="font-medium mb-2">Search</h3>
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pr-10"
                    />
                    <Button
                      type="submit"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Product Type Filter */}
              <div>
                <h3 className="font-medium mb-2">Product Type</h3>
                <div className="space-y-1">
                  {productTypes.map((type) => (
                    <Button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      variant={selectedType === type ? "default" : "ghost"}
                      className={`justify-start w-full ${
                        selectedType === type ? "" : "hover:bg-muted"
                      }`}
                      size="sm"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[minPrice, maxPrice]}
                    value={priceRange}
                    onValueChange={handlePriceRangeChange}
                    max={maxPrice}
                    min={minPrice}
                    step={1}
                    className="mb-6"
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <div>${Math.floor(priceRange[0])}</div>
                  <div>${Math.ceil(priceRange[1])}</div>
                </div>
              </div>
              
              {/* Reset Filters */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSelectedType("All");
                  setSearchQuery("");
                  setPriceRange([minPrice, maxPrice]);
                }}
              >
                Reset Filters
              </Button>
            </div>
            
            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts.length > 0 ? (
                <>
                  <p className="text-muted-foreground mb-4">
                    Showing {filteredProducts.length} products
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try changing your search terms or filter selection.
                  </p>
                  <Button 
                    onClick={() => {
                      setSelectedType("All");
                      setSearchQuery("");
                      setPriceRange([minPrice, maxPrice]);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Shop;

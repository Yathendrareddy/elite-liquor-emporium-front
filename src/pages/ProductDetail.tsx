
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { products } from "@/data/products";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus } from "lucide-react";
import ProductCarousel from "@/components/ProductCarousel";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // Find the product with the matching ID
  const product = products.find((p) => p.id === productId);

  // If product not found, handle gracefully
  useEffect(() => {
    if (!product) {
      navigate("/");
      toast({
        title: "Product not found",
        description: "We couldn't find the product you're looking for.",
        variant: "destructive",
      });
    } else {
      // Find related products of the same type, excluding current product
      const related = products
        .filter(
          (p) => p.type === product.type && p.id !== product.id
        )
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [product, navigate, toast, productId]);

  const handleAddToCart = () => {
    if (!product) return;
    
    // Store cart items in localStorage
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingItem = cartItems.find(
      (item: any) => item.product.id === product.id
    );
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ product, quantity });
    }
    
    localStorage.setItem("cart", JSON.stringify(cartItems));
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    });
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  if (!product) return null;

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-black/5 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.featured && (
              <Badge className="absolute top-4 right-4 bg-accent text-black">
                Featured
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <Badge variant="outline" className="mb-2">
                {product.type}
              </Badge>
              {product.country && (
                <span className="text-sm text-muted-foreground ml-2">
                  {product.country}
                </span>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              <div className="text-sm text-muted-foreground">
                {product.abv && <span>{product.abv}% ABV</span>}
                {product.volume && <span className="ml-2">{product.volume}</span>}
              </div>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg mb-8">
              <p className="text-lg mb-6">{product.description}</p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="h-12 w-12"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center text-lg">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(1)}
                    className="h-12 w-12"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  className="h-12 px-8 flex-1" 
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-green-500/10 text-green-600 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 text-primary p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span>Secure checkout with encrypted payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl md:text-3xl font-serif font-medium mb-8">
              You may also like
            </h2>
            <ProductCarousel products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

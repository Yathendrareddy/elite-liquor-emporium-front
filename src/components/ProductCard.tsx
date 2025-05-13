
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden h-full flex flex-col">
      <Link to={`/product/${product.id}`} className="relative block">
        <div className="relative h-60 overflow-hidden bg-black/5">
          <img 
            src={product.image} 
            alt={product.name} 
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {product.featured && (
            <Badge className="absolute top-2 right-2 bg-accent text-black">
              Featured
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white font-medium text-lg">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-4 flex-grow">
        <div className="mb-1">
          <Badge variant="outline" className="text-xs">
            {product.type}
          </Badge>
          {product.country && (
            <span className="text-xs text-muted-foreground ml-2">
              {product.country}
            </span>
          )}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-lg mt-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10 my-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <div className="text-xs text-muted-foreground">
            {product.abv && <span>{product.abv}% ABV</span>}
            {product.volume && <span className="ml-2">{product.volume}</span>}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 mt-auto">
        <Button 
          onClick={() => onAddToCart(product)} 
          className="w-full"
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

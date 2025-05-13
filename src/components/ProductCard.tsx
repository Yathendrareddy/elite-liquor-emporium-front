
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="product-card overflow-hidden">
      <div className="relative h-48 overflow-hidden bg-gray-100">
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
      </div>
      <CardContent className="p-4">
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
        <h3 className="font-medium text-lg mt-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">
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
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onAddToCart(product)} 
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

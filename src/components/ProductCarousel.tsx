
import React from "react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductCarouselProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

const ProductCarousel = ({ products, onAddToCart }: ProductCarouselProps) => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <AspectRatio ratio={1/1} className="bg-black/5 rounded-lg overflow-hidden">
                  <ProductCard product={product} onAddToCart={onAddToCart} />
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

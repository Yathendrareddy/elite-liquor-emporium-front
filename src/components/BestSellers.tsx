
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import ProductCarousel from "./ProductCarousel";

const BestSellers = () => {
  // Filter for bestseller products (for now, using featured products)
  const bestSellers = products.filter(p => p.featured || p.price > 50).slice(0, 8);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-3">
              Bestsellers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our most popular and sought-after products, loved by connoisseurs worldwide.
            </p>
          </div>
          <Link to="/shop" className="mt-4 md:mt-0">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>
        
        <ProductCarousel products={bestSellers} />
      </div>
    </section>
  );
};

export default BestSellers;

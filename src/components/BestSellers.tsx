
// import { Link } from "react-router-dom";
// import { products } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import ProductCarousel from "./ProductCarousel";

// const BestSellers = () => {
//   // Filter for bestseller products (for now, using featured products)
//   const bestSellers = products.filter(p => p.featured || p.price > 50).slice(0, 8);

//   return (
//     <section className="py-24 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-serif font-medium mb-3">
//               Bestsellers
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl">
//               Our most popular and sought-after products, loved by connoisseurs worldwide.
//             </p>
//           </div>
//           <Link to="/shop" className="mt-4 md:mt-0">
//             <Button variant="outline">View All Products</Button>
//           </Link>
//         </div>
        
//         <ProductCarousel products={bestSellers} />
//       </div>
//     </section>
//   );
// };

// export default BestSellers;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Define product type
type Product = {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
  abv: number;
  volume: string;
  country: string;
};

// Sample product data
const products: Product[] = [
  {
    id: "whiskey-1",
    name: "Basil Hayden",
    type: "Whiskey",
    price: 89.99,
    image: 'public/Images/Basil_Hayden.jpg',
    description: "Rich and complex single malt with notes of vanilla, dried fruits, and spice.",
    inStock: true,
    featured: true,
    abv: 43,
    volume: "750ml",
    country: "Scotland",
  },
  {
    id: "whiskey-2",
    name: "DonJulio",
    type: "Whiskey",
    price: 149.99,
    image: "public/Images/DonJulio.webp",
    description: "Award-winning bourbon with notes of caramel, vanilla, and oak.",
    inStock: true,
    abv: 45,
    volume: "750ml",
    country: "USA",
  },
  {
    id: "wine-1",
    name: "Japenese Whiskey",
    type: "Wine",
    price: 79.99,
    image: "public/Images/Japenese_Whiskey.jpeg",
    description: "Bold Napa Valley Cabernet with rich dark fruit flavors and soft tannins.",
    inStock: true,
    abv: 14.5,
    volume: "750ml",
    country: "USA",
  },
  {
    id: "wine-2",
    name: "2XO",
    type: "Wine",
    price: 59.99,
    image: "public/Images/2XO.jpeg",
    description: "Iconic champagne with perfect balance of power and finesse.",
    inStock: true,
    featured: true,
    abv: 12,
    volume: "750ml",
    country: "France",
  },
];

const BestSellers = () => {
  // Filter for bestseller products (featured or price > 50)
  const bestSellers = products.filter((p) => p.featured || p.price > 50).slice(0, 8);

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-3">Bestsellers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Our most popular and sought-after products, loved by connoisseurs worldwide.
            </p>
          </div>
          <Link to="/shop" className="mt-4 md:mt-0">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>

        {/* Grid Display Instead of Carousel */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {bestSellers.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{product.type} • {product.country}</p>
                <p className="text-sm">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;


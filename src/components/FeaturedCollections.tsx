
import { useState } from "react";
import { Link } from "react-router-dom";
import { products, productTypes } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const collections = [
  {
    id: "whiskey",
    title: "Premium Whiskeys",
    description: "Discover rare and exceptional whiskeys from around the world.",
    image: '/Images/blue_label.jpg',
    type: "Whiskey"
  },
  {
    id: "tequila",
    title: "Premium Tequilas",
    description: "Explore our curated selection of premium tequilas.",
    image: "/Images/Clase_Azul.avif", 
    type: "Tequila"
  },
  {
    id: "Vodka",
    title: "Fine Vodkas",
    description: "From vintage reds to celebratory champagnes, find the perfect wine.",
    image: "/Images/Absolute.jpg",
    type: "Vodka"
  }
];

const FeaturedCollections = () => {
  const [activeCollection, setActiveCollection] = useState(collections[0]);
  
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our carefully curated collections featuring premium spirits from around the world.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {collections.map((collection) => (
            <Button
              key={collection.id}
              onClick={() => setActiveCollection(collection)}
              variant={activeCollection.id === collection.id ? "default" : "outline"}
              className="text-base"
            >
              {collection.title}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            <img 
              src={activeCollection.image} 
              alt={activeCollection.title} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-20 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl md:text-3xl font-serif font-medium mb-2">
                {activeCollection.title}
              </h3>
              <p className="text-white/80 mb-4">
                {activeCollection.description}
              </p>
              <Link to={`/shop?type=${activeCollection.type}`}>
                <Button>Shop Collection</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products
              .filter(product => product.type === activeCollection.type)
              .slice(0, 4)
              .map(product => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-all">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">{product.name}</h4>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                      <Link to={`/product/${product.id}`}>
                        <Button variant="outline" size="sm">Details</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-black">
              View All Collections
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;

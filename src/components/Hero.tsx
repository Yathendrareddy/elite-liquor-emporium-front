
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://images.unsplash.com/photo-1519620454367-a8e8d144e8b6?q=80&w=3000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom'
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-accent/20 text-accent inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            Limited Time Offer
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            Discover <span className="text-accent">Premium</span> Spirits
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Curated collection of the world's finest spirits for connoisseurs and collectors.
            Exclusive bottles from legendary distilleries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-medium text-lg px-8">
                Shop Now
              </Button>
            </Link>
            <Link to="#collections">
              <Button size="lg" variant="outline" className="border-white/30 text-white backdrop-blur-sm hover:bg-white/10 text-lg px-8">
                View Collections
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-accent mb-1">150+</div>
              <div className="text-gray-400">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-accent mb-1">20+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-accent mb-1">500+</div>
              <div className="text-gray-400">Unique Bottles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

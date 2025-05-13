
import { Button } from "@/components/ui/button";
import { featuredProduct } from "@/data/products";

const Hero = () => {
  return (
    <section 
      className="pt-24 pb-10 md:pt-32 md:pb-16 px-4 bg-gradient-to-b from-neutral-900 to-wine-dark text-white relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=3000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 md:mb-6">
            Discover Premium Spirits
          </h1>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-gray-200">
            Curated collection of the finest liquors from around the world
          </p>
          <div className="bg-black/30 backdrop-blur-sm p-4 md:p-6 rounded-lg inline-block mb-8">
            <p className="text-xl md:text-2xl font-medium text-accent mb-2">Limited Time Offer</p>
            <p className="text-2xl md:text-3xl font-bold mb-3">Get 20% Off Premium Whiskeys This Weekend!</p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-medium">
              Shop Now
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm opacity-80">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Premium Selection</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

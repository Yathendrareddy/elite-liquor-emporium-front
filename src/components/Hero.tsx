
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   const slides = [
//     '/Images/hero5.webp',
//     '/Images/hero6.jpg',
//     '/Images/hero1.jpeg',
//     '/Images/hero2.jpeg',
//     '/Images/hero.jpg',
//   ];
//   return (
//     <section 
//        className="min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden flex items-center justify-center text-white text-center text-4xl"
//     >
//        {/* Inline Keyframes Style */}
//       <style>
//         {`
//           @keyframes fadeZoom {
//             0% { opacity: 0; transform: scale(1.1); }
//             5% { opacity: 1; transform: scale(1); }
//             20% { opacity: 1; transform: scale(1); }
//             25% { opacity: 0; transform: scale(1.1); }
//             100% { opacity: 0; transform: scale(1.1); }
//           }
//         `}
//       </style>

//       {/* Slideshow */}
//       <div className="absolute inset-0 z-0">
//         {slides.map((src, index) => (
//           <div
//             key={index}
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${src})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               animation: 'fadeZoom 20s infinite',
//               animationDelay: `${index * 4}s`,
//               opacity: 0,
//               transform: 'scale(1.1)',
//             }}
//           />
//         ))}
//       </div>
//       {/* Glass effect overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background/80 backdrop-blur-[2px]"></div>
      
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
//         <div className="absolute top-20 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="container mx-auto relative z-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <div className="bg-accent/20 text-accent inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
//             Limited Edition Collections
//           </div>
          
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
//             Discover <span className="text-accent italic">Exceptional</span> Spirits
//           </h1>
          
//           <p className="text-lg md:text-xl mb-8 text-gray-200 font-light">
//             Curated selection of the world's most prestigious spirits.
//             Rare finds and collector's bottles from legendary distilleries.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
//             <Link to="/shop">
//               <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-medium text-lg px-10 py-6">
//                 Shop Collection
//               </Button>
//             </Link>
//             <Link to="#collections">
//               <Button size="lg" variant="outline" className="border-white/30 text-white backdrop-blur-sm hover:bg-white/10 text-lg px-10 py-6">
//                 Explore Rarities
//               </Button>
//             </Link>
//           </div>
          
//           <div className="flex flex-wrap items-center justify-center gap-12 mt-16">
//             <div className="text-center">
//               <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">175+</div>
//               <div className="text-gray-400 uppercase tracking-wider text-xs">Premium Brands</div>
//             </div>
//             <div className="text-center">
//               <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">30+</div>
//               <div className="text-gray-400 uppercase tracking-wider text-xs">Countries</div>
//             </div>
//             <div className="text-center">
//               <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
//               <div className="text-gray-400 uppercase tracking-wider text-xs">Unique Bottles</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    '/Images/hero5.webp',
    '/Images/whiskey.avif',
    '/Images/hero1.jpeg',
    '/Images/hero2.jpeg',
    '/Images/hero.jpg',
  ];

  return (
    <section 
className="min-h-[90vh] pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden flex items-center justify-center text-white text-center text-4xl"    >
      {/* Inline Keyframes Style */}
      <style>
        {`
          @keyframes fadeZoom {
            0% { opacity: 0; transform: scale(1.1); }
            5% { opacity: 1; transform: scale(1); }
            20% { opacity: 1; transform: scale(1); }
            25% { opacity: 0; transform: scale(1.1); }
            100% { opacity: 0; transform: scale(1.1); }
          }
        `}
      </style>

            {/* Modified Slideshow with blur */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: 'fadeZoom 20s infinite',
              animationDelay: `${index * 4}s`,
              opacity: 0,
              transform: 'scale(1.1)',
              filter: 'blur(2px)', // Subtle blur effect
            }}
          />
        ))}
      </div>

      {/* Added backdrop blur overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-[1]"></div>


      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: 'fadeZoom 20s infinite',
              animationDelay: `${index * 4}s`,
              opacity: 0,
              transform: 'scale(1.1)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-accent/20 text-accent inline-block px-4 py-1 rounded-full text-sm font-medium mb-6">
            Limited Edition Collections
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            Discover <span className="text-accent italic">Exceptional</span> Spirits
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200 font-light">
            Curated selection of the world's most prestigious spirits.
            Rare finds and collector's bottles from legendary distilleries.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <Link to="/shop">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-medium text-lg px-10 py-6">
                Shop Collection
              </Button>
            </Link>
            <Link to="#collections">
              <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10 text-lg px-10 py-6">
                Explore Rarities
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-12 mt-16">
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">175+</div>
              <div className="text-black-400 uppercase tracking-wider text-xs">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">30+</div>
              <div className="text-black-400 uppercase tracking-wider text-xs">Countries</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-black-400 uppercase tracking-wider text-xs">Unique Bottles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

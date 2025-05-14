
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would handle newsletter signup here
    console.log("Newsletter signup submitted");
  };

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-serif font-bold flex items-center">
                <span className="text-primary mr-1">Liquor</span>
                <span>Tap</span>
              </h3>
            </Link>
            <p className="text-gray-400 mb-6">
              Premium spirits and liquors sourced from around the world.
              We pride ourselves on quality, selection, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-primary transition-colors">Shop All</Link>
              </li>
              <li>
                <Link to="#about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="#collections" className="hover:text-primary transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="#policies" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-gray-800 pb-2">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-3">
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>9291 S Sam Houston Pkwy E, Suite#300<br />Houston, Texas-77075</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <span>(346) 320-2046</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@eliteliquors.com" className="hover:text-primary transition-colors">
                  liquortap9291@gmail.com
                </a>
              </p>
            </address>
            
            <h3 className="text-lg font-medium mt-6 mb-2">Store Hours</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-medium mb-4 border-b border-gray-800 pb-2">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new arrivals, special offers, and exclusive events.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                required
                className="bg-gray-800 border-gray-700 focus:border-primary"
              />
              <Button type="submit" className="w-full hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
            
            <div className="mt-6 flex items-center text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Your information is secure and encrypted</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p id="about">
              Liquor Tap is committed to responsible drinking. 
              Please drink responsibly and ensure you are of legal drinking age in your location.
            </p>
            <p className="mt-2 md:mt-0">
              &copy; {currentYear} Liquor Tap. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 text-xs">
            <Link to="#terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#shipping" className="hover:text-primary transition-colors">Shipping Policy</Link>
            <Link to="#refund" className="hover:text-primary transition-colors">Refund Policy</Link>
            <Link to="#faq" className="hover:text-primary transition-colors">FAQ</Link>
          </div>
          
          {/* <div className="mt-4 flex justify-center md:justify-start gap-2">
            <img src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1717288747/visa_bgxd4g.svg" alt="Visa" className="h-8" />
            <img src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1717288747/mastercard_doeu27.svg" alt="Mastercard" className="h-8" />
            <img src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1717288747/amex_km7kuk.svg" alt="American Express" className="h-8" />
            <img src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1717288747/discover_jupfif.svg" alt="Discover" className="h-8" />
            <img src="https://res.cloudinary.com/dmgb7kvmn/image/upload/v1717288747/paypal_bq4gsu.svg" alt="PayPal" className="h-8" />
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

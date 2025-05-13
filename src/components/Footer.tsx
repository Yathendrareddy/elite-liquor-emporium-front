
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would handle newsletter signup here
    console.log("Newsletter signup submitted");
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Elite Liquors</h3>
            <p className="text-gray-300 mb-4">
              Premium spirits and liquors sourced from around the world.
              We pride ourselves on quality, selection, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Store Hours */}
          <div>
            <h3 className="text-lg font-medium mb-4">Store Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 6:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@eliteliquors.com</p>
            </address>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates, special offers, and more.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                required
                className="bg-gray-800 border-gray-700 focus:border-accent"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-gray-400 text-sm text-center">
          <p id="about">
            Elite Liquors is committed to responsible drinking. 
            Please drink responsibly and ensure you are of legal drinking age in your location.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Elite Liquors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuContent, NavigationMenuTrigger, NavigationMenuLink } from "@/components/ui/navigation-menu";

interface HeaderProps {
  onCartToggle: () => void;
  cartItemsCount: number;
  onSearch: (query: string) => void;
}

const Header = ({ onCartToggle, cartItemsCount, onSearch }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setShowSearch(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '#collections' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' }
  ];

  const isActive = (path: string) => {
    if (path.startsWith('#')) {
      return false;
    }
    return location.pathname === path;
  };

  return (
    
    // <header 
    //   className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    //     isScrolled || isMobileMenuOpen 
    //       ? 'bg-background/95 backdrop-blur-md shadow-md py-3' 
    //       : 'bg-transparent py-5'
    //   }`}
    // >

//     <header 
//   className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md py-4"
// >
<header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md h-16 md:h-20">
  <div className="container mx-auto px-4 h-full">
    <div className="flex items-center justify-between h-full">
      {/* Logo - Left side */}
      <div className="flex items-center">
        <Link to="/" className="text-2xl md:text-3xl font-serif font-bold flex items-center">
          <span className="text-accent mr-1">LIQUOR TAP</span>
        </Link>
      </div>
          

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link 
                      to={link.path} 
                      className={`nav-link text-base font-medium transition-colors hover:text-accent story-link ${
                        isActive(link.path) ? 'text-accent after:w-full' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {showSearch ? (
              <form onSubmit={handleSearchSubmit} className="relative animate-fade-in">
                <Input
                  type="search" 
                  placeholder="Search premium spirits..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-[250px] focus-within:w-[350px] transition-all duration-300 bg-background/80 backdrop-blur-sm"
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-0 top-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            ) : (
              <Button 
                onClick={() => setShowSearch(true)} 
                variant="ghost" 
                size="icon" 
                className="hover:text-accent"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            
            <Button 
              onClick={onCartToggle} 
              variant="ghost" 
              size="icon" 
              className="relative hover:text-accent transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button 
              onClick={onCartToggle} 
              variant="ghost" 
              size="icon" 
              className="relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-black text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            <Button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              variant="ghost" 
              size="icon"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 animate-fade-in">
            <form onSubmit={handleSearchSubmit} className="relative mb-6">
              <Input
                type="search" 
                placeholder="Search premium spirits..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`nav-link text-lg py-1 hover:text-accent transition-colors ${
                    isActive(link.path) ? 'text-accent font-medium' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

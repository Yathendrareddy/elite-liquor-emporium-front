
import { Product } from "../types";

export const products: Product[] = [
  {
    id: "whiskey-1",
    name: "Macallan 12 Year",
    type: "Whiskey",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1656087814271-bb46a21567e9?q=80&w=500",
    description: "Rich and complex single malt with notes of vanilla, dried fruits, and spice.",
    inStock: true,
    featured: true,
    abv: 43,
    volume: "750ml",
    country: "Scotland"
  },
  {
    id: "whiskey-2",
    name: "Buffalo Trace Bourbon",
    type: "Whiskey",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1674274342619-eba5eb0271b3?q=80&w=500",
    description: "Award-winning bourbon with notes of caramel, vanilla, and oak.",
    inStock: true,
    abv: 45,
    volume: "750ml",
    country: "USA"
  },
  {
    id: "whiskey-3",
    name: "Jameson Irish Whiskey",
    type: "Whiskey",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1607309844845-29e1595e22e2?q=80&w=500",
    description: "Smooth and versatile Irish whiskey with notes of vanilla and toasted wood.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "Ireland"
  },
  {
    id: "vodka-1",
    name: "Grey Goose",
    type: "Vodka",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1651169966431-4eef5077131a?q=80&w=500",
    description: "Premium French vodka, distilled from wheat for exceptional smoothness.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "France"
  },
  {
    id: "vodka-2",
    name: "Belvedere",
    type: "Vodka",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1660509465679-5a27686af edward193?q=80&w=500",
    description: "Luxury Polish vodka distilled from rye, known for its creamy mouthfeel.",
    inStock: true,
    featured: true,
    abv: 40,
    volume: "750ml",
    country: "Poland"
  },
  {
    id: "wine-1",
    name: "Caymus Cabernet Sauvignon",
    type: "Wine",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?q=80&w=500",
    description: "Bold Napa Valley Cabernet with rich dark fruit flavors and soft tannins.",
    inStock: true,
    abv: 14.5,
    volume: "750ml",
    country: "USA"
  },
  {
    id: "wine-2",
    name: "Veuve Clicquot Champagne",
    type: "Wine",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1594777455437-d381a30d40b3?q=80&w=500",
    description: "Iconic champagne with perfect balance of power and finesse.",
    inStock: true,
    featured: true,
    abv: 12,
    volume: "750ml",
    country: "France"
  },
  {
    id: "beer-1",
    name: "Sierra Nevada IPA Pack",
    type: "Beer",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1600213903598-25be92edab6a?q=80&w=500",
    description: "Craft beer variety pack featuring Sierra Nevada's signature IPAs.",
    inStock: true,
    abv: 7.2,
    volume: "6 x 12oz",
    country: "USA"
  },
  {
    id: "rum-1",
    name: "Diplomatico Reserva Exclusiva",
    type: "Rum",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1667113011844-42e9c9cec474?q=80&w=500",
    description: "Venezuelan dark rum with notes of caramel, orange peel, and cinnamon.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "Venezuela"
  },
  {
    id: "gin-1",
    name: "Hendrick's Gin",
    type: "Gin",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1605989993909-1045918620fe?q=80&w=500",
    description: "Scottish gin infused with cucumber and rose petals for a distinctive flavor.",
    inStock: true,
    abv: 44,
    volume: "750ml",
    country: "Scotland"
  },
  {
    id: "tequila-1",
    name: "Casamigos Blanco",
    type: "Tequila",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1544252890-c3defd5a8291?q=80&w=500",
    description: "Smooth, ultra-premium tequila with notes of citrus and vanilla.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "Mexico"
  },
  {
    id: "liqueur-1",
    name: "Baileys Irish Cream",
    type: "Liqueur",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1470338745628-171cf53de3a8?q=80&w=500",
    description: "Creamy liqueur blend of Irish whiskey and rich dairy cream.",
    inStock: true,
    abv: 17,
    volume: "750ml",
    country: "Ireland"
  }
];

export const productTypes: string[] = [
  "All", 
  "Whiskey", 
  "Vodka", 
  "Wine", 
  "Beer", 
  "Rum", 
  "Gin", 
  "Tequila", 
  "Liqueur"
];

export const featuredProduct = products.find(product => product.id === "whiskey-1") || products[0];

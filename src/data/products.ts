
import { Product } from "../types";

export const products: Product[] = [
  {
    id: "whiskey-1",
    name: "Macallan 12 Year",
    type: "Whiskey",
    price: 89.99,
    image: '/Images/macallan.jpg',
    description: "Rich and complex single malt with notes of vanilla, dried fruits, and spice.",
    inStock: true,
    featured: true,
    abv: 43,
    volume: "750ml",
    country: "Scotland"
  },
  {
    id: "whiskey-2",
    name: "Blantons",
    type: "Whiskey",
    price: 149.99,
    image: '/Images/Blantons.jpg',
    description: "Award-winning bourbon with notes of caramel, vanilla, and oak.",
    inStock: true,
    abv: 45,
    volume: "750ml",
    country: "USA"
  },
  {
    id: "whiskey-3",
    name: "Eagle Rare",
    type: "Whiskey",
    price: 27.99,
    image: '/Images/Eagle_Rare.jpg',
    description: "Smooth and versatile Irish whiskey with notes of vanilla and toasted wood.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "Ireland"
  },
    {
    id: "whiskey-4",
    name: "Four Roses",
    type: "Whiskey",
    price: 27.99,
    image: '/Images/FourRoses.webp',
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
    image: "/Images/GreyGoose.jpg",
    description: "Premium French vodka, distilled from wheat for exceptional smoothness.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "France"
  },
  {
    id: "vodka-2",
    name: "RoyalDragon",
    type: "Vodka",
    price: 32.99,
    image: "/Images/RoyalDragon.jpg",
    description: "Luxury Polish vodka distilled from rye, known for its creamy mouthfeel.",
    inStock: true,
    featured: true,
    abv: 40,
    volume: "750ml",
    country: "Poland"
  },
    {
    id: "vodka-3",
    name: "Belugagold",
    type: "Vodka",
    price: 32.99,
    image: "/Images/belugagold.jpg",
    description: "Luxury Polish vodka distilled from rye, known for its creamy mouthfeel.",
    inStock: true,
    featured: true,
    abv: 40,
    volume: "750ml",
    country: "Poland"
  },
    {
    id: "vodka-4",
    name: "Ciroc",
    type: "Vodka",
    price: 32.99,
    image: "/Images/Cîroc-vodka.jpg",
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
    image: "/Images/Caymus.jpg",
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
    image: "/Images/Veuve.jpg",
    description: "Iconic champagne with perfect balance of power and finesse.",
    inStock: true,
    featured: true,
    abv: 12,
    volume: "750ml",
    country: "France"
  },
  {
    id: "beer-1",
    name: "Heineken 6Pack",
    type: "Beer",
    price: 17.99,
    image: "/Images/Heineken.jpg",
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
    image: "/Images/Diplomatico.avif",
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
    image: "/Images/Hendricks.jpeg",
    description: "Scottish gin infused with cucumber and rose petals for a distinctive flavor.",
    inStock: true,
    abv: 44,
    volume: "750ml",
    country: "Scotland"
  },
  {
    id: "tequila-1",
    name: "CasAmigos",
    type: "Tequila",
    price: 45.99,
    image: "/Images/Casamigos.jpg",
    description: "Smooth, ultra-premium tequila with notes of citrus and vanilla.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "Mexico"
  },
    {
    id: "tequila-2",
    name: "DonJulio 1942",
    type: "Tequila",
    price: 45.99,
    image: "/Images/Donjulio_1942.jpg",
    description: "Smooth, ultra-premium tequila with notes of citrus and vanilla.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "Mexico"
  },
    {
    id: "tequila-3",
    name: "Avion",
    type: "Tequila",
    price: 45.99,
    image: "/Images/Avion.webp",
    description: "Smooth, ultra-premium tequila with notes of citrus and vanilla.",
    inStock: true,
    abv: 40,
    volume: "750ml",
    country: "Mexico"
  },
    {
    id: "tequila-4",
    name: "Komos XO",
    type: "Tequila",
    price: 45.99,
    image: "/Images/Komos.webp",
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
    image: "/Images/Baileys.webp",
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

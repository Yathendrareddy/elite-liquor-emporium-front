
export type ProductType = 'Whiskey' | 'Vodka' | 'Wine' | 'Beer' | 'Rum' | 'Gin' | 'Tequila' | 'Liqueur';

export interface Product {
  id: string;
  name: string;
  type: ProductType;
  price: number;
  image: string;
  description: string;
  inStock: boolean;
  featured?: boolean;
  abv?: number; // Alcohol by volume percentage
  volume?: string; // e.g., "750ml"
  country?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

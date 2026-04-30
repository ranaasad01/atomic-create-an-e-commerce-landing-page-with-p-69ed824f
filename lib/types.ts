export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  discount?: number;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

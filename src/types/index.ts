export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  description: string;
  brand: string;
  available: boolean;
  stockCount?: number;
  rating?: number;
  reviewsCount?: number;
  features?: string[];
  specs?: Record<string, string>;
  weightOrVolume?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  itemCount: number;
  image: string;
  subcategories: string[];
  anchorId: string;
}

export interface GuideArticle {
  id: string;
  title: string;
  summary: string;
  readTime: string;
  category: string;
  date: string;
  image?: string;
  content: string[];
}

export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
  hasAnswered: boolean;
}

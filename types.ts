
export interface Product {
  id: number;
  name: string;
  images: string[];
  rating: number;
  reviewCount: number;
  price: number;
  salePrice?: number;
  memberPrice: number;
  badge?: 'SALE' | 'BEST SELLER' | 'TRENDING' | 'NEW FORMULA';
  description: string;
  features: string[];
  categoryId: number;
  affiliateLink?: string;
  imageTransitionSpeed?: number;
}

export interface Category {
  id: number;
  name:string;
  navName: string;
  imageUrl: string;
}
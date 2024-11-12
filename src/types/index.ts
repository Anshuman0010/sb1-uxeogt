export interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  price: string;
  tags?: string[];
  description?: string;
}

export type Cuisine = 'All' | 'French' | 'Japanese' | 'Italian' | 'Indian' | 'Mexican' | 'Thai' | 'American' | 'Mediterranean' | 'Vegetarian';
export type PriceRange = 'All' | '$' | '$$' | '$$$' | '$$$$';
export type Cuisine = 'All' | 'French' | 'Japanese' | 'Italian' | 'Indian' | 'Mexican' | 'Thai' | 'American' | 'Mediterranean' | 'Vegetarian';
export type PriceRange = 'All' | '$' | '$$' | '$$$' | '$$$$';
export type Location = 'All' | 'Downtown' | 'Uptown' | 'Midtown' | 'Waterfront' | 'Suburbs';

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: Cuisine;
  price: PriceRange;
  location: Location;
  description?: string;
  tags?: string[];
}
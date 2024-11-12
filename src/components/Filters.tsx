import React from 'react';
import { Cuisine, PriceRange, Location } from '../types';
import { Star } from 'lucide-react';

interface FiltersProps {
  selectedCuisine: Cuisine;
  selectedPrice: PriceRange;
  selectedLocation: Location;
  minRating: number;
  onCuisineChange: (cuisine: Cuisine) => void;
  onPriceChange: (price: PriceRange) => void;
  onLocationChange: (location: Location) => void;
  onRatingChange: (rating: number) => void;
}

export default function Filters({
  selectedCuisine,
  selectedPrice,
  selectedLocation,
  minRating,
  onCuisineChange,
  onPriceChange,
  onLocationChange,
  onRatingChange,
}: FiltersProps) {
  const cuisines: Cuisine[] = ['All', 'French', 'Japanese', 'Italian', 'Indian', 'Mexican', 'Thai', 'American', 'Mediterranean', 'Vegetarian'];
  const prices: PriceRange[] = ['All', '$', '$$', '$$$', '$$$$'];
  const locations: Location[] = ['All', 'Downtown', 'Uptown', 'Midtown', 'Waterfront', 'Suburbs'];

  return (
    <div className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm">
      <h2 className="text-xl font-semibold mb-4">Filter Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Cuisine</label>
          <select
            value={selectedCuisine}
            onChange={(e) => onCuisineChange(e.target.value as Cuisine)}
            className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
          <select
            value={selectedPrice}
            onChange={(e) => onPriceChange(e.target.value as PriceRange)}
            className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            {prices.map((price) => (
              <option key={price} value={price}>{price}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value as Location)}
            className="w-full bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Minimum Rating</label>
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={minRating}
              onChange={(e) => onRatingChange(Number(e.target.value))}
              className="flex-1"
            />
            <span className="flex items-center text-yellow-400">
              <Star className="w-4 h-4 fill-current" /> {minRating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
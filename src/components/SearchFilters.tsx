import React from 'react';
import { Cuisine, PriceRange } from '../types';

interface SearchFiltersProps {
  selectedCuisine: Cuisine;
  selectedPrice: PriceRange;
  minRating: number;
  onCuisineChange: (cuisine: Cuisine) => void;
  onPriceChange: (price: PriceRange) => void;
  onRatingChange: (rating: number) => void;
}

export default function SearchFilters({
  selectedCuisine,
  selectedPrice,
  minRating,
  onCuisineChange,
  onPriceChange,
  onRatingChange,
}: SearchFiltersProps) {
  const cuisines: Cuisine[] = ['All', 'French', 'Japanese', 'Italian', 'Indian', 'Mexican', 'Thai', 'American', 'Mediterranean', 'Vegetarian'];
  const prices: PriceRange[] = ['All', '$', '$$', '$$$', '$$$$'];

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-2">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-300 mb-1">Cuisine</label>
        <select
          value={selectedCuisine}
          onChange={(e) => onCuisineChange(e.target.value as Cuisine)}
          className="w-full bg-gray-800 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          {cuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>{cuisine}</option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
        <select
          value={selectedPrice}
          onChange={(e) => onPriceChange(e.target.value as PriceRange)}
          className="w-full bg-gray-800 text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          {prices.map((price) => (
            <option key={price} value={price}>{price}</option>
          ))}
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-300 mb-1">Min Rating</label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={minRating}
          onChange={(e) => onRatingChange(Number(e.target.value))}
          className="w-full"
        />
        <div className="text-center text-white text-sm">{minRating} ★</div>
      </div>
    </div>
  );
}
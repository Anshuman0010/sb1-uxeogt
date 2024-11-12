import React from 'react';
import { Restaurant } from '../types';
import RestaurantCard from './RestaurantCard';

interface SearchResultsProps {
  results: Restaurant[];
}

export default function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-400">No restaurants found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 max-h-[60vh] overflow-y-auto">
      {results.map((restaurant) => (
        <div key={restaurant.id} className="w-full">
          <RestaurantCard {...restaurant} />
        </div>
      ))}
    </div>
  );
}
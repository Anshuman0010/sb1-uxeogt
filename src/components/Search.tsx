import React, { useState, useEffect } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { Restaurant, Cuisine, PriceRange } from '../types';
import { restaurants } from '../data/restaurants';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine>('All');
  const [selectedPrice, setSelectedPrice] = useState<PriceRange>('All');
  const [minRating, setMinRating] = useState(0);
  const [results, setResults] = useState<Restaurant[]>(restaurants);

  useEffect(() => {
    const filteredResults = restaurants.filter((restaurant) => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
      const matchesPrice = selectedPrice === 'All' || restaurant.price === selectedPrice;
      const matchesRating = restaurant.rating >= minRating;

      return matchesSearch && matchesCuisine && matchesPrice && matchesRating;
    });

    setResults(filteredResults);
  }, [searchTerm, selectedCuisine, selectedPrice, minRating]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search by name, cuisine, or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg pl-12 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <SearchFilters
        selectedCuisine={selectedCuisine}
        selectedPrice={selectedPrice}
        minRating={minRating}
        onCuisineChange={setSelectedCuisine}
        onPriceChange={setSelectedPrice}
        onRatingChange={setMinRating}
      />

      <SearchResults results={results} />
    </div>
  );
}
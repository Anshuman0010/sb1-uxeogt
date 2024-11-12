import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Restaurant, Cuisine, PriceRange } from '../types';
import { restaurants } from '../data/restaurants';
import SearchFilters from './SearchFilters';
import SearchResults from './SearchResults';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine>('All');
  const [selectedPrice, setSelectedPrice] = useState<PriceRange>('All');
  const [minRating, setMinRating] = useState(0);
  const [results, setResults] = useState<Restaurant[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchTerm || selectedCuisine !== 'All' || selectedPrice !== 'All' || minRating > 0) {
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
      setIsSearchExpanded(true);
    } else {
      setResults([]);
      setIsSearchExpanded(false);
    }
  }, [searchTerm, selectedCuisine, selectedPrice, minRating]);

  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.search-container')) {
      setIsSearchExpanded(false);
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-red-600 text-2xl font-bold">TasteFlix</h1>
              <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Home</a>
                <a href="#" className="text-gray-300 hover:text-white">Trending</a>
                <a href="#" className="text-gray-300 hover:text-white">Cuisines</a>
                <a href="#" className="text-gray-300 hover:text-white">Near Me</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative search-container">
                <input
                  type="text"
                  placeholder="Search restaurants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-black/30 text-white px-4 py-1 rounded-full pl-10 w-48 focus:w-64 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                
                {isSearchExpanded && (
                  <div className="absolute top-full right-0 mt-2 w-screen max-w-2xl bg-black/95 rounded-lg shadow-xl p-4 border border-gray-800">
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
                )}
              </div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Trending</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Cuisines</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Near Me</a>
            </div>
          </div>
        )}
      </nav>
      {isSearchExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleClickOutside}
        />
      )}
    </>
  );
}
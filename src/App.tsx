import { useState } from 'react';
import { restaurants } from './data/restaurants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Filters from './components/Filters';
import Footer from './components/Footer';
import { Cuisine, PriceRange, Location } from './types';

export function App() {
  const [selectedCuisine, setSelectedCuisine] = useState<Cuisine>('All');
  const [selectedPrice, setSelectedPrice] = useState<PriceRange>('All');
  const [selectedLocation, setSelectedLocation] = useState<Location>('All');
  const [minRating, setMinRating] = useState(0);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
    const matchesPrice = selectedPrice === 'All' || restaurant.price === selectedPrice;
    const matchesLocation = selectedLocation === 'All' || restaurant.location === selectedLocation;
    const matchesRating = restaurant.rating >= minRating;

    return matchesCuisine && matchesPrice && matchesLocation && matchesRating;
  });

  const topRated = filteredRestaurants.filter(r => r.rating >= 4.7);
  const newArrivals = filteredRestaurants.filter(r => r.tags?.includes('new'));
  const localFavorites = filteredRestaurants.filter(r => r.tags?.includes('local-favorite'));
  const dateNight = filteredRestaurants.filter(r => r.tags?.includes('romantic'));

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Filters
          selectedCuisine={selectedCuisine}
          selectedPrice={selectedPrice}
          selectedLocation={selectedLocation}
          minRating={minRating}
          onCuisineChange={setSelectedCuisine}
          onPriceChange={setSelectedPrice}
          onLocationChange={setSelectedLocation}
          onRatingChange={setMinRating}
        />
      </div>
      <div className="py-8 space-y-12">
        {topRated.length > 0 && <Slider title="Top Rated Restaurants" items={topRated} />}
        {newArrivals.length > 0 && <Slider title="New This Week" items={newArrivals} />}
        {localFavorites.length > 0 && <Slider title="Local Favorites" items={localFavorites} />}
        {dateNight.length > 0 && <Slider title="Perfect for Date Night" items={dateNight} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
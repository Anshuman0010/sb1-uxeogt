import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[70vh] w-full">
      <img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        alt="Featured Restaurant"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover Your Next Favorite Restaurant</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">Explore curated collections of the best restaurants in your city</p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
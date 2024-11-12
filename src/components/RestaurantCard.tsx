import React from 'react';
import { Star } from 'lucide-react';
import { Restaurant } from '../types';

export default function RestaurantCard({ name, image, rating, cuisine, price, tags, description }: Restaurant) {
  return (
    <div className="flex-none w-full group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100">
          <div className="absolute bottom-0 p-4 w-full">
            <h3 className="text-white font-bold text-lg mb-1">{name}</h3>
            <div className="flex items-center space-x-2 text-sm text-gray-200 mb-2">
              <span className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 mr-1 inline" fill="currentColor" />
                {rating}
              </span>
              <span>•</span>
              <span>{cuisine}</span>
              <span>•</span>
              <span>{price}</span>
            </div>
            {description && (
              <p className="text-sm text-gray-300 mb-2">{description}</p>
            )}
            {tags && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs bg-red-600/80 text-white px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
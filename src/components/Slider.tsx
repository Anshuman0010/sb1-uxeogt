import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RestaurantCard from './RestaurantCard';

interface SliderProps {
  title: string;
  items: {
    id: number;
    name: string;
    image: string;
    rating: number;
    cuisine: string;
    price: string;
  }[];
}

export default function Slider({ title, items }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <h2 className="text-2xl font-bold text-white mb-4 px-8">{title}</h2>
      
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-4 px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <RestaurantCard key={item.id} {...item} />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
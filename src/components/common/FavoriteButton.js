'use client';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const FavoriteButton = ({ isFavorite, onClick, isLoading, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        absolute 
        flex items-center justify-center
        w-9 h-9 rounded-xl
        shadow-sm
        transform transition-all duration-300
        ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-110'}
        ${isFavorite ? 'bg-red-50 hover:bg-red-100' : 'bg-white/80 backdrop-blur-md hover:bg-white'}
        ${isHovered && !isFavorite ? 'ring-2 ring-primary/30' : ''}
        ${isLoading ? 'animate-pulse' : ''}
        ${className}
      `}
      aria-label={isFavorite ? 'حذف از علاقه‌مندی‌ها' : 'افزودن به علاقه‌مندی‌ها'}
    >
      <Heart
        size={20}
        className={`
          transition-all duration-300
          ${
            isFavorite
              ? 'fill-red-500 text-red-500 stroke-width-1.5'
              : 'text-gray-700 group-hover:!text-blue-600'
          }
          ${isHovered && !isFavorite ? 'scale-110' : ''}
          ${isLoading ? 'opacity-70' : ''}
        `}
      />

      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-5 h-5 border-2 border-gray-300 border-t-primary rounded-full animate-spin"></span>
        </span>
      )}
    </button>
  );
};

export default FavoriteButton;

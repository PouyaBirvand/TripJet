import Image from 'next/image';
import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function TourImage({ id, destination }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const tourImage = `https://picsum.photos/700/300?random=${id}`;
  
  return (
    <div className="relative h-48 md:h-full">
      <figure className="h-full w-full">
        <Image 
          src={tourImage}
          alt={destination}
          fill
          className="object-cover transition-transform duration-500 rounded-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </figure>
      
      <button 
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-xl shadow-sm hover:bg-white transition-colors z-10"
      >
        <Heart 
          size={20} 
          className={`${isFavorite ? 'fill-red-500 text-red-500' : 'text-primary'} transition-colors`} 
        />
      </button>
    </div>
  );
}

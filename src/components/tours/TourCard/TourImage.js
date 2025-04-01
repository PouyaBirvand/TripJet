import Image from 'next/image';
import TourBadges from './TourBadges';
import { Tag } from 'lucide-react';

export default function TourImage({ id, title, destination, hasDiscount, discountPercentage, isLastMinute }) {
  const tourImage = `https://picsum.photos/700/300?random=${id}`;
  
  return (
    <div className="w-full lg:w-2/5 h-64 lg:h-auto relative">
      <figure className="relative h-full w-full">
        <Image 
          src={tourImage}
          alt={destination}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <TourBadges 
          hasDiscount={hasDiscount}
          discountPercentage={discountPercentage}
          isLastMinute={isLastMinute}
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className={`text-white text-lg font-bold ${!hasDiscount ? 'mt-0': ' mt-5'}`}>{title}</h3>
          <div className="flex items-center gap-1 text-white/90 text-xs mt-1">
            <Tag size={14} />
            <span>{destination}</span>
          </div>
        </div>
      </figure>
    </div>
  );
}

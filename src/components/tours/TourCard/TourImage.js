"use client";
import Image from 'next/image';
import tourData from '../tourData';
import { useFavorite } from '../../../hooks/useFavorite';
import FavoriteButton from '../../../components/common/FavoriteButton';

export default function TourImage({ id, destination}) {
  const { isFavorite, toggleFavorite, isAdding, isRemoving } = useFavorite();
  const tourImage = `https://picsum.photos/700/300?random=${id}`;
  
  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Find the full tour object from the id
    const tour = tourData.find(t => t.id === id);
    if (tour) {
      toggleFavorite(tour);
    }
  };

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
      
      <FavoriteButton
        isFavorite={isFavorite(id)}
        onClick={handleToggleFavorite}
        isLoading={isAdding || isRemoving}
        className="top-3 right-3"
      />
    </div>
  );
}
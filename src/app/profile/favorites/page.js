"use client";
import { useState } from 'react';
import { useFavorite } from '../../../hooks/useFavorite';
import SortButtons from '../../../components/profile/ProfileFavorites/SortButtons';
import FavoriteItem from '../../../components/profile/ProfileFavorites/FavoriteItem';

export default function FavoritesPage() {
  const [currentSort, setCurrentSort] = useState('');
  const { favorites, isLoading, toggleFavorite, isRemoving } = useFavorite();

  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
  };

  const filteredFavorites = favorites.filter(tour => {
    if (currentSort === 'foreign') {
      return tour.isForeign;
    } else if (currentSort === 'domestic') {
      return !tour.isForeign;
    }
    return true;
  });

  const handleRemoveFavorite = (e, tour) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(tour);
  };

  return (
    <div>
      <div className="bg-white border border-base-300 rounded-xl p-6 mb-8">
        <h2 className="font-bold text-xl pb-2">مدیریت علاقه‌مندی‌ها</h2>
        <SortButtons currentSort={currentSort} onSortChange={handleSortChange} />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : filteredFavorites.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-xl border border-base-300 p-6">
          <h3 className="text-xl font-semibold mb-2">لیست علاقه‌مندی‌های شما خالی است</h3>
          <p className="text-gray-500">تورهای مورد علاقه خود را با کلیک بر روی آیکون قلب به این لیست اضافه کنید.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFavorites.map(tour => (
            <FavoriteItem
              key={tour.id} 
              tour={tour} 
              onRemoveFavorite={handleRemoveFavorite} 
              isRemoving={isRemoving} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

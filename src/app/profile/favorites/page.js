'use client';
import { useState, useEffect } from 'react';
import { useQueryState } from 'nuqs';
import { useFavorite } from '../../../hooks/useFavorite';
import SortButtons from '../../../components/profile/ProfileFavorites/SortButtons';
import FavoriteItem from '../../../components/profile/ProfileFavorites/FavoriteItem';

export default function FavoritesPage() {
  const [sortParam, setSortParam] = useQueryState('sort');
  const [currentSort, setCurrentSort] = useState('');
  const { favorites, isLoading, toggleFavorite, isRemoving } = useFavorite();

  useEffect(() => {
    if (sortParam) {
      setCurrentSort(sortParam);
    }
  }, [sortParam]);

  const handleSortChange = sortType => {
    setCurrentSort(sortType);
    setSortParam(sortType);
  };

  const filteredFavorites = favorites.filter(tour => {
    if (currentSort === 'foreign') {
      return !tour.isForeign;
    } else if (currentSort === 'domestic') {
      return tour.isDiscounted;
    }
    return true;
  });

  const handleRemoveFavorite = (e, tour) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(tour);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white border border-base-300 rounded-xl p-4 md:p-5 mb-6">
        <h2 className="font-bold text-xl pb-3">مدیریت علاقه‌مندی‌ها</h2>
        <SortButtons currentSort={currentSort} onSortChange={handleSortChange} />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : filteredFavorites.length === 0 ? (
        <div className="text-center py-8 md:py-10 bg-white rounded-xl border border-base-300 p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            لیست علاقه‌مندی‌های شما خالی است
          </h3>
          <p className="text-gray-500 text-sm md:text-base">
            تورهای مورد علاقه خود را با کلیک بر روی آیکون قلب به این لیست اضافه کنید.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
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

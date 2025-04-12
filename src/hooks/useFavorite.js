'use client';
import { tourService } from '../services/tour/tourService';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useFavorite() {
  const queryClient = useQueryClient();

  const { data: favorites = [], isLoading } = useQuery({
    queryKey: ['favorites'],
    queryFn: tourService.getFavorites,
  });

  // Add to favorites mutation
  const addToFavoritesMutation = useMutation({
    mutationFn: tourService.addToFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  // Remove from favorites mutation
  const removeFromFavoritesMutation = useMutation({
    mutationFn: tourService.removeFromFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });

  // Check if a tour is in favorites
  const isFavorite = tourId => {
    return favorites.some(fav => fav.id === tourId);
  };

  // Toggle favorite status
  const toggleFavorite = tour => {
    if (isFavorite(tour.id)) {
      removeFromFavoritesMutation.mutate(tour.id);
    } else {
      addToFavoritesMutation.mutate(tour);
    }
  };

  return {
    favorites,
    isLoading,
    isFavorite,
    toggleFavorite,
    isAdding: addToFavoritesMutation.isPending,
    isRemoving: removeFromFavoritesMutation.isPending,
  };
}

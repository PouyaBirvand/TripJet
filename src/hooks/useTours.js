import { useQuery } from '@tanstack/react-query';
import { tourService } from '../services/tour/tourService';

export function useTours(filters) {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tours', filters],
    queryFn: () => tourService.getTours(filters),
    select: (response) => ({
      tours: response.data,
      totalResults: response.meta.total,
    }),
  });

  return {
    tours: data?.tours || [],
    totalResults: data?.totalResults || 0,
    isLoading,
    error: error?.message || error,
  };
}

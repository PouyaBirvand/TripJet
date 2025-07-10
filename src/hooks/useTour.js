import { tourService } from '../services/tour/tourService';
import { useQuery } from '@tanstack/react-query';

export function useTour(TourId) {
  const {
    data: tour,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tour', TourId],
    queryFn: () => tourService.getTourById(TourId), 
    enabled: !!TourId,
  });

  console.log(tour);

  return {
    tour,
    isLoading,
    error, 
  };
}

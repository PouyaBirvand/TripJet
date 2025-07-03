import { tourService } from '../services/tour/tourService';
import { useQuery } from '@tanstack/react-query';

export function useTour(TourId) {
  const {
    data: tour,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tour', TourId],
    queryFn: () => tourService.getTourById(TourId), // اصلاح شده
    enabled: !!TourId, // فقط زمانی اجرا شود که TourId موجود باشد
  });

  console.log(tour);

  return {
    tour,
    isLoading,
    error, // اضافه کردن error handling
  };
}

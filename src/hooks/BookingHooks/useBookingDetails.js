'use client';

import { useQuery } from '@tanstack/react-query';
import { bookingService } from '../../services/booking/bookingService';

export default function useBookingDetails(bookingId) {
  const {
    data: bookingDetails,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['bookingDetails', bookingId],
    queryFn: () => bookingService.getBookingDetails(bookingId),
    select: response => response?.data,
    // enabled: !!bookingId
  });

  return {
    bookingDetails,
    isLoading,
    error,
    refetch,
  };
}

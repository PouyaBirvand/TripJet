'use client';

import { bookingService } from '../services/booking/bookingService';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePassengerData() {
  const queryClient = useQueryClient();

  // دریافت تاریخچه مسافران
  const {
    data: passengerHistory = [],
    isLoading: isHistoryLoading,
    error: historyError,
    refetch
  } = useQuery({
    queryKey: ['passengerHistory'],
    queryFn: () => bookingService.getPassengerHistory(),
    select: response => response?.data || []
  });

  // ذخیره مسافران
  const savePassengersMutation = useMutation({
    mutationFn: bookingService.savePassengers,
    onSuccess: () => {
      // پس از ذخیره موفق، تاریخچه مسافران را مجدداً دریافت می‌کنیم
      queryClient.invalidateQueries(['passengerHistory']);
    }
  });

  return {
    passengerHistory,
    isHistoryLoading,
    historyError,
    savePassengers: savePassengersMutation.mutate,
    savePassengersAsync: savePassengersMutation.mutateAsync,
    isSaving: savePassengersMutation.isPending,
    saveError: savePassengersMutation.error,
    refetch
  };
}
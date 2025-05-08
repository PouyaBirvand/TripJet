'use client';

import { bookingService } from '../../services/booking/bookingService';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function usePassengerData() {
  const queryClient = useQueryClient();

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

  const savePassengersMutation = useMutation({
    mutationFn: bookingService.savePassengers,
    onSuccess: () => {
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
'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { bookingService } from '../../services/booking/bookingService';

export default function usePaymentProcess() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async paymentData => {
      const response = await bookingService.processPayment(paymentData);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['bookingDetails']);
    },
  });

  return {
    processPayment: mutation.mutate,
    processPaymentAsync: mutation.mutateAsync,
    isProcessing: mutation.isPending,
    paymentResult: mutation.data,
    paymentError: mutation.error,
  };
}

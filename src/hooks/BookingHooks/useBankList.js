'use client';

import { useQuery } from '@tanstack/react-query';
import { bookingService } from '../../services/booking/bookingService';

export default function useBankList() {
  const {
    data: banks = [],
    isLoading,
    error
  } = useQuery({
    queryKey: ['bankList'],
    queryFn: bookingService.getBankList,
    select: response => response?.data || [],
    staleTime: 60 * 60 * 1000 // 1 hour
  });

  return {
    banks,
    isLoading,
    error
  };
}
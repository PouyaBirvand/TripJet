'use client';

import { useQuery } from '@tanstack/react-query';
import { profileService } from '../../services/profile/profileService';

export function useUserTransactions() {
  const {
    data: transactions,
    isLoading: isTransactionsLoading,
    error: transactionsError,
    refetch: refetchTransactions
  } = useQuery({
    queryKey: ['userTransactions'],
    queryFn: profileService.getUserTransactions,
    staleTime: 5 * 60 * 1000,
  });

  const getTransactionDetails = async (transactionId) => {
    try {
      return await profileService.getTransactionDetails(transactionId);
    } catch (error) {
      console.error('Error fetching transaction details:', error);
      throw error;
    }
  };

  return {
    transactions,
    isTransactionsLoading,
    transactionsError,
    refetchTransactions,
    getTransactionDetails,
  };
}
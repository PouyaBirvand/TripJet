'use client';

import { profileService } from '../../services/profile/profileService';
import { useQuery } from '@tanstack/react-query';

export function useUserTrips() {
  const {
    data: trips,
    isLoading: isTripsLoading,
    error: tripsError,
    refetch: refetchTrips,
  } = useQuery({
    queryKey: ['userTrips'],
    queryFn: profileService.getUserTrips,
    staleTime: 5 * 60 * 1000,
  });

  const getTripDetails = async tripId => {
    try {
      return await profileService.getTripDetails(tripId);
    } catch (error) {
      console.error('Error fetching trip details:', error);
      throw error;
    }
  };

  return {
    trips,
    isTripsLoading,
    tripsError,
    refetchTrips,
    getTripDetails,
  };
}

'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { tourService } from '../services/tour/tourService';
import { useQueryStates, parseAsString, parseAsBoolean } from 'nuqs';
import { TourFiltersContext } from '../contexts/TourFiltersContext';
import { useRouter } from 'next/navigation';

export function TourFiltersProvider({ children, initialFilters = {} }) {
  const router = useRouter()
  const [queryParams, setQueryParams] = useQueryStates({
    destination: parseAsString,
    origin: parseAsString,
    type: parseAsString.withDefault('domestic'),

    price_range: parseAsString,
    discounted: parseAsBoolean,

    hotel_name: parseAsString,
    hotel_stars: parseAsString,
    show_no_star: parseAsBoolean,

    tour_types: parseAsString,

    difficulty_levels: parseAsString,

    rating: parseAsString,

    transport_types: parseAsString,

    months: parseAsString,

    sort: parseAsString,

    page: parseAsString.withDefault('1'),
    limit: parseAsString.withDefault('10'),
  });

  const {
    data: filterOptions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['filterOptions'],
    queryFn: () => tourService.getFiltersOptions(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const filters = useMemo(() => {
    const result = {};
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        result[key] = value;
      }
    });

    return Object.keys(result).length > 0 ? result : initialFilters;
  }, [queryParams, initialFilters]);

  const updateFilters = (key, value) => {
    if (value === null || value === '') {
      setQueryParams({
        ...queryParams,
        [key]: undefined,
        ...(key !== 'page' ? { page: 1 } : {}),
      });
    } else {
      setQueryParams({
        ...queryParams,
        [key]: value,
        ...(key !== 'page' ? { page: 1 } : {}),
      });
    }
  };

const clearFilters = () => {
  const currentPage = queryParams.page || '1';
  router.push(`/tours?page=${currentPage}`);
};
  const getFilterValue = key => filters[key] || '';

  return (
    <TourFiltersContext.Provider
      value={{
        filters,
        updateFilters,
        clearFilters,
        getFilterValue,
        filterOptions,
        isLoading,
        error,
      }}
    >
      {children}
    </TourFiltersContext.Provider>
  );
}

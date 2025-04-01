'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { FiltersContext } from '../contexts/FiltersContext';
import { tourService } from '../services/tour/tourService';

export function FiltersProvider({ children, initialFilters = {} }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(() => {
    // Convert searchParams to object
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return Object.keys(params).length > 0 ? params : initialFilters;
  });

  // Fetch filter options
  const { data: filterOptions, isLoading, error } = useQuery({
    queryKey: ['filterOptions'],
    queryFn: () => tourService.getFiltersOptions(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  // Update URL when filters change
  const updateFilters = (key, value) => {
    const newFilters = { ...filters };
    
    if (value === null || value === '') {
      delete newFilters[key];
    } else {
      newFilters[key] = value;
    }
    
    // Reset page when filters change
    if (key !== 'page') {
      delete newFilters.page;
    }
    
    setFilters(newFilters);
    
    // Update URL
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      params.set(k, v);
    });
    
    router.push(`/tours?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({});
    router.push('/tours');
  };

  const getFilterValue = (key) => filters[key] || '';

  // Sync with URL changes
  useEffect(() => {
    const params = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });
    setFilters(params);
  }, [searchParams]);

  return (
    <FiltersContext.Provider value={{
      filters,
      updateFilters,
      clearFilters,
      getFilterValue,
      filterOptions,
      isLoading,
      error
    }}>
      {children}
    </FiltersContext.Provider>
  );
}

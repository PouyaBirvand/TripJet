'use client';

import { createContext, useContext } from 'react';

const TourFiltersContext = createContext({});

export function useFilters() {
  const context = useContext(TourFiltersContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within an TourFiltersProvider');
  }
  return context;
}

export { TourFiltersContext };

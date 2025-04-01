"use client";

import { createContext, useContext } from 'react';

const FiltersContext = createContext({});

export function useFilters() {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error('useFilters must be used within an FiltersProvider');
  }
  return context;
}

export { FiltersContext };
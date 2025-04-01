'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ToursContent from './ToursContent';
import { FiltersProvider } from '../../providers/FiltersProvider';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

// Prefill the query cache
function prefillCache(initialTours, initialFilterOptions) {
  queryClient.setQueryData(['tours', {}], initialTours);
  queryClient.setQueryData(['filterOptions'], initialFilterOptions);
}

export default function ToursContainer({ initialTours, initialFilters, initialFilterOptions }) {
  // Prefill the cache with server data
  prefillCache(initialTours, initialFilterOptions);
  
  return (
    <QueryClientProvider client={queryClient}>
      <FiltersProvider initialFilters={initialFilters}>
        <ToursContent initialTours={initialTours} />
      </FiltersProvider>
    </QueryClientProvider>
  );
}
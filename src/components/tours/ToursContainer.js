'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import ToursContent from './ToursContent';
import { TourFiltersProvider } from '../../providers/TourFiltersProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 min
    },
  },
});

// Prefill the query cache
function prefillCache(initialTours, initialFilterOptions) {
  queryClient.setQueryData(['tours', {}], initialTours);
  queryClient.setQueryData(['filterOptions'], initialFilterOptions);
}

export default function ToursContainer({ initialTours ,initialFilterOptions }) {
  // Prefill the cache with server data
  prefillCache(initialTours, initialFilterOptions);
  
  return (
    <QueryClientProvider client={queryClient}>
      <TourFiltersProvider>
        <ToursContent initialTours={initialTours} />
      </TourFiltersProvider>
    </QueryClientProvider>
  );
}
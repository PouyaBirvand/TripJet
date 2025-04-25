'use client';

import { useQuery } from '@tanstack/react-query';
import { useFilters } from '../../contexts/TourFiltersContext';
import { tourService } from '../../services/tour/tourService';
import FiltersSidebar from './filters/FiltersSidebar';
import ToursList from './ToursList';
import MobileFilters from './filters/MobileFilters';
import ToursNavbar from './Toursnavbar';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import ErrorMessage from '../../components/ui/ErrorMessage';

export default function ToursContent({ initialTours }) {
  const { filters } = useFilters();

  const {
    data: tours,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['tours', filters],
    queryFn: () => tourService.getTours(filters),
    initialData: initialTours,
    keepPreviousData: true,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error.message} onRetry={refetch} />;
  }

  return (
    <div className="mx-auto px-4 py-8">
      <ToursNavbar totalResults={tours.meta.total} />

      <div className="md:hidden mt-4">
        <MobileFilters />
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <div className="hidden md:block md:w-1/4 lg:w-1/5 shrink-0 ">
          <FiltersSidebar />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5">
          <ToursList tours={tours.data} meta={tours.meta} />
        </div>
      </div>
    </div>
  );
}

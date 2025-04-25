import { useFilters } from '../../../contexts/TourFiltersContext';
import PriceFilter from './PriceFilter';
import HotelFilter from './HotelFilter';
import TourTypeFilter from './TourTypeFilter';
import DifficultyFilter from './DifficultyFilter';
import RatingFilter from './RatingFilter';
import TransportFilter from './TransportFilter';
import DateFilter from './DateFilter';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';

export default function FiltersSidebar() {
  const { filterOptions, isLoading, error } = useFilters();

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4 h-96 flex items-center justify-center">
        <LoadingSpinner size="sm" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <p className="text-red-500 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 px-4 py-1">
      <div className="space-y-1">
        <PriceFilter options={filterOptions?.price_ranges} />
        <HotelFilter />
        <TourTypeFilter options={filterOptions?.tour_types} />
        <DifficultyFilter options={filterOptions?.difficulty_levels} />
        <RatingFilter />
        <TransportFilter options={filterOptions?.transport_types} />
        <DateFilter options={filterOptions?.available_months} />
      </div>
    </div>
  );
}

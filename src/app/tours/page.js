import { Suspense } from 'react';
import ToursContainer from '../../components/tours/ToursContainer';
import LoadingSpinner from '../../components/ui/LoadingSpinner';
import { tourService } from '../../services/tour/tourService';

export const metadata = {
  title: 'جستجوی تورها | سایت گردشگری',
  description: 'جستجو و رزرو انواع تورهای داخلی و خارجی با بهترین قیمت',
};

export default async function ToursPage({ searchParams }) {
  // دریافت داده‌ها در سرور برای SEO
  const initialTours = await tourService.getTours(searchParams);
  const filterOptions = await tourService.getFiltersOptions();
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ToursContainer 
        initialTours={initialTours} 
        initialFilters={searchParams}
        initialFilterOptions={filterOptions}
      />
    </Suspense>
  );
}
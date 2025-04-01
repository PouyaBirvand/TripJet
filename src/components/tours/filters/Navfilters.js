import { SlidersHorizontal } from 'lucide-react';
import { useFilters } from '../../../contexts/FiltersContext';

const Navfilters = () => {
  const { updateFilters, getFilterValue } = useFilters();
  const currentSort = getFilterValue('sort') || '';
  
  const handleSortChange = (value) => {
    updateFilters('sort', value);
  };
  
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
        <p className='flex items-center gap-2 text-base font-medium whitespace-nowrap'>
          <SlidersHorizontal className="text-primary" size={18} /> مرتب سازی بر اساس:
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 w-full relative bottom-2">
          <button 
            className={`btn btn-sm md:btn-md ${currentSort === 'luxury' ? 'bg-sky-200 text-primary' : 'btn-outline'} rounded-lg border border-base-300 font-normal text-xs sm:text-sm`}
            onClick={() => handleSortChange('luxury')}
          >
            لوکس ترین
          </button>
          <button 
            className={`btn btn-sm md:btn-md ${currentSort === 'special' ? 'bg-sky-200 text-primary' : 'btn-outline'} rounded-lg border border-base-300 font-normal text-xs sm:text-sm`}
            onClick={() => handleSortChange('special')}
          >
            تور های ویژه
          </button>
          <button 
            className={`btn btn-sm md:btn-md ${currentSort === 'nearest_date' ? 'bg-sky-200 text-primary' : 'btn-outline'} rounded-lg border border-base-300 font-normal text-xs sm:text-sm`}
            onClick={() => handleSortChange('nearest_date')}
          >
            نزدیک ترین تاریخ اجرا
          </button>
          <button 
            className={`btn btn-sm md:btn-md ${currentSort === 'weekend' ? 'bg-sky-200 text-primary' : 'btn-outline'} rounded-lg border border-base-300 font-normal text-xs sm:text-sm`}
            onClick={() => handleSortChange('weekend')}
          >
            تعطیلات اخر هفته
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navfilters;
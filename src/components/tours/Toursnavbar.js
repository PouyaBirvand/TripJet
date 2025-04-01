"use client"

import { ChevronLeft } from 'lucide-react';
import Navfilters from './filters/Navfilters';
import Countresult from './filters/Countresult';
import { useFilters } from '../../contexts/FiltersContext';

const ToursNavbar = ({ totalResults }) => {
  const { clearFilters } = useFilters();

  return (
    <div className="w-full">
      <p className="flex items-center text-sm md:text-base mb-4 flex-wrap">
        <span className="flex items-center text-primary ml-1">
          صفحه اصلی <ChevronLeft size={16} className="mx-1" />
        </span>
        نتیجه جستجو های تور های تهران به فرانسه
      </p>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 lg:w-1/5 shrink-0">
          <Countresult count={totalResults} onClearFilters={clearFilters} />
        </div>
        <div className="w-full md:w-3/4 lg:w-4/5">
          <Navfilters />
        </div>
      </div>
    </div>
  );
};

export default ToursNavbar;
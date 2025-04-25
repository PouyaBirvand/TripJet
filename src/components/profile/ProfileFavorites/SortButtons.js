import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const SortButtons = ({ currentSort, onSortChange }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 w-full">
      <span className="flex items-center gap-2 text-sm md:text-base mb-2 sm:mb-0">
        <SlidersHorizontal className="!text-blue-600 h-4 w-4 md:h-5 md:w-5" /> مرتب سازی بر اساس
      </span>
      <div className="flex flex-wrap gap-2 w-full">
        <button
          onClick={() => onSortChange('foreign')}
          className={`btn btn-sm md:btn-md !py-2 !px-3 md:!px-5 font-normal text-slate-500 bg-white flex-1 min-w-[120px] ${
            currentSort === 'foreign' 
              ? '!bg-sky-200 !text-blue-600 !border-none' 
              : 'btn-outline'
          } rounded-lg border border-slate-300 font-medium`}
        >
          تور های خارجی
        </button>
        <button
          onClick={() => onSortChange('domestic')}
          className={`btn btn-sm md:btn-md !py-2 !px-3 md:!px-5 font-normal text-slate-500 bg-white flex-1 min-w-[120px] ${
            currentSort === 'domestic' 
              ? '!bg-sky-200 !text-blue-600 !border-none' 
              : 'btn-outline'
          } rounded-lg border border-slate-300 font-medium`}
        >
          تور های داخلی
        </button>
      </div>
    </div>
  );
};

export default SortButtons;

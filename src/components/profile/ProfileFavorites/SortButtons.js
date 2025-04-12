import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const SortButtons = ({ currentSort, onSortChange }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="flex items-center gap-2">
        <SlidersHorizontal className="!text-blue-600" /> مرتب سازی بر اساس
      </span>
      <button
        onClick={() => onSortChange('foreign')}
        className={`btn btn-sm md:btn-md !p-5 font-normal text-slate-500 bg-white ${currentSort === 'foreign' ? '!bg-sky-200 !!text-blue-600 !border-none' : 'btn-outline'} rounded-lg border border-slate-300 font-medium text-xs sm:text-sm`}
      >
        تور های خارجی
      </button>
      <button
        onClick={() => onSortChange('domestic')}
        className={`btn btn-sm md:btn-md !p-5 font-normal text-slate-500 bg-white ${currentSort === 'domestic' ? '!bg-sky-200 !!text-blue-600 !border-none' : 'btn-outline'} rounded-lg border border-slate-300 font-medium text-xs sm:text-sm`}
      >
        تور های داخلی
      </button>
    </div>
  );
};

export default SortButtons;

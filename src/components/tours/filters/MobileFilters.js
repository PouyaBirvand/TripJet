import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import FiltersSidebar from './FiltersSidebar';

export default function MobileFilters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full btn bg-blue-600 text-white hover:bg-blue-700 duration-150 rounded-lg py-5 gap-2 mb-4"
      >
        <Filter size={18} />
        فیلترها
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white mb-15 bg-opacity-50 flex items-end">
          <div className="bg-white w-full h-[90vh] rounded-t-xl p-4 overflow-y-auto">
            <div className="flex justify-between items-center sticky -top-5 bg-white z-10 pb-2 border-b border-slate-300 mb-5">
              <h2 className="text-lg font-bold">فیلترها</h2>
              <button onClick={() => setIsOpen(false)} className="btn btn-sm btn-circle">
                <X size={18} />
              </button>
            </div>

            <div className="pb-20">
              <FiltersSidebar />
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200 shadow-lg">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full btn bg-blue-600 text-white hover:bg-blue-700 duration-150 rounded-lg py-5"
              >
                اعمال فیلترها
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

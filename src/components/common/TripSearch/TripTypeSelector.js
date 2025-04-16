'use client';
import { usePathname } from 'next/navigation';
import { Plane, Map } from 'lucide-react';

const TripTypeSelector = ({ selectedType, onTypeChange }) => {
  const pathname = usePathname();
  
  if (pathname === '/tours') return null;
  
  return (
    <div className="flex gap-6 mb-6 md:flex-row flex-col">
      <button
        type="button"
        onClick={() => onTypeChange('domestic')}
        className={`flex text-nowrap items-center gap-2 pb-2 px-1 border-0 transition-colors duration-300 ${
          selectedType === 'domestic' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        <div className={`p-1.5 rounded-full ${
          selectedType === 'domestic' ? 'bg-blue-100' : 'bg-gray-100'
        }`}>
          <Map size={16} className={selectedType === 'domestic' ? 'text-blue-600' : 'text-gray-600'} />
        </div>
        تورهای داخلی
      </button>
      
      <button
        type="button"
        onClick={() => onTypeChange('international')}
        className={`flex text-nowrap items-center gap-2 pb-2 px-1 border-0 transition-colors duration-300 ${
          selectedType === 'international' 
            ? 'text-blue-600 border-b-2 border-blue-600' 
            : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        <div className={`p-1.5 rounded-full ${
          selectedType === 'international' ? 'bg-blue-100' : 'bg-gray-100'
        }`}>
          <Plane size={16} className={selectedType === 'international' ? 'text-blue-600' : 'text-gray-600'} />
        </div>
        تورهای خارجی
      </button>
    </div>
  );
};

export default TripTypeSelector;

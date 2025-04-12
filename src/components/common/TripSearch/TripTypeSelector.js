'use client';

import { usePathname } from 'next/navigation';

const TripTypeSelector = ({ selectedType, onTypeChange }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex mb-6 gap-8 justify-start text-xl ${pathname == '/tours' ? 'hidden' : ''}`}
    >
      <div className="relative">
        <button
          className={`border-none font-light cursor-pointer ${selectedType === 'international' ? '!text-blue-600' : 'text-slate-600'}`}
          onClick={() => onTypeChange('international')}
          type="button"
        >
          تورهای خارجی
        </button>
        {selectedType === 'international' && (
          <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600 text-white rounded-full" />
        )}
      </div>

      <div className="relative">
        <button
          className={`border-none font-light cursor-pointer ${selectedType === 'domestic' ? '!text-blue-600' : 'text-slate-600'}`}
          onClick={() => onTypeChange('domestic')}
          type="button"
        >
          تورهای داخلی
        </button>
        {selectedType === 'domestic' && (
          <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600 text-white rounded-full" />
        )}
      </div>
    </div>
  );
};

export default TripTypeSelector;

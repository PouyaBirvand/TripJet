'use client';
import { usePathname } from 'next/navigation';

const TripTypeSelector = ({ selectedType, onTypeChange }) => {
  const pathname = usePathname();

  if (pathname === '/tours') return null;

  return (
    <div className="flex gap-6 mb-6 md:flex-row flex-col">
      <button
        type="button"
        onClick={() => onTypeChange('international')}
        className={`flex text-lg text-nowrap items-center gap-2 pb-2 border-0 transition-colors duration-300 ${
          selectedType === 'international'
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        <div></div>
        تورهای خارجی
      </button>

      <button
        type="button"
        onClick={() => onTypeChange('domestic')}
        className={`flex text-lg text-nowrap items-center gap-2 pb-2 border-0 transition-colors duration-300 ${
          selectedType === 'domestic'
            ? 'text-blue-600 border-b-2 border-blue-600'
            : 'text-slate-600 hover:text-slate-800'
        }`}
      >
        <div></div>
        تورهای داخلی
      </button>
    </div>
  );
};

export default TripTypeSelector;

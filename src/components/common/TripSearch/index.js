'use client';
import { useState, useEffect } from 'react';
import { useQueryStates } from 'nuqs';
import TripTypeSelector from './TripTypeSelector';
import TripSearchForm from './TripSearchForm';
import { Compass } from 'lucide-react';

export default function TripSearch() {
  const [queryParams, setQueryParams] = useQueryStates({
    type: {},
    origin: {},
    destination: {},
  });

  const [selectedType, setSelectedType] = useState(queryParams.type || 'domestic');

  const handleTypeChange = type => {
    setSelectedType(type);
    setQueryParams({ type });
  };

  useEffect(() => {
    if (queryParams.type && queryParams.type !== selectedType) {
      setSelectedType(queryParams.type);
    }
  }, [queryParams.type, selectedType]);

  return (
    <div className="bg-white relative z-[9] rounded-xl border border-slate-300 mt-45">
      <div className="p-6 border-b border-slate-100">
        <h3 className="flex items-center gap-2 font-medium text-2xl">
          <div className="bg-blue-100 p-2 rounded-full">
            <Compass size={20} className="text-blue-600" />
          </div>
          جستجوی تور
        </h3>
      </div>

      <div className="p-6">
        <TripTypeSelector selectedType={selectedType} onTypeChange={handleTypeChange} />
        <TripSearchForm
          tripType={selectedType}
          initialOrigin={queryParams.origin || ''}
          initialDestination={queryParams.destination || ''}
          onSearch={values => setQueryParams(values)}
        />
      </div>
    </div>
  );
}

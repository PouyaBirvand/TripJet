'use client';
import { useState, useEffect } from 'react';
import { useQueryStates } from 'nuqs';
import TripTypeSelector from './TripTypeSelector';
import TripSearchForm from './TripSearchForm';

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
    <div className="bg-white relative z-[9] rounded-xl border border-slate-300 mt-56">
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

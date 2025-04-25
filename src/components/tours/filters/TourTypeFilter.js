import { useState, useEffect } from 'react';
import { useFilters } from '../../../contexts/TourFiltersContext';
import Accordion from '../../../components/common/Accordion';
import { Map } from 'lucide-react';

export default function TourTypeFilter({ options = [] }) {
  const { updateFilters, getFilterValue } = useFilters();
  const [selectedTypes, setSelectedTypes] = useState(
    getFilterValue('tour_types')?.split(',') || []
  );

  const handleTypeChange = typeId => {
    const newTypes = selectedTypes.includes(typeId)
      ? selectedTypes.filter(t => t !== typeId)
      : [...selectedTypes, typeId];

    setSelectedTypes(newTypes);
    updateFilters('tour_types', newTypes.length > 0 ? newTypes.join(',') : null);
  };

  useEffect(() => {
    setSelectedTypes(getFilterValue('tour_types')?.split(',') || []);
  }, [getFilterValue]);

  return (
    <Accordion
      title={
        <span className="flex items-center">
          <Map size={18} className="ml-2 !text-blue-600" />
          نوع تورها
        </span>
      }
    >
      <div className="space-y-2">
        {options.map(type => (
          <div key={type.id} className="flex items-center">
            <input
              type="checkbox"
              id={`type-${type.id}`}
              checked={selectedTypes.includes(type.id.toString())}
              onChange={() => handleTypeChange(type.id.toString())}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <label htmlFor={`type-${type.id}`} className="mr-2 text-sm">
              {type.name}
            </label>
          </div>
        ))}

        {options.length === 0 && <p className="text-sm text-gray-500">گزینه‌ای موجود نیست</p>}
      </div>
    </Accordion>
  );
}

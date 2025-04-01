import { useState, useEffect } from 'react';
import { useFilters } from '../../../contexts/FiltersContext';
import Accordion from '../../../components/common/Accordion';
import { Bus, Plane, Train } from 'lucide-react';

export default function TransportFilter({ options = [] }) {
  const { updateFilters, getFilterValue } = useFilters();
  const [selectedTransports, setSelectedTransports] = useState(getFilterValue('transport_types')?.split(',') || []);
  
  // به‌روزرسانی فیلتر نوع حمل و نقل
  const handleTransportChange = (transportId) => {
    const newTransports = selectedTransports.includes(transportId)
      ? selectedTransports.filter(t => t !== transportId)
      : [...selectedTransports, transportId];
    
    setSelectedTransports(newTransports);
    updateFilters('transport_types', newTransports.length > 0 ? newTransports.join(',') : null);
  };
  
  // به‌روزرسانی state هنگام تغییر URL
  useEffect(() => {
    setSelectedTransports(getFilterValue('transport_types')?.split(',') || []);
  }, [getFilterValue]);
  
  // نمایش آیکون مناسب برای هر نوع حمل و نقل
  const getTransportIcon = (transportName) => {
    const name = transportName.toLowerCase();
    if (name.includes('هواپیما')) return <Plane size={16} className="ml-1" />;
    if (name.includes('قطار')) return <Train size={16} className="ml-1" />;
    if (name.includes('اتوبوس')) return <Bus size={16} className="ml-1" />;
    return null;
  };
  
  return (
    <Accordion title={
      <span className="flex items-center">
        <Bus size={18} className="ml-2 text-primary" />
        نوع حمل و نقل
      </span>
    }>
      <div className="space-y-2">
        {options.map((transport) => (
          <div key={transport.id} className="flex items-center">
            <input
              type="checkbox"
              id={`transport-${transport.id}`}
              checked={selectedTransports.includes(transport.id.toString())}
              onChange={() => handleTransportChange(transport.id.toString())}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <label htmlFor={`transport-${transport.id}`} className="mr-2 text-sm flex items-center">
              {getTransportIcon(transport.name)}
              {transport.name}
            </label>
          </div>
        ))}
        
        {options.length === 0 && (
          <p className="text-sm text-gray-500">گزینه‌ای موجود نیست</p>
        )}
      </div>
    </Accordion>
  );
}

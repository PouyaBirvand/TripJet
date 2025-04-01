import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { useFilters } from '../../../contexts/FiltersContext';
import Accordion from '../../../components/common/Accordion';

export default function DateFilter({ options = [] }) {
  const { updateFilters, getFilterValue } = useFilters();
  const [selectedMonths, setSelectedMonths] = useState(getFilterValue('months')?.split(',') || []);
  
  // به‌روزرسانی فیلتر ماه
  const handleMonthChange = (monthId) => {
    const newMonths = selectedMonths.includes(monthId)
      ? selectedMonths.filter(m => m !== monthId)
      : [...selectedMonths, monthId];
    
    setSelectedMonths(newMonths);
    updateFilters('months', newMonths.length > 0 ? newMonths.join(',') : null);
  };
  
  // به‌روزرسانی state هنگام تغییر URL
  useEffect(() => {
    setSelectedMonths(getFilterValue('months')?.split(',') || []);
  }, [getFilterValue]);
  
  return (
    <Accordion title={
      <span className="flex items-center">
        <Calendar size={18} className="ml-2 text-primary" />
        تاریخ برگزاری تورها
      </span>
    }>
      <div className="grid grid-cols-2 gap-2">
        {options.map((month) => (
          <div key={month.id} className="flex items-center">
            <input
              type="checkbox"
              id={`month-${month.id}`}
              checked={selectedMonths.includes(month.id.toString())}
              onChange={() => handleMonthChange(month.id.toString())}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <label htmlFor={`month-${month.id}`} className="mr-2 text-sm">
              {month.name}
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

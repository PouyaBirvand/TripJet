import { useState, useEffect } from 'react';
import { useFilters } from '../../../contexts/FiltersContext';
import Accordion from '../../../components/common/Accordion';
import { Star } from 'lucide-react';

export default function RatingFilter() {
  const { updateFilters, getFilterValue } = useFilters();
  const [selectedRating, setSelectedRating] = useState(getFilterValue('rating') || '');
  
  const ratingOptions = [
    { id: 'excellent', label: 'عالی (امتیاز ۴ به بالا)', value: '4-5' },
    { id: 'good', label: 'معمولی (امتیاز بین ۳ و ۴)', value: '3-4' },
    { id: 'poor', label: 'ضعیف (امتیاز زیر ۳)', value: '0-3' },
    { id: 'no_rating', label: 'بدون امتیاز', value: 'no_rating' }
  ];
  
  // به‌روزرسانی فیلتر امتیاز
  const handleRatingChange = (value) => {
    const newValue = selectedRating === value ? '' : value;
    setSelectedRating(newValue);
    updateFilters('rating', newValue || null);
  };
  
  // به‌روزرسانی state هنگام تغییر URL
  useEffect(() => {
    setSelectedRating(getFilterValue('rating') || '');
  }, [getFilterValue]);
  
  return (
    <Accordion title={
      <span className="flex items-center">
        <Star size={18} className="ml-2 text-yellow-400" fill="currentColor" />
        امتیاز کاربران
      </span>
    }>
      <div className="space-y-2">
        {ratingOptions.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="checkbox"
              id={`rating-${option.id}`}
              checked={selectedRating === option.value}
              onChange={() => handleRatingChange(option.value)}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <label htmlFor={`rating-${option.id}`} className="mr-2 text-sm">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </Accordion>
  );
}

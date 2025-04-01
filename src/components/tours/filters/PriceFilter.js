import { useState, useEffect } from 'react';
import { useFilters } from '../../../contexts/FiltersContext';
import Accordion from '../../../components/common/Accordion';
import { Percent } from 'lucide-react';

export default function PriceFilter({ options = [] }) {
  const { updateFilters, getFilterValue } = useFilters();
  const [selectedPriceRange, setSelectedPriceRange] = useState(getFilterValue('price_range') || '');
  const [showDiscounted, setShowDiscounted] = useState(getFilterValue('discounted') === 'true');

  // به‌روزرسانی فیلتر قیمت در URL
  const handlePriceRangeChange = (value) => {
    setSelectedPriceRange(value);
    updateFilters('price_range', value);
  };

  // به‌روزرسانی فیلتر تخفیف‌دار
  const handleDiscountedChange = () => {
    const newValue = !showDiscounted;
    setShowDiscounted(newValue);
    updateFilters('discounted', newValue ? 'true' : null);
  };

  // به‌روزرسانی state هنگام تغییر URL
  useEffect(() => {
    setSelectedPriceRange(getFilterValue('price_range') || '');
    setShowDiscounted(getFilterValue('discounted') === 'true');
  }, [getFilterValue]);

  return (
    <Accordion title="بازه قیمتی تورها" defaultOpen={true}>
      <div className="space-y-3">
        <div className="flex items-center justify-between mb-3 bg-gray-50 p-2 rounded-lg">
          <div className="flex items-center">
            <Percent size={16} className="ml-1 text-red-500" />
            <span className="text-sm">نمایش تورهای تخفیف‌دار</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={showDiscounted}
              onChange={handleDiscountedChange}
              className="sr-only peer"
            />
            <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none  peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-130%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

        <div className="space-y-2">
          {options.map((range) => (
            <div key={range.id} className="flex items-center">
              <input
                type="radio"
                id={`price-${range.id}`}
                name="price_range"
                value={range.id}
                checked={selectedPriceRange === range.id.toString()}
                onChange={() => handlePriceRangeChange(range.id.toString())}
                className="radio radio-primary radio-sm"
              />
              <label htmlFor={`price-${range.id}`} className="mr-2 text-sm">
                {range.label}
              </label>
            </div>
          ))}
          
          {options.length === 0 && (
            <p className="text-sm text-gray-500">گزینه‌ای موجود نیست</p>
          )}
        </div>
      </div>
    </Accordion>
  );
}
import { useState, useEffect } from 'react';
import { useFilters } from '../../../contexts/FiltersContext';
import Accordion from '../../../components/common/Accordion';
import { Activity } from 'lucide-react';

export default function DifficultyFilter({ options = [] }) {
  const { updateFilters, getFilterValue } = useFilters();
  const [selectedLevels, setSelectedLevels] = useState(
    getFilterValue('difficulty_levels')?.split(',') || []
  );

  // به‌روزرسانی فیلتر سطح سختی
  const handleLevelChange = levelId => {
    const newLevels = selectedLevels.includes(levelId)
      ? selectedLevels.filter(l => l !== levelId)
      : [...selectedLevels, levelId];

    setSelectedLevels(newLevels);
    updateFilters('difficulty_levels', newLevels.length > 0 ? newLevels.join(',') : null);
  };

  // به‌روزرسانی state هنگام تغییر URL
  useEffect(() => {
    setSelectedLevels(getFilterValue('difficulty_levels')?.split(',') || []);
  }, [getFilterValue]);

  return (
    <Accordion
      title={
        <span className="flex items-center">
          <Activity size={18} className="ml-2 !text-blue-600" />
          سطح تورها
        </span>
      }
    >
      <div className="space-y-2">
        {options.map(level => (
          <div key={level.id} className="flex items-center">
            <input
              type="checkbox"
              id={`level-${level.id}`}
              checked={selectedLevels.includes(level.id.toString())}
              onChange={() => handleLevelChange(level.id.toString())}
              className="checkbox checkbox-primary checkbox-sm"
            />
            <label htmlFor={`level-${level.id}`} className="mr-2 text-sm">
              {level.name}
            </label>
          </div>
        ))}

        {options.length === 0 && <p className="text-sm text-gray-500">گزینه‌ای موجود نیست</p>}
      </div>
    </Accordion>
  );
}

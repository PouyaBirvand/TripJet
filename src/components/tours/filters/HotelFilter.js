import { useState, useEffect } from 'react';
import { useFilters } from '../../../contexts/FiltersContext';
import { Search, Star } from 'lucide-react';
import Accordion from '../../../components/common/Accordion';

export default function HotelFilter() {
  const { updateFilters, getFilterValue } = useFilters();
  const [hotelName, setHotelName] = useState(getFilterValue('hotel_name') || '');
  const [hotelStars, setHotelStars] = useState(getFilterValue('hotel_stars')?.split(',') || []);
  const [showNoStar, setShowNoStar] = useState(getFilterValue('show_no_star') === 'true');

  // به‌روزرسانی فیلتر نام هتل
  const handleHotelNameChange = e => {
    setHotelName(e.target.value);
  };

  // ارسال فیلتر نام هتل با فشردن Enter یا کلیک روی آیکون جستجو
  const handleHotelNameSubmit = () => {
    updateFilters('hotel_name', hotelName);
  };

  // به‌روزرسانی فیلتر ستاره هتل
  const handleStarChange = star => {
    const newStars = hotelStars.includes(star)
      ? hotelStars.filter(s => s !== star)
      : [...hotelStars, star];

    setHotelStars(newStars);
    updateFilters('hotel_stars', newStars.length > 0 ? newStars.join(',') : null);
  };

  // به‌روزرسانی فیلتر نمایش هتل‌های بدون ستاره
  const handleNoStarChange = () => {
    const newValue = !showNoStar;
    setShowNoStar(newValue);
    updateFilters('show_no_star', newValue ? 'true' : null);
  };

  // به‌روزرسانی state هنگام تغییر URL
  useEffect(() => {
    setHotelName(getFilterValue('hotel_name') || '');
    setHotelStars(getFilterValue('hotel_stars')?.split(',') || []);
    setShowNoStar(getFilterValue('show_no_star') === 'true');
  }, [getFilterValue]);

  return (
    <Accordion title="هتل و اقامتگاه">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">نام هتل یا اقامتگاه</h4>
          <div className="relative">
            <input
              type="text"
              value={hotelName}
              onChange={handleHotelNameChange}
              onKeyDown={e => e.key === 'Enter' && handleHotelNameSubmit()}
              placeholder="جستجوی نام هتل یا اقامتگاه"
              className="input input-bordered w-full pr-10 text-sm"
            />
            <button
              onClick={handleHotelNameSubmit}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:!text-blue-600"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">ستاره هتل</h4>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map(star => (
              <div key={star} className="flex items-center">
                <input
                  type="checkbox"
                  id={`star-${star}`}
                  checked={hotelStars.includes(star.toString())}
                  onChange={() => handleStarChange(star.toString())}
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <label htmlFor={`star-${star}`} className="mr-2 text-sm flex items-center">
                  {star} ستاره
                  <span className="flex mr-1 text-yellow-400">
                    {Array(star)
                      .fill()
                      .map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                  </span>
                </label>
              </div>
            ))}

            <div className="flex items-center">
              <input
                type="checkbox"
                id="no-star"
                checked={showNoStar}
                onChange={handleNoStarChange}
                className="checkbox checkbox-primary checkbox-sm"
              />
              <label htmlFor="no-star" className="mr-2 text-sm">
                نمایش هتل های بدون ستاره
              </label>
            </div>
          </div>
        </div>
      </div>
    </Accordion>
  );
}

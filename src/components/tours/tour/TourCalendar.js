'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function TourCalendar({ availableDates }) {
  const [selectedDate, setSelectedDate] = useState(null);

  if (!availableDates?.length) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h4 className="font-medium text-gray-900 flex items-center gap-2 text-sm sm:text-base">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span className="hidden xs:inline">انتخاب تاریخ سفر</span>
          <span className="xs:hidden">تاریخ سفر</span>
        </h4>
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-1 hover:bg-gray-200 rounded touch-manipulation">
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-xs sm:text-sm text-gray-600 min-w-[60px] text-center">
            مهر ۱۴۰۳
          </span>
          <button className="p-1 hover:bg-gray-200 rounded touch-manipulation">
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {availableDates.map(date => (
          <button
            key={date.id}
            onClick={() => !date.closed && !date.notfound && setSelectedDate(date.id)}
            disabled={date.closed || date.notfound}
            className={`
              p-2 sm:p-3 rounded-lg text-center transition-all touch-manipulation
              min-h-[50px] sm:min-h-[60px] flex flex-col justify-center
              ${
                date.closed || date.notfound
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : selectedDate === date.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100'
              }
            `}
          >
            <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1 leading-tight">
              {date.day}
            </div>
            <div className="font-medium text-sm sm:text-base leading-tight">
              {date.dayNum}
            </div>
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-3 sm:mt-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-600 rounded flex-shrink-0"></div>
            <span className="text-gray-600 text-[10px] sm:text-xs">انتخاب شده</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white border border-gray-300 rounded flex-shrink-0"></div>
            <span className="text-gray-600 text-[10px] sm:text-xs">در دسترس</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gray-200 rounded flex-shrink-0"></div>
            <span className="text-gray-600 text-[10px] sm:text-xs">تکمیل ظرفیت</span>
          </div>
        </div>
      </div>
    </div>
  );
}

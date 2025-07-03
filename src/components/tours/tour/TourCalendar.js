'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

export default function TourCalendar({ availableDates }) {
  const [selectedDate, setSelectedDate] = useState(null);

  if (!availableDates?.length) return null;

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-gray-900 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          انتخاب تاریخ سفر
        </h4>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-gray-200 rounded">
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-600">مهر ۱۴۰۳</span>
          <button className="p-1 hover:bg-gray-200 rounded">
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {availableDates.map(date => (
          <button
            key={date.id}
            onClick={() => !date.closed && !date.notfound && setSelectedDate(date.id)}
            disabled={date.closed || date.notfound}
            className={`
              p-3 rounded-lg text-center transition-all
              ${
                date.closed || date.notfound
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : selectedDate === date.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }
            `}
          >
            <div className="text-xs text-gray-500 mb-1">{date.day}</div>
            <div className="font-medium">{date.dayNum}</div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <span className="text-gray-600">انتخاب شده</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-white border border-gray-300 rounded"></div>
            <span className="text-gray-600">در دسترس</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-gray-200 rounded"></div>
            <span className="text-gray-600">تکمیل ظرفیت</span>
          </div>
        </div>
      </div>
    </div>
  );
}

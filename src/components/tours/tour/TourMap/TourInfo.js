import { Route } from 'lucide-react';

export default function TourInfo({ tour, tourLocations }) {
  return (
    <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
      <div className="flex items-center gap-2 mb-3">
        <Route className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">اطلاعات مسیر</h4>
      </div>
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">مدت سفر:</span>
          <span className="font-medium">{tour.duration.description}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">تعداد شهرها:</span>
          <span className="font-medium">{tourLocations.length} شهر</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">تاریخ شروع:</span>
          <span className="font-medium">{tour.date}</span>
        </div>
      </div>
    </div>
  );
}

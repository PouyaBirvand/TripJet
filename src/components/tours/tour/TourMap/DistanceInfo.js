import { Navigation } from 'lucide-react';

export default function DistanceInfo({ isMobile }) {
  return (
    <div className="p-3 sm:p-4 bg-yellow-50 rounded-lg border border-yellow-200">
      <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2 text-sm sm:text-base">
        <Navigation className="w-4 h-4 text-yellow-600" />
        اطلاعات مسافت
      </h5>
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">دهلی → آگرا:</span>
          <span className="font-medium">~230 کیلومتر</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">آگرا → جیپور:</span>
          <span className="font-medium">~240 کیلومتر</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">جیپور → دهلی:</span>
          <span className="font-medium">~280 کیلومتر</span>
        </div>
        <div className="pt-2 border-t border-yellow-300">
          <div className="flex justify-between font-medium">
            <span className="text-gray-900">مجموع مسافت:</span>
            <span className="text-yellow-700">~750 کیلومتر</span>
          </div>
        </div>
      </div>
    </div>
  );
}
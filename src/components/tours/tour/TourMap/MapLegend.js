export default function MapLegend({ isMobile }) {
    return (
      <div className={`absolute ${isMobile ? 'bottom-2 left-2' : 'bottom-4 left-4'} bg-white rounded-lg shadow-lg p-2 sm:p-3 z-20`}>
        <h5 className="font-medium text-gray-900 mb-2 text-xs sm:text-sm">راهنما</h5>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
            <span className="text-xs">نقطه شروع</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
            <span className="text-xs">مقاصد میانی</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0"></div>
            <span className="text-xs">آخرین مقصد</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-3 h-0.5 sm:w-4 sm:h-0.5 bg-blue-500 flex-shrink-0"
              style={{ borderTop: '2px dashed #3B82F6' }}
            ></div>
            <span className="text-xs">مسیر سفر</span>
          </div>
        </div>
      </div>
    );
  }
  
import { MapPin, Maximize2, Minimize2, X } from 'lucide-react';

export default function MapHeader({ 
  tour, 
  isFullscreen, 
  onFullscreen, 
  onClose, 
  isMobile 
}) {
  return (
    <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-lg font-semibold text-gray-900 truncate">
            {isMobile ? 'نقشه تور' : 'نقشه مسیر تور'}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 truncate">
            {tour.title} - {tour.destination}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        {!isMobile && (
          <button
            onClick={onFullscreen}
            className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            title={isFullscreen ? 'خروج از حالت تمام صفحه' : 'حالت تمام صفحه'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        )}
        
        <button
          onClick={onClose}
          className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          title="بستن نقشه"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}

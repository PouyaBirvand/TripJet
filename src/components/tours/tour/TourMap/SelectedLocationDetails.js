import { MapPin, Clock } from 'lucide-react';

export default function SelectedLocationDetails({ selectedLocation, isMobile }) {
  return (
    <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
      <div className="flex items-center gap-2 mb-3">
        <MapPin className="w-4 h-4 text-blue-600" />
        <h5 className="font-semibold text-gray-900 text-sm sm:text-base">
          {selectedLocation.name}
        </h5>
      </div>
      
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
          <span className="text-gray-600">{selectedLocation.day}</span>
        </div>
        
        <p className="text-gray-700 leading-relaxed">
          {selectedLocation.description}
        </p>
        
        <div className="mt-3">
          <h6 className="font-medium text-gray-900 mb-2 text-xs sm:text-sm">
            جاذبه‌های اصلی:
          </h6>
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1'} gap-1`}>
            {selectedLocation.attractions.map((attraction, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-600"
              >
                <span className="text-blue-500">•</span>
                <span>{attraction}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

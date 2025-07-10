export default function LocationsList({
    tourLocations,
    selectedLocation,
    setSelectedLocation,
    isMobile
  }) {
    return (
      <div>
        <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
          مکان‌های بازدید
        </h4>
        <div className="space-y-2 sm:space-y-3">
          {tourLocations.map((location, index) => (
            <div
              key={location.id}
              className={`p-2 sm:p-3 border rounded-lg transition-all cursor-pointer ${
                selectedLocation?.id === location.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="flex items-start gap-2 sm:gap-3">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-medium text-white flex-shrink-0 ${
                    index === 0
                      ? 'bg-green-500'
                      : index === tourLocations.length - 1
                        ? 'bg-red-500'
                        : 'bg-blue-500'
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-medium text-gray-900 text-sm sm:text-base truncate">
                      {location.name}
                    </h5>
                    <span className="text-xs text-blue-600 font-medium flex-shrink-0 mr-2">
                      {location.day}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                    {location.description}
                  </p>
                  
                  <div className="space-y-1">
                    {location.attractions.slice(0, isMobile ? 2 : 4).map((attraction, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-500"
                      >
                        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></div>
                        <span className="truncate">{attraction}</span>
                      </div>
                    ))}
                    {location.attractions.length > (isMobile ? 2 : 4) && (
                      <div className="text-xs text-blue-600">
                        +{location.attractions.length - (isMobile ? 2 : 4)} مورد دیگر
                      </div>
                    )}
                  </div>
                  
                  {!isMobile && (
                    <div className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">
                      📍 {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
import { useState } from 'react';
import MapView from './MapView';
import MapSidebar from './MapSidebar';
import MobileMapTabs from './MobileMapTabs';

export default function MapContent({
  tour,
  tourLocations,
  routeCoordinates,
  mapLoaded,
  selectedLocation,
  setSelectedLocation,
  L,
  isMobile
}) {
  const [activeTab, setActiveTab] = useState('map');

  if (!mapLoaded) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 min-h-[300px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm sm:text-base">در حال بارگذاری نقشه...</p>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="flex-1 flex flex-col overflow-hidden">
        <MobileMapTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
        
        <div className="flex-1 overflow-hidden">
          {activeTab === 'map' ? (
            <MapView
              tourLocations={tourLocations}
              routeCoordinates={routeCoordinates}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              L={L}
              isMobile={isMobile}
            />
          ) : (
            <div className="h-full overflow-y-auto">
              <MapSidebar
                tour={tour}
                tourLocations={tourLocations}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                isMobile={isMobile}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex overflow-hidden h-full">
      <MapView
        tourLocations={tourLocations}
        routeCoordinates={routeCoordinates}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        L={L}
        isMobile={isMobile}
      />
      
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <MapSidebar
            tour={tour}
            tourLocations={tourLocations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            isMobile={isMobile}
          />
        </div>
      </div>
    </div>
  );
}
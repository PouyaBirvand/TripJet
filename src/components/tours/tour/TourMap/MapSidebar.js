import TourInfo from './TourInfo';
import LocationsList from './LocationsList';
import SelectedLocationDetails from './SelectedLocationDetails';
import TourPlans from './TourPlans';
import DistanceInfo from './DistanceInfo';

export default function MapSidebar({
  tour,
  tourLocations,
  selectedLocation,
  setSelectedLocation,
  isMobile
}) {
  return (
    <div className={`${isMobile ? 'w-full' : 'w-80'} bg-white ${!isMobile ? 'border-r border-gray-200' : ''} overflow-y-auto`}>
      <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
        <TourInfo tour={tour} tourLocations={tourLocations} />
        
        <LocationsList
          tourLocations={tourLocations}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          isMobile={isMobile}
        />
        
        {selectedLocation && (
          <SelectedLocationDetails
            selectedLocation={selectedLocation}
            isMobile={isMobile}
          />
        )}
        
        <TourPlans tour={tour} isMobile={isMobile} />
        
        <DistanceInfo isMobile={isMobile} />
      </div>
    </div>
  );
}

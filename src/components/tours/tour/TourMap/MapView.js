import dynamic from 'next/dynamic';
import MapLegend from './MapLegend';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false,
});
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });

export default function MapView({
  tourLocations,
  routeCoordinates,
  selectedLocation,
  setSelectedLocation,
  L,
  isMobile
}) {
  const mapCenter = [27.5, 76.5];

  const createCustomIcon = (number, color = '#3B82F6') => {
    if (!L) return null;
    const size = isMobile ? 24 : 30;
    const fontSize = isMobile ? 12 : 14;
    
    return L.divIcon({
      html: `
        <div style="
          background-color: ${color};
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: ${fontSize}px;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        ">${number}</div>
      `,
      className: 'custom-marker',
      iconSize: [size, size],
      iconAnchor: [size/2, size/2],
    });
  };

  return (
    <div className="flex-1 relative">
      <MapContainer
        center={mapCenter}
        zoom={isMobile ? 5 : 6}
        style={{ height: '100%', width: '100%' }}
        className="z-10"
        zoomControl={!isMobile}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OpenStreetMap</a>'
        />
        
        {tourLocations.map((location, index) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={createCustomIcon(
              index + 1,
              index === 0
                ? '#10B981'
                : index === tourLocations.length - 1
                  ? '#EF4444'
                  : '#3B82F6'
            )}
            eventHandlers={{
              click: () => setSelectedLocation(location),
            }}
          >
            <Popup>
              <div className="p-2 min-w-[180px] sm:min-w-[200px]">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                  {location.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">
                  {location.description}
                </p>
                <div className="text-xs text-blue-600 font-medium">
                  {location.day}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <Polyline
          positions={routeCoordinates}
          color="#3B82F6"
          weight={isMobile ? 2 : 3}
          opacity={0.7}
          dashArray="10, 10"
        />
      </MapContainer>
      
      <MapLegend isMobile={isMobile} />
    </div>
  );
}

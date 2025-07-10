'use client';
import { useState, useEffect } from 'react';
import MapHeader from './MapHeader';
import MapContent from './MapContent';
import MapFooter from './MapFooter';

export default function TourMap({ tour, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [L, setL] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const tourLocations = [
    {
      id: 1,
      name: 'دهلی',
      lat: 28.6139,
      lng: 77.209,
      description: 'پایتخت هند - قلعه سرخ و مسجد جامع',
      day: 'روز ۱-۲',
      attractions: ['قلعه سرخ', 'مسجد جامع', 'دروازه هند', 'بازار چاندنی چوک'],
    },
    {
      id: 2,
      name: 'آگرا',
      lat: 27.1767,
      lng: 78.0081,
      description: 'شهر تاج محل',
      day: 'روز ۳-۴',
      attractions: ['تاج محل', 'قلعه آگرا', 'مقبره اعتماد الدوله', 'میدان تاج'],
    },
    {
      id: 3,
      name: 'جیپور',
      lat: 26.9124,
      lng: 75.7873,
      description: 'شهر صورتی - قلعه عنبر و کاخ بادها',
      day: 'روز ۵-۷',
      attractions: ['قلعه عنبر', 'کاخ بادها', 'کاخ شهر', 'جنتر منتر'],
    },
  ];

  const routeCoordinates = [
    [28.6139, 77.209],
    [27.1767, 78.0081],
    [26.9124, 75.7873],
    [28.6139, 77.209],
  ];

  useEffect(() => {
    import('leaflet').then(leaflet => {
      setL(leaflet.default);
      delete leaflet.default.Icon.Default.prototype._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
      setMapLoaded(true);
    });
  }, []);

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      if (isFullscreen) {
        setIsFullscreen(false);
      } else {
        onClose();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-md bg-opacity-75 flex items-center justify-center p-2 sm:p-4">
      <div
        className={`bg-white rounded-lg shadow-2xl transition-all duration-300 overflow-hidden ${
          isFullscreen 
            ? 'w-full h-full rounded-none' 
            : 'w-full h-full sm:max-w-6xl sm:h-[85vh] max-w-full'
        }`}
      >
        <MapHeader
          tour={tour}
          isFullscreen={isFullscreen}
          onFullscreen={handleFullscreen}
          onClose={onClose}
          isMobile={isMobile}
        />
        
        <MapContent
          tour={tour}
          tourLocations={tourLocations}
          routeCoordinates={routeCoordinates}
          mapLoaded={mapLoaded}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          L={L}
          isMobile={isMobile}
        />
        
        <MapFooter
          tourLocations={tourLocations}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

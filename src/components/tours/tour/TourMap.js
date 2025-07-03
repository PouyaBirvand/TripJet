'use client';
import { useState, useEffect } from 'react';
import { X, MapPin, Navigation, Maximize2, Minimize2, Route, Clock } from 'lucide-react';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), {
  ssr: false,
});

const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });

const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const Polyline = dynamic(() => import('react-leaflet').then(mod => mod.Polyline), { ssr: false });

export default function TourMap({ tour, onClose }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [L, setL] = useState(null);

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
    [28.6139, 77.209], // دهلی
    [27.1767, 78.0081], // آگرا
    [26.9124, 75.7873], // جیپور
    [28.6139, 77.209], // بازگشت به دهلی
  ];

  const mapCenter = [27.5, 76.5];

  useEffect(() => {
    // Loading Leaflet
    import('leaflet').then(leaflet => {
      setL(leaflet.default);

      //Defualt Icon
      delete leaflet.default.Icon.Default.prototype._getIconUrl;
      leaflet.default.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
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

  // Icon For Marker
  const createCustomIcon = (number, color = '#3B82F6') => {
    if (!L) return null;

    return L.divIcon({
      html: `
        <div style="
          background-color: ${color};
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 14px;
          border: 3px solid white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        ">${number}</div>
      `,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div
        className={`bg-white rounded-lg shadow-2xl transition-all duration-300 overflow-y-scroll ${
          isFullscreen ? 'w-full h-full rounded-none' : 'w-full max-w-6xl h-[85vh]'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">نقشه مسیر تور</h3>
              <p className="text-sm text-gray-600">
                {tour.title} - {tour.destination}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleFullscreen}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title={isFullscreen ? 'خروج از حالت تمام صفحه' : 'حالت تمام صفحه'}
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              title="بستن نقشه"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Map Content */}
        <div className="flex-1 relative overflow-hidden">
          {!mapLoaded ? (
            // Loading State
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">در حال بارگذاری نقشه...</p>
              </div>
            </div>
          ) : (
            <div className="h-full flex">
              {/* Map Area */}
              <div className="flex-1 relative">
                <MapContainer
                  center={mapCenter}
                  zoom={6}
                  style={{ height: '100%', width: '100%' }}
                  className="z-10"
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />

                  {/* Marker location*/}
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
                        <div className="p-2 min-w-[200px]">
                          <h4 className="font-semibold text-gray-900 mb-2">{location.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{location.description}</p>
                          <div className="text-xs text-blue-600 font-medium">{location.day}</div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}

                  {/*Road Between Cities*/}
                  <Polyline
                    positions={routeCoordinates}
                    color="#3B82F6"
                    weight={3}
                    opacity={0.7}
                    dashArray="10, 10"
                  />
                </MapContainer>

                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 z-20">
                  <h5 className="font-medium text-gray-900 mb-2 text-sm">راهنما</h5>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>نقطه شروع</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>مقاصد میانی</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>آخرین مقصد</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-0.5 bg-blue-500"
                        style={{ borderTop: '2px dashed #3B82F6' }}
                      ></div>
                      <span>مسیر سفر</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                  {/* Tour Info */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Route className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">اطلاعات مسیر</h4>
                    </div>
                    <div className="space-y-2 text-sm">
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

                  {/* Locations List */}
                  <h4 className="font-semibold text-gray-900 mb-4">مکان‌های بازدید</h4>

                  <div className="space-y-3">
                    {tourLocations.map((location, index) => (
                      <div
                        key={location.id}
                        className={`p-3 border rounded-lg transition-all cursor-pointer ${
                          selectedLocation?.id === location.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                        onClick={() => setSelectedLocation(location)}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium text-white ${
                              index === 0
                                ? 'bg-green-500'
                                : index === tourLocations.length - 1
                                  ? 'bg-red-500'
                                  : 'bg-blue-500'
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h5 className="font-medium text-gray-900">{location.name}</h5>
                              <span className="text-xs text-blue-600 font-medium">
                                {location.day}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{location.description}</p>

                            {/* جاذبه‌های گردشگری */}
                            <div className="space-y-1">
                              {location.attractions.map((attraction, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-2 text-xs text-gray-500"
                                >
                                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                  <span>{attraction}</span>
                                </div>
                              ))}
                            </div>

                            <div className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-100">
                              📍 {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Selected Location Details */}
                  {selectedLocation && (
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <h5 className="font-semibold text-gray-900">{selectedLocation.name}</h5>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{selectedLocation.day}</span>
                        </div>

                        <p className="text-gray-700 leading-relaxed">
                          {selectedLocation.description}
                        </p>

                        <div className="mt-3">
                          <h6 className="font-medium text-gray-900 mb-2">جاذبه‌های اصلی:</h6>
                          <div className="grid grid-cols-1 gap-1">
                            {selectedLocation.attractions.map((attraction, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <span className="text-blue-500">•</span>
                                <span>{attraction}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tour Plans */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">برنامه تفصیلی سفر</h4>
                    <div className="space-y-3">
                      {tour.tourPlans?.map((plan, index) => (
                        <div
                          key={plan.id}
                          className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900 mb-1">{plan.title}</p>
                              <p className="text-xs text-gray-600">{plan.day}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Distance Info */}
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h5 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-yellow-600" />
                      اطلاعات مسافت
                    </h5>
                    <div className="space-y-2 text-sm">
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
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span>📍 {tourLocations.length} مقصد گردشگری</span>
            </div>
            <div className="flex items-center gap-4">
              <span>⌨️ ESC برای بستن</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

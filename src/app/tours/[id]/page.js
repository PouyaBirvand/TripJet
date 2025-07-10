'use client';
import { use, useEffect, useState } from 'react';
import { useTour } from '../../../hooks/useTour';
import TourGallery from '../../../components/tours/tour/TourGallery';
import TourHeader from '../../../components/tours/tour/TourHeader';
import TourContent from '../../../components/tours/tour/TourContent';
import TourBooking from '../../../components/tours/tour/TourBooking';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import ErrorMessage from '../../../components/ui/ErrorMessage';
import TourMap from '@/components/tours/tour/TourMap/TourMap';

export default function TourPage({ params }) {
  const id = use(params);
  const { tour, isLoading, error } = useTour(id.id);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    window.scrollTo = 0;
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !tour) {
    return <ErrorMessage message="خطا در بارگذاری اطلاعات تور" />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Gallery Section */}
      <TourGallery tour={tour} />

      {/* Main Content */}
      <div className="mx-auto mt-8">
        {/* Tour Header */}
        <TourHeader tour={tour} onShowMap={() => setShowMap(true)} />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <TourContent tour={tour} />
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <TourBooking tour={tour} />
          </div>
        </div>
      </div>

      {/* Map Modal */}
      {showMap && <TourMap tour={tour} onClose={() => setShowMap(false)} />}
    </div>
  );
}

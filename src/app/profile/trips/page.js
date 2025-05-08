'use client';
import { useState } from 'react';
import { Loader } from 'lucide-react';
import TripCard from '../../../components/profile/ProfileTrips/TripCard';
import TripDetailsModal from '../../../components/profile/ProfileTrips/TripDetailsModal';
import LoadingTripCard from '../../../components/profile/ProfileTrips/TripCard/LoadingTripCard';
import { useUserTrips } from '../../../hooks/ProfileHooks/useUserTrips';

export default function TripsPage() {
  const { trips, isTripsLoading, tripsError, getTripDetails } = useUserTrips();
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  const handleViewDetails = async tripId => {
    try {
      setIsLoadingDetails(true);
      const tripDetails = await getTripDetails(tripId);
      setSelectedTrip(tripDetails);
    } catch (error) {
      console.error('Error fetching trip details:', error);
      alert('خطا در دریافت جزئیات تور');
    } finally {
      setIsLoadingDetails(false);
    }
  };

  const closeModal = () => {
    setSelectedTrip(null);
  };

  return (
    <div className=" bg-white rounded-xl p-6 border-1 border-base-300">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">تورهای رزرو شده</h1>
        <p className="text-gray-500 mt-1">لیست تورهایی که رزرو کرده‌اید</p>
      </div>

      {isTripsLoading ? (
        <div className="grid grid-cols-1 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <LoadingTripCard key={index} />
          ))}
        </div>
      ) : tripsError ? (
        <div className="bg-error/10 text-error p-4 rounded-lg">
          <p>خطا در دریافت اطلاعات تورها. لطفا دوباره تلاش کنید.</p>
        </div>
      ) : trips && trips.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {trips.map(trip => (
            <TripCard key={trip.id} trip={trip} onViewDetails={handleViewDetails} />
          ))}
        </div>
      ) : (
        <div className="bg-base-200 p-8 rounded-lg text-center">
          <p className="text-lg">شما هنوز هیچ توری رزرو نکرده‌اید.</p>
          <p className="mt-2 text-gray-500">برای مشاهده تورهای موجود به صفحه تورها مراجعه کنید.</p>
        </div>
      )}

      {isLoadingDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-3">
            <Loader className="animate-spin !text-blue-600" size={24} />
            <span>در حال دریافت اطلاعات...</span>
          </div>
        </div>
      )}

      {selectedTrip && <TripDetailsModal trip={selectedTrip} onClose={closeModal} />}
    </div>
  );
}

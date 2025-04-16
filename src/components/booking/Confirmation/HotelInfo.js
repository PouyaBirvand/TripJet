'use client';
import { Hotel, Calendar, Clock, Bed } from 'lucide-react';
import useBookingDetails from '../../../hooks/useBookingDetails';
import ErrorMessage from '../../../components/ui/ErrorMessage';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';

export default function HotelInfo({ bookingId }) {
  const { bookingDetails, isLoading, error } = useBookingDetails(bookingId);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const {
    name = 'هتل نامشخص',
    roomType = 'نوع اتاق نامشخص',
    checkIn = 'تاریخ نامشخص',
    checkOut = 'تاریخ نامشخص',
    checkInTime = 'ساعت نامشخص',
    checkOutTime = 'ساعت نامشخص',
  } = bookingDetails?.hotel || {};

  return (
    <div className="bg-white rounded-xl border-slate-300 border overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <div className="bg-blue-100 p-2 rounded-full">
            <Hotel size={20} className="text-blue-600" />
          </div>
          اطلاعات هتل
        </h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Bed size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">محل اقامت</h4>
                <p className="font-medium">{name}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Calendar size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">تاریخ ورود</h4>
                <p className="font-medium">{checkIn}</p>
                <p className="text-sm text-gray-500 mt-1">ساعت {checkInTime}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Clock size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">نوع اتاق</h4>
                <p className="font-medium">{roomType}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Calendar size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">تاریخ خروج</h4>
                <p className="font-medium">{checkOut}</p>
                <p className="text-sm text-gray-500 mt-1">ساعت {checkOutTime}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import { Mountain, Clock, Plane, Calendar, Briefcase, Building } from 'lucide-react';
import ErrorMessage from '../../../components/ui/ErrorMessage';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import useBookingDetails from '../../../hooks/BookingHooks/useBookingDetails';

export default function TicketInfo({ bookingId }) {
  const { bookingDetails, isLoading, error } = useBookingDetails(bookingId);
  console.log('Booking Details:', bookingDetails);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const {
    departureDate = 'تاریخ نامشخص',
    departureTime = 'ساعت نامشخص',
    flightDuration = 'مدت نامشخص',
    flightNumber = 'شماره نامشخص',
    allowedBaggage = 'بار مجاز نامشخص',
    airline = 'شرکت نامشخص',
  } = bookingDetails?.ticket || {};

  return (
    <div className="bg-white rounded-xl border-slate-300 border overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <div className="bg-blue-100 p-2 rounded-full">
            <Mountain size={20} className="text-blue-600" />
          </div>
          اطلاعات بلیط
        </h3>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Calendar size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">تاریخ رفت</h4>
                <p className="font-medium">{departureDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Clock size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">ساعت پرواز</h4>
                <p className="font-medium">{departureTime}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Clock size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">طول مدت پرواز</h4>
                <p className="font-medium">{flightDuration}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Plane size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">شماره پرواز</h4>
                <p className="font-medium">{flightNumber}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Briefcase size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">میزان بار مجاز</h4>
                <p className="font-medium">{allowedBaggage}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-gray-100 p-2 rounded-full mt-1">
                <Building size={18} className="text-gray-600" />
              </div>
              <div>
                <h4 className="text-sm text-gray-500 mb-1">شرکت هواپیمایی</h4>
                <p className="font-medium">{airline}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

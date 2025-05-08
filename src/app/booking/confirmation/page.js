'use client';
import PassengerInfo from '../../../components/booking/Confirmation/PassengerInfo';
import TicketInfo from '../../../components/booking/Confirmation/TicketInfo';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import ErrorMessage from '../../../components/ui/ErrorMessage';
import HotelInfo from '../../../components/booking/Confirmation/HotelInfo';
import PaymentConfirmation from '../../../components/booking/Confirmation/PaymentConfirmation';
import useBookingDetails from '../../../hooks/BookingHooks/useBookingDetails';


export default function ConfirmationPage({ bookingId }) {
  const { bookingDetails, isLoading, error } = useBookingDetails(bookingId);
  console.log('Booking Details:', bookingDetails);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div dir="rtl" className='container mx-auto px-4 py-8 max-w-5xl'>
      <h2 className="text-2xl font-bold mb-8 text-gray-800">تأیید نهایی رزرو</h2>
      
      <div className="flex flex-col gap-8">
        <TicketInfo bookingId={bookingId} />
        <PassengerInfo bookingId={bookingId} />
        <HotelInfo bookingId={bookingId} />
        <PaymentConfirmation 
          bookingId={bookingId}
        />
      </div>
    </div>
  );
}
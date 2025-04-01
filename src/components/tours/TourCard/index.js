import TourImage from './TourImage';
import TourHeader from './TourHeader';
import TourHotelInfo from './TourHotelInfo';
import TourServices from './TourServices';
import TourPricing from './TourPricing';

export default function TourCard({ tour }) {
  return (
    <div dir="rtl" className="card lg:card-side bg-base-100 shadow-xl transition-all duration-300 overflow-hidden h-full border border-gray-100">
      <TourImage 
        id={tour.id}
        title={tour.title}
        destination={tour.destination}
        hasDiscount={tour.price.hasDiscount}
        discountPercentage={Math.round(((tour.price.original - tour.price.discounted) / tour.price.original) * 100)}
        isLastMinute={tour.isLastMinute}
      />
      
      <div className="card-body p-5 w-full lg:w-3/5">
        <div className="flex flex-col h-full justify-between">
          <div>
            <TourHeader date={tour.date} duration={tour.duration} />
            <TourHotelInfo hotel={tour.hotel} remaining={tour.remaining} />
            <TourServices services={tour.services} />
          </div>
          
          <TourPricing 
            id={tour.id}
            price={tour.price}
          />
        </div>
      </div>
    </div>
  );
}

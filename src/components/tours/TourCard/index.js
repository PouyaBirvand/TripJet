import TourImage from './TourImage';
import TourHeader from './TourHeader';
import TourHotelInfo from './TourHotelInfo';
import TourServices from './TourServices';
import TourPricing from './TourPricing';

export default function TourCard({ tour }) {
  return (
    <div dir="rtl" className="card bg-white rounded-xl overflow-hidden h-full border border-slate-200">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-1">
            <TourImage
              id={tour.id}
              title={tour.title}
              destination={tour.destination}
              hasDiscount={tour.price.hasDiscount}
              discountPercentage={Math.round(((tour.price.original - tour.price.discounted) / tour.price.original) * 100)}
              isLastMinute={tour.isLastMinute}
            />
          </div>
          
          <div className="md:w-2/3 p-4">
            <TourHeader 
              title={tour.title}
              destination={tour.destination}
              date={tour.date} 
              duration={tour.duration}
              hasDiscount={tour.price.hasDiscount}
              discountPercentage={Math.round(((tour.price.original - tour.price.discounted) / tour.price.original) * 100)}
              isLastMinute={tour.isLastMinute}
            />
            <TourHotelInfo hotel={tour.hotel} remaining={tour.remaining} />
          </div>
        </div>
        
        <div className="p-4 pt-0">
          <div className="grid md:grid-cols-2 gap-4">
            <TourServices services={tour.services} />
            <TourPricing
              id={tour.id}
              price={tour.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import TourImage from './TourImage';
import TourHeader from './TourHeader';
import TourHotelInfo from './TourHotelInfo';
import TourServices from './TourServices';
import TourPricing from './TourPricing';

export default function TourCard({ tour }) {
  return (
    <div dir="rtl" className="card bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full border border-gray-100">
      <div className="flex flex-col">
        {/* بخش بالایی: عکس و اطلاعات اصلی در کنار هم */}
        <div className="flex flex-col md:flex-row">
          {/* عکس - عرض کامل در موبایل، 1/3 در دسکتاپ */}
          <div className="md:w-1/3">
            <TourImage
              id={tour.id}
              title={tour.title}
              destination={tour.destination}
              hasDiscount={tour.price.hasDiscount}
              discountPercentage={Math.round(((tour.price.original - tour.price.discounted) / tour.price.original) * 100)}
              isLastMinute={tour.isLastMinute}
            />
          </div>
          
          {/* اطلاعات اصلی - عرض کامل در موبایل، 2/3 در دسکتاپ */}
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
        
        {/* بخش پایینی: سرویس‌ها و قیمت‌گذاری */}
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

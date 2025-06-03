import { Calendar, Clock } from 'lucide-react';

const TourInfo = ({ title, duration, date, price }) => {
  return (
    <div className="p-3 flex-grow flex flex-col">
      <h3
        className="
        text-base sm:text-lg font-bold 
        text-gray-800 mb-2 line-clamp-2
        leading-tight
      "
      >
        {title}
      </h3>

      <div className="mt-auto space-y-1.5">
        <div className="flex items-center gap-1.5 text-gray-600">
          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm">{duration}</span>
        </div>

        <div className="flex items-center gap-1.5 text-gray-600">
          <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm">{date}</span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-500 text-xs sm:text-sm">شروع قیمت از</span>
          <div className="text-left">
            {price.hasDiscount && (
              <span className="line-through text-gray-400 text-xs block">
                {price.original.toLocaleString()} تومان
              </span>
            )}
            <span className="text-blue-600 font-bold text-sm sm:text-base">
              {(price.discounted || price.original).toLocaleString()} تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourInfo;

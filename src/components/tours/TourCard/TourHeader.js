import { Calendar, Clock, Tag, MapPin, Zap } from 'lucide-react';

export default function TourHeader({ title, destination, date, duration, hasDiscount, discountPercentage, isLastMinute }) {
  return (
    <div className="space-y-3">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        
        <div className="flex gap-2">
          {hasDiscount && (
            <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
              <Zap size={12} className="fill-current" />
              {discountPercentage}% تخفیف
            </span>
          )}
          
          {isLastMinute && (
            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-600 text-xs font-semibold px-2 py-1 rounded-full">
              <Tag size={12} />
              لحظه آخری
            </span>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-gray-600 text-sm">
        <MapPin size={16} className="text-primary" />
        <span>{destination}</span>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-5">
        <div className="flex items-center gap-1.5 text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-1.5 text-sm bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg">
          <Clock size={14} />
          <span>{duration.description}</span>
        </div>
      </div>
    </div>
  );
}

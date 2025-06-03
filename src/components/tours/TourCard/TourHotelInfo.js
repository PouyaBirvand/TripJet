import { Star, Users, AlertCircle } from 'lucide-react';

export default function TourHotelInfo({ hotel, remaining }) {
  return (
    <div className="flex flex-wrap justify-between items-center gap-3">
      <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
        <div className="flex">
          {Array.from({ length: hotel.stars }).map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-current" />
          ))}
        </div>
        <span className="text-sm font-medium text-gray-700">{hotel.description}</span>
      </div>

      <div className="flex items-center gap-2 text-red-600 font-medium bg-red-50 px-3 py-2 rounded-lg">
        <AlertCircle size={16} className="text-red-500" />
        <span className="text-sm">{remaining} نفر باقیمانده</span>
      </div>
    </div>
  );
}

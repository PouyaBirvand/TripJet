import { Star, Users } from 'lucide-react';

export default function TourHotelInfo({ hotel, remaining }) {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4">
      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-md">
        <div className="flex">
          {Array.from({ length: hotel.stars }).map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />
          ))}
        </div>
        <span className="text-sm text-gray-700">{hotel.description}</span>
      </div>
      
      <div className="flex items-center gap-1 text-red-500 font-medium bg-red-50 px-2 py-1 rounded-md mt-2 sm:mt-0">
        <Users size={14} />
        <span className="text-sm">{remaining} نفر باقیمانده</span>
      </div>
    </div>
  );
}

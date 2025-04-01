import { Tag } from 'lucide-react';

export default function TourBadges({ hasDiscount, discountPercentage, isLastMinute }) {
  return (
    <div className="absolute top-0 left-0 right-0 flex justify-between z-30 pointer-events-none">
      {/* بج تخفیف - سمت چپ */}
      {hasDiscount && (
        <div className="bg-red-500 md:h-min text-white px-2 py-1 rounded-bl-md text-xs font-bold shadow-sm pointer-events-auto">
          {discountPercentage}% تخفیف
        </div>
      )}
      
      {/* فضای خالی در وسط */}
      <div className="flex-grow"></div>
      
      {/* بج تور لحظه آخری - سمت راست */}
      {isLastMinute && (
        <div className="bg-red-500 md:h-min text-white px-2 py-1 rounded-br-md text-xs font-medium flex items-center gap-1 shadow-sm pointer-events-auto">
          <Tag size={14} />
          <span>تور لحظه آخری</span>
        </div>
      )}
    </div>
  );
}

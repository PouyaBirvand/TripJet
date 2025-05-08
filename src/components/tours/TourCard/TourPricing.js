import Link from 'next/link';
import { formatPrice } from '../../../lib/utils/numbers';
import { ArrowLeft } from 'lucide-react';

export default function TourPricing({ id, price }) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex justify-between items-end mb-3 bg-gray-50 p-4 rounded-xl">
        <div className="text-xs font-medium text-gray-500">شروع قیمت از</div>
        <div className="flex flex-col items-end">
          {price.hasDiscount && (
            <div className="text-xs text-gray-500 line-through">{formatPrice(price.original)}</div>
          )}
          <div className="text-xl font-bold !text-blue-600">{formatPrice(price.discounted)}</div>
        </div>
      </div>

      <Link href={`/tours/${id}`} className="w-full">
        <button className="btn bg-blue-600 text-white w-full !py-5 rounded-lg hover:bg-blue-600 text-white-focus transition-colors flex items-center justify-center gap-2">
          <span>مشاهده جزئیات و رزرو</span>
          <ArrowLeft size={16} />
        </button>
      </Link>
    </div>
  );
}

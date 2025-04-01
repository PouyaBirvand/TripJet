import Link from 'next/link';
import { formatPrice } from '../../../lib/utils/numbers';

export default function TourPricing({ id, price }) {
  return (
    <div className="mt-auto">
      <div className="flex justify-between items-end mb-4 bg-gray-50 p-3 rounded-lg">
        <div className="text-xs font-medium text-gray-500">شروع قیمت از</div>
        <div className="flex flex-col items-end">
          {price.hasDiscount && (
            <div className="text-xs text-gray-500 line-through">{formatPrice(price.original)}</div>
          )}
          <div className="text-xl font-bold text-primary">{formatPrice(price.discounted)}</div>
        </div>
      </div>
      
      <Link href={`/tours/${id}`} className="w-full">
        <button className="btn btn-primary w-full rounded-md hover:bg-primary-focus transition-colors">
          مشاهده جزئیات و رزرو
        </button>
      </Link>
    </div>
  );
}

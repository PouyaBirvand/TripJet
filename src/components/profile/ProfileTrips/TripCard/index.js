'use client';
import { ChevronLeft } from 'lucide-react';
import { formatPrice } from '../../../../lib/utils/numbers';
import Image from 'next/image';
import getStatusInfo from '../../../../lib/utils/statusInfo';

const TripCard = ({ trip, onViewDetails }) => {
  const statusInfo = getStatusInfo(trip.status);

  return (
    <div className="border-b border-slate-100 py-4 px-3 sm:px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-4">
        {/* تصویر و عنوان */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <Image src={trip.image} alt="tripimage" width={90} height={120} className="rounded-lg" />
          <h3 className="text-lg font-normal text-center sm:text-left">{trip.title}</h3>
        </div>

        {/* مبلغ پرداختی */}
        <div className="flex flex-col items-center sm:items-end justify-self-center">
          <div className="text-sm text-slate-400 mb-1">مبلغ پرداختی</div>
          <div className="font-medium text-lg !text-blue-600">
            {formatPrice(trip.paymentAmount)}
          </div>
        </div>

        {/* وضعیت سفر */}
        <div className="flex items-center gap-1 justify-center sm:justify-self-center">
          <span className={`${statusInfo.color} text-sm`}>
            {statusInfo.icon}
            {statusInfo.text}
          </span>
        </div>

        {/* دکمه مشاهده جزئیات */}
        <div className="flex justify-center sm:justify-end">
          <button
            onClick={() => onViewDetails(trip.id)}
            className="!text-blue-600 flex items-center gap-2 text-base sm:text-sm"
          >
            مشاهده جزئیات
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;

import { Download, Calendar } from 'lucide-react';
import { formatPrice } from '../../../../lib/utils/numbers';

const TripInfo = ({ trip, statusInfo }) => (
  <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-base-200">
    <div className="flex flex-col md:flex-row justify-between gap-6">
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4">{trip.title}</h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">کد رهگیری</div>
            <div className="font-medium">{trip.trackingCode || '۸۷۵۶۳۱۰۹'}</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">زمان خرید</div>
            <div className="font-medium">{trip.bookingDate || '۱۴۰۳/۰۴/۱۰ - ۱۵:۴۰'}</div>
          </div>
        </div>
        <button className="btn btn-outline border-primary !text-blue-600 btn-md rounded-lg font-normal mt-6">
          <Download size={16} className="ml-2" />
          دانلود ووچر
        </button>
      </div>
      <div className="flex-1 border-r-0 md:border-r border-base-200 md:pr-6">
        <h3 className="text-lg font-bold mb-4">اطلاعات تور</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="text-sm text-gray-500 mb-1">زمان حرکت</div>
            <div className="font-medium flex items-center">
              <Calendar size={16} className="ml-1" />
              {trip.tripDate || 'چهارشنبه - ۱۴۰۳/۰۴/۱۲'}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-1">مدت تور</div>
            <div className="font-medium flex items-center">
              <Calendar size={16} className="ml-1" />
              {trip.duration || '۸ روز'}
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div>
              <div className="text-sm text-gray-500 mb-1">مبلغ پرداختی</div>
              <div className="font-bold !text-blue-600 text-lg">
                {formatPrice(trip.paymentAmount)}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className={`flex items-center gap-1 ${statusInfo.color} font-medium`}>
                {statusInfo.icon}
                {statusInfo.text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TripInfo;

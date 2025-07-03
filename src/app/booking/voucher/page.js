'use client';

import { ActionButton } from '../../../components/booking/Voucher/ActionButton';
import { SuccessIcon } from '../../../components/booking/Voucher/SuccessIcon';
import { SuccessMessage } from '../../../components/booking/Voucher/SuccessMessage';
import { TourCardHeader } from '../../../components/booking/Voucher/TourCardHeader';
import { TourInfoItem } from '../../../components/booking/Voucher/TourInfoItem';
import { Calendar, MapPin, Download, Home } from 'lucide-react';

export default function VoucherPage() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6 items-center justify-center">
        <SuccessIcon />
        <SuccessMessage />

        <div className="bg-white rounded-xl border border-slate-200 w-full overflow-hidden">
          <TourCardHeader
            imageUrl="/japen.png"
            title="تور مثلث طلایی هند"
            duration="مدت سفر: ۴ روز و ۳ شب"
            trackingCode="۸۷۴۵۱۲۳"
          />

          <div className="p-6">
            <div className="space-y-4">
              <TourInfoItem
                icon={Calendar}
                title="تاریخ حرکت"
                description="چهارده تا شانزده مهر هزار چهارصد و سه"
              />

              <TourInfoItem
                icon={MapPin}
                title="محل حرکت"
                description="فرودگاه بین المللی امام خمینی"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full gap-3 mt-2">
          <ActionButton variant="secondary" icon={Home} label="بازگشت به صفحه اصلی" href="/" />
          <ActionButton
            variant="primary"
            icon={Download}
            label="دانلود بلیط"
            onClick={() => console.log('Download ticket')}
          />
        </div>
      </div>
    </div>
  );
}

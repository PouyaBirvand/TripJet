'use client';

import { Check, BadgeInfo } from 'lucide-react';
import { formatPrice } from '../../../lib/utils/numbers';
import { useFormikContext } from 'formik';
import { useRouter } from 'next/navigation';

export default function TourReservationConfirmation() {
  const { isValid, values } = useFormikContext();
  const router = useRouter();

  const totalPrice = 300000000;

  const handleContinue = () => {
    if (isValid && values.adults.length > 0) {
      router.push('/booking/confirmation');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
      <div className="w-full lg:w-2/3">
        <div className="flex items-start gap-3">
          <BadgeInfo className="text-blue-600 items-center flex mt-1 flex-shrink-0" size={20} />
          <p className="text-gray-600 flex">
            با کلیک روی تایید و ادامه خرید با
            <a href="#" className="text-blue-600 mx-1 hover:underline">
              قوانین سایت
            </a>
            و
            <a href="#" className="text-blue-600 mx-1 hover:underline">
              قوانین تور گروهی
            </a>
            موافقت کرده‌اید.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col items-center sm:justify-between lg:items-end gap-4">
        <div className="flex flex-col md:items-center items-start">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl font-bold text-blue-600">{formatPrice(totalPrice)}</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValid || values.adults.length === 0}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-white font-medium transition-all
            ${
              isValid && values.adults.length > 0
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-300 cursor-not-allowed'
            }`}
          onClick={handleContinue}
        >
          <Check size={18} />
          تایید و ادامه خرید
        </button>
      </div>
    </div>
  );
}

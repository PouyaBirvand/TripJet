'use client';
import { CircleDollarSign, X } from 'lucide-react';

export default function PaymentSuccessModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4 sm:p-6"
      dir="rtl"
    >
      <div className="bg-white rounded-xl animate-slide-up overflow-hidden w-full max-w-[40rem] md:p-15 relative">
        <div className="absolute top-4 sm:top-5 left-4 sm:left-5">
          <button
            onClick={onClose}
            className="rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-base-content/10 transition-colors p-1 focus-ring border text-slate-400 border-slate-400"
            aria-label="بستن"
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>
        <div className="p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <CircleDollarSign className="text-blue-600" size={70} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold mb-2">پرداخت با موفقیت انجام شد</h3>
          <p className="text-gray-600 mb-6">
            بخشی از مبلغ سفر شما به‌صورت ریالی و بخشی دیگر به‌صورت ارزی است. لطفا مبلغ ریالی را در
            ادامه از درگاه بانک یا اعتبار حساب کاربری، و مبلغ دلاری را به‌صورت حضوری در آدرسی که
            برای شما پیامک خواهد شد پرداخت کنید.
          </p>
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-normal py-3 px-6 rounded-lg transition-colors w-full"
          >
            تایید و پرداخت
          </button>
        </div>
      </div>
    </div>
  );
}

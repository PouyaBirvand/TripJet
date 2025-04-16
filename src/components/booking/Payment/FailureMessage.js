'use client';

import { AlertCircle } from 'lucide-react';

export const FailureMessage = () => {
  return (
    <div className="text-center">
      <h2 className="text-red-600 text-xl font-semibold mb-1">پرداخت شما ناموفق بود</h2>
      <div className="flex items-start gap-2 mt-5 text-center justify-center">
        <AlertCircle className="text-amber-500 mt-0.5 flex-shrink-0" size={18} />
        <span className="text-slate-600">
          در صورتیکه پول از شما کسر شده مبلغ حداکثر تا ۷۲ ساعت آینده به حساب شما باز میگردد
        </span>
      </div>
    </div>
  );
};
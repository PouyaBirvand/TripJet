'use client';

import { Home, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const ActionButtons = () => {
  const router = useRouter();
  
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-md gap-3 mt-4">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-300 bg-white hover:bg-gray-50 text-slate-700 rounded-lg transition-colors w-full"
      >
        <Home size={18} />
        بازگشت به صفحه اصلی
      </Link>
      <button
        type="button"
        onClick={() => router.push("/booking/confirmation")}
        className="flex items-center justify-center gap-2 cursor-pointer py-3 px-4 bg-blue-600 hover:bg-blue-600 text-white rounded-lg transition-colors w-full"
      >
        <CreditCard size={18} />
        پرداخت مجدد
      </button>
    </div>
  );
};
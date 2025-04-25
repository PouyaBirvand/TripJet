import { formatPrice } from '../../../lib/utils/numbers';
import { WalletMinimal } from 'lucide-react';

export function UserCredit({ credit }) {
  return (
    <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto sm:border-l-2 border-slate-200 sm:pl-4 mb-2 sm:mb-0">
      <WalletMinimal className="rounded-xl bg-blue-600 text-white p-2 sm:p-3 md:p-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
      <div className="flex flex-col text-gray-700">
        <span className="text-gray-500 text-sm sm:text-base">اعتبار کاربری</span>
        <span className="text-base sm:text-lg">{formatPrice(credit)}</span>
      </div>
    </div>
  );
}

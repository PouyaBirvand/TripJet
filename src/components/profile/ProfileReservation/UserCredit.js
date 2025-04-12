import { formatPrice } from '../../../lib/utils/numbers';
import { WalletMinimal } from 'lucide-react';

export function UserCredit({ credit }) {
    return (
      <div className="flex items-center gap-4 border-l-2 border-slate-200 pl-4">
        <WalletMinimal className="rounded-xl bg-blue-600 text-white p-4 w-16 h-16" />
        <div className="flex flex-col text-gray-700">
          <span className="text-gray-500">اعتبار کاربری</span>
          <span className="text-lg">{formatPrice(credit)}</span>
        </div>
      </div>
    );
  }
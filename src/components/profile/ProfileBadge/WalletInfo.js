import { Wallet, Plus } from 'lucide-react';
import { formatPrice } from '../../../lib/utils/numbers';

export default function WalletInfo({ profile }) {
  return (
    <div className="w-full">
      <h6 className="flex gap-1 mr-2">
        <Wallet className="!text-blue-600" size={21} />
        کیف پول
      </h6>
      <button
        type="button"
        className="w-full py-3 px-5 bg-sky-100 !text-blue-600 border-none rounded-lg flex items-center justify-between flex-row-reverse"
      >
        {formatPrice(profile?.walletBalance || '322000000')}
        <Plus
          size={23}
          strokeWidth={2}
          className="!text-blue-600 border-2 border-primary rounded-lg"
        />
      </button>
    </div>
  );
}

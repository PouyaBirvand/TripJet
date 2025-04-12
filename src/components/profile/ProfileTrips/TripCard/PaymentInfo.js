import { formatPrice } from '../../../../lib/utils/numbers';

const PaymentInfo = ({ amount }) => (
  <div className="flex flex-col items-end justify-self-center">
    <div className="text-sm text-slate-400 mb-1">مبلغ پرداختی</div>
    <div className="font-medium text-lg !text-blue-600">{formatPrice(amount)}</div>
  </div>
);

export default PaymentInfo;

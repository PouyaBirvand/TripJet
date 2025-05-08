import { Check, Clock, X } from "lucide-react";

const getStatusInfo = status => {
  switch (status) {
    case 'success':
      return {
        text: 'پرداخت موفق',
        icon: <Check size={16} className="text-success" />,
        color: 'btn btn-outline btn-success rounded-3xl',
      };
    case 'failed':
      return {
        text: 'پرداخت ناموفق',
        icon: <X size={16} className="text-error" />,
        color: 'btn btn-outline btn-error rounded-3xl',
      };
    case 'pending':
      return {
        text: 'در حال بررسی',
        icon: <Clock size={16} className="text-info" />,
        color: 'btn btn-outline btn-info rounded-3xl',
      };
    default:
      return {
        text: 'نامشخص',
        icon: null,
        color: 'btn btn-outline rounded-3xl',
      };
  }
};

export default getStatusInfo;

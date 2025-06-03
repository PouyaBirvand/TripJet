import { PhoneCall } from 'lucide-react';
import Link from 'next/link';

const TelButton = ({ className = '' }) => {
  return (
    <Link
      href="tel:+02170709797"
      className={`flex items-center gap-2 px-4 py-3 bg-white text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-colors duration-300 border border-blue-200 hover:border-blue-600 ${className}`}
    >
      <span className="hidden sm:inline">۰۲۱۷۰۷۰۹۷۹۷</span>
      <PhoneCall className="w-5 h-5" />
    </Link>
  );
};

export default TelButton;

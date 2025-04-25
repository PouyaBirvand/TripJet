import { Info } from 'lucide-react';

export function AutoReservationInfo({ text }) {
  return (
    <p className="flex items-start gap-2 text-[#002D8F] leading-5 sm:leading-6 text-sm sm:text-base">
      <Info className="text-blue-500 flex-shrink-0 mt-0.5 w-5 h-5" />
      <span>{text}</span>
    </p>
  );
}

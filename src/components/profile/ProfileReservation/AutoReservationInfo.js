import { Info } from 'lucide-react';

export function AutoReservationInfo({ text }) {
    return (
      <p className="flex items-start gap-2 text-[#002D8F] leading-6">
        <Info className="text-blue-500" />
        {text}
      </p>
    );
  }
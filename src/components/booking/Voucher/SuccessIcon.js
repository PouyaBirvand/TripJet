'use client';

import { Check } from 'lucide-react';

export const SuccessIcon = () => {
  return (
    <div className="bg-green-100 p-6 rounded-full">
      <div className="bg-green-200 p-5 rounded-full">
        <div className="bg-green-500 p-4 rounded-full flex items-center justify-center">
          <Check className="text-white" strokeWidth={3.5} size={40} />
        </div>
      </div>
    </div>
  );
};
'use client';

import { X } from 'lucide-react';

export const FailureIcon = () => {
  return (
    <div className="bg-red-100 p-6 rounded-full">
      <div className="bg-red-200 p-5 rounded-full">
        <div className="bg-red-500 p-4 rounded-full flex items-center justify-center">
          <X className="text-red-100" strokeWidth={3.5} size={40} />
        </div>
      </div>
    </div>
  );
};

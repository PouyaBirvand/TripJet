'use client';

import Image from 'next/image';

export const TourCardHeader = ({ imageUrl, title, duration, trackingCode }) => {
  return (
    <div className="p-6 border-b border-slate-100">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative min-w-[80px] h-[80px] rounded-lg overflow-hidden">
            <Image alt="tour-image" src={imageUrl} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-medium">{title}</h3>
            <span className="text-slate-500">{duration}</span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
            کد رهگیری: {trackingCode}
          </div>
        </div>
      </div>
    </div>
  );
};
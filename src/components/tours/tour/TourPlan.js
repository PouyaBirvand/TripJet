'use client';
import Image from 'next/image';
import { Clock, MapPin } from 'lucide-react';

export default function TourPlan({ title, day, image, id }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
          <Image
            alt={title}
            src={image}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 right-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
            {id}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
            <Clock className="w-4 h-4" />
            {day}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            برنامه روز {id}
          </div>
        </div>
      </div>
    </div>
  );
}
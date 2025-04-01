import { Shield, Plane, Coffee, Building, Users } from 'lucide-react';
import React from 'react';

export default function TourServices({ services }) {
  return (
    <div className="bg-gray-50 p-4 rounded-xl h-full">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">خدمات تور:</h4>
      <div className="grid grid-cols-2 gap-3">
        {services.insurance && (
          <ServiceItem icon={<Shield size={16} />} text={services.insurance} />
        )}
        {services.transport && (
          <ServiceItem icon={<Plane size={16} />} text={services.transport} />
        )}
        {services.meals && (
          <ServiceItem icon={<Coffee size={16} />} text={services.meals} />
        )}
        {services.accommodation && (
          <ServiceItem icon={<Building size={16} />} text={services.accommodation} />
        )}
        {services.capacity && (
          <ServiceItem icon={<Users size={16} />} text={services.capacity} />
        )}
      </div>
    </div>
  );
}

function ServiceItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
      {React.cloneElement(icon, { className: "text-primary flex-shrink-0" })}
      <span className="line-clamp-1">{text}</span>
    </div>
  );
}

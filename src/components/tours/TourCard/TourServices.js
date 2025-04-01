import { Shield, Plane, Coffee, Building, Users } from 'lucide-react';
import React from 'react';

export default function TourServices({ services }) {
  return (
    <div className="bg-gray-50 p-3 rounded-lg my-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">خدمات تور:</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.insurance && (
          <ServiceItem icon={<Shield size={14} />} text={services.insurance} />
        )}
        {services.transport && (
          <ServiceItem icon={<Plane size={14} />} text={services.transport} />
        )}
        {services.meals && (
          <ServiceItem icon={<Coffee size={14} />} text={services.meals} />
        )}
        {services.accommodation && (
          <ServiceItem icon={<Building size={14} />} text={services.accommodation} />
        )}
        {services.capacity && (
          <ServiceItem icon={<Users size={14} />} text={services.capacity} />
        )}
      </div>
    </div>
  );
}

function ServiceItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-600">
      {React.cloneElement(icon, { className: "text-gray-600" })}
      <span>{text}</span>
    </div>
  );
}

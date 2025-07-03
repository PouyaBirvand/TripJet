import { Shield, Plane, Coffee, Building, Users, Check } from 'lucide-react';
import React from 'react';

export default function TourServices({ services }) {
  if (!services || services.length === 0) return null;

  // نقشه آیکون‌ها برای انواع مختلف خدمات
  const getServiceIcon = serviceTitle => {
    const title = serviceTitle.toLowerCase();

    if (title.includes('بیمه')) return <Shield size={16} />;
    if (title.includes('حمل') || title.includes('پرواز') || title.includes('اتوبوس'))
      return <Plane size={16} />;
    if (title.includes('صبحانه') || title.includes('غذا') || title.includes('وعده'))
      return <Coffee size={16} />;
    if (title.includes('اقامت') || title.includes('هتل')) return <Building size={16} />;
    if (title.includes('راهنما') || title.includes('گروه')) return <Users size={16} />;

    // آیکون پیش‌فرض
    return <Check size={16} />;
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl h-full">
      <h4 className="text-sm font-semibold text-gray-700 mb-3">خدمات تور:</h4>
      <div className="grid grid-cols-2 gap-3">
        {services.map(service => (
          <ServiceItem key={service.id} icon={getServiceIcon(service.title)} text={service.title} />
        ))}
      </div>
    </div>
  );
}

function ServiceItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
      {React.cloneElement(icon, { className: '!text-blue-600 flex-shrink-0' })}
      <span className="line-clamp-1">{text}</span>
    </div>
  );
}

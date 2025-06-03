'use client';

export const TourInfoItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-gray-100 p-2 rounded-full mt-1">
        <Icon size={18} className="text-gray-600" />
      </div>
      <div>
        <h4 className="text-sm text-gray-500 mb-1">{title}</h4>
        <p className="font-medium">{description}</p>
      </div>
    </div>
  );
};

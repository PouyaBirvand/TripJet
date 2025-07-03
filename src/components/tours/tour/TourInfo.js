import * as Icons from 'lucide-react';

export default function TourInfo({ tourInfo }) {
  if (!tourInfo?.length) return null;

  const getIcon = iconName => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent className="text-slate-500 w-5 h-5" /> : null;
  };

  return (
    <div className="flex flex-col gap-5">
      {tourInfo.map(info => (
        <div key={info.id} className="flex items-center gap-36">
          <span className="flex items-center flex-row-reverse gap-2 font-medium">
            {info.label}
            {getIcon(info.icon)}
          </span>
          <span className="text-slate-500">{info.value}</span>
        </div>
      ))}
    </div>
  );
}

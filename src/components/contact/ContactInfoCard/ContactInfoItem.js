'use client';

export default function ContactInfoItem({
  icon,
  label,
  value,
  isMultiLine = false,
  isRtlNumber = false,
}) {
  return (
    <div className={`flex items-${isMultiLine ? 'start' : 'center'} gap-3`}>
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex flex-col sm:flex-row sm:justify-between w-full">
        <span className="font-medium">{label}</span>
        <span
          className={`opacity-90 ${isRtlNumber ? 'font-vazir-digits' : ''} ${isMultiLine ? 'leading-7' : ''}`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}

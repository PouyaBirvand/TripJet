'use client';

export default function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
  isMultiLine = false,
  isRtlNumber = false,
}) {
  const content = (
    <div className={`flex gap-3 ${isMultiLine ? 'items-start' : 'items-center'}`}>
      <div className="flex-shrink-0 mt-0.5">
        <Icon size={18} className="text-blue-200" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
          <span className="text-sm font-medium text-blue-100 flex-shrink-0">
            {label}
          </span>
          <span 
            className={`
              text-sm sm:text-base text-white break-words
              ${isRtlNumber ? 'font-mono' : ''}
              ${isMultiLine ? 'leading-relaxed' : ''}
            `}
          >
            {value}
          </span>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href}
        className="block p-2 -m-2 rounded-lg hover:bg-blue-500/20 transition-colors"
      >
        {content}
      </a>
    );
  }

  return <div className="p-2 -m-2">{content}</div>;
}
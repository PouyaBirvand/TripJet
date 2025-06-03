'use client';

import Link from 'next/link';

export const ActionButton = ({
  variant = 'primary',
  icon: Icon,
  label,
  href,
  onClick,
  fullWidth = true,
}) => {
  const className = `flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-colors ${
    fullWidth ? 'w-full' : ''
  } ${
    variant === 'primary'
      ? 'bg-blue-600 hover:bg-blue-700 text-white'
      : 'border border-slate-300 bg-white hover:bg-gray-50 text-blue-600'
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        <Icon size={18} />
        {label}
      </Link>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      <Icon size={18} />
      {label}
    </button>
  );
};

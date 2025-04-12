'use client';
import { Pencil } from 'lucide-react';

export default function CardBase({ title, children, onEdit }) {
  return (
    <div className="rounded-xl border border-base-300 bg-white p-4 md:p-5">
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <h4 className="text-base md:text-lg font-medium">{title}</h4>
        <button
          onClick={onEdit}
          className="!text-blue-600 flex items-center gap-1 text-xs sm:text-sm hover:!text-blue-600-dark transition-colors"
        >
          ویرایش اطلاعات
          <Pencil size={16} className="hidden sm:inline" />
          <Pencil size={14} className="sm:hidden" />
        </button>
      </div>
      <div className="space-y-2 md:space-y-3">{children}</div>
    </div>
  );
}

'use client';
export default function InfoRow({ label, value }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center">
      <span className="text-gray-700 sm:ml-2 text-sm md:text-base">{label}:</span>
      <span className="text-slate-500 text-sm md:text-base">{value || '-'}</span>
    </div>
  );
}

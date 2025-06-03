import { UserCheck } from 'lucide-react';

export default function PassengerHistoryButton({ onClick, isLoading }) {
  return (
    <button
      className={`btn transition-all duration-300 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white px-4 py-2 flex items-center gap-2 ${
        isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      type="button"
      onClick={onClick}
      disabled={isLoading}
    >
      <UserCheck size={18} />
      {isLoading ? 'در حال دریافت اطلاعات...' : 'انتخاب مسافران سابق'}
    </button>
  );
}

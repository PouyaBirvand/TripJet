import { AlertTriangle } from 'lucide-react';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4 flex flex-col items-center justify-center">
      <AlertTriangle className="text-red-500 mb-2" size={32} />
      <p className="text-red-700 mb-2">{message || 'خطایی رخ داده است'}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="btn btn-sm btn-outline btn-error mt-2"
        >
          تلاش مجدد
        </button>
      )}
    </div>
  );
}
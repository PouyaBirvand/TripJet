'use client';
import { Loader2, Send } from 'lucide-react';

export default function SubmitButton({ isSubmitting }) {
  return (
    <div className="pt-4 border-t border-gray-100">
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full sm:w-auto min-w-[200px] 
          bg-blue-600 hover:bg-blue-700 
          text-white font-medium
          py-3 px-8 rounded-lg
          transition-all duration-200
          disabled:opacity-70 disabled:cursor-not-allowed
          flex items-center justify-center gap-2
          shadow-sm hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        "
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>در حال ارسال...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>تایید و ارسال</span>
          </>
        )}
      </button>
    </div>
  );
}

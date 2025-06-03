'use client';

export default function SubmitButton({ isSubmitting }) {
  return (
    <div dir="ltr" className="mt-25">
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 text-white py-3 px-28 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'در حال ارسال...' : 'تایید و ارسال'}
      </button>
    </div>
  );
}

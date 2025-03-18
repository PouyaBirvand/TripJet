export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0">
            <div className="w-full h-full rounded-full border-4 border-primary/30 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-12 w-12 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-base-content animate-pulse">در حال بارگذاری...</h2>
          <p className="mt-2 text-base-content/70">لطفاً کمی صبر کنید</p>
        </div>

        <div className="w-full max-w-xs mt-4">
          <div className="h-2 bg-base-300 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full animate-progress"></div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card bg-base-200 shadow-xl animate-pulse">
            <div className="h-48 bg-base-300 rounded-t-xl"></div>
            <div className="card-body">
              <div className="h-6 bg-base-300 rounded-full w-3/4 mb-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-base-300 rounded-full"></div>
                <div className="h-4 bg-base-300 rounded-full w-5/6"></div>
                <div className="h-4 bg-base-300 rounded-full w-4/6"></div>
              </div>
              <div className="card-actions justify-end mt-4">
                <div className="h-10 bg-base-300 rounded-full w-28"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//   <style jsx global>{`
//     @keyframes progress {
//       0% { width: 5%; }
//       50% { width: 70%; }
//       100% { width: 95%; }
//     }

//     .animate-progress {
//       animation: progress 2s ease-in-out infinite;
//     }
//   `}</style>

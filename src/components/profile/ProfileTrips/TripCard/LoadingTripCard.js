const LoadingTripCard = () => (
  <div className="border-b border-slate-200 bg-white shadow-sm rounded-lg p-4 animate-pulse">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center gap-6 md:gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="h-24 w-32 bg-gray-200 rounded-lg"></div>
        <div className="flex flex-col items-center sm:items-start">
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-36 bg-gray-300 rounded mt-2"></div>
        </div>
      </div>

      <div className="flex flex-col items-center sm:items-end">
        <div className="h-4 w-20 bg-gray-300 rounded mb-1"></div>
        <div className="h-6 w-28 bg-gray-300 rounded"></div>
      </div>

      <div className="h-10 w-32 bg-gray-300 rounded-3xl mx-auto"></div>

      <div className="flex justify-center sm:justify-end">
        <div className="h-8 w-32 bg-gray-300 rounded-3xl"></div>
      </div>
    </div>
  </div>
);

export default LoadingTripCard;

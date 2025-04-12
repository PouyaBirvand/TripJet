const SkeletonTripCard = () => (
  <div className="border-b border-slate-100 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="skeleton w-24 h-32 rounded-lg"></div>
        <div className="skeleton w-32 h-6"></div>
      </div>
      <div className="skeleton w-20 h-6"></div>
      <div className="skeleton w-20 h-6"></div>
      <div className="skeleton w-32 h-8"></div>
    </div>
  </div>
);

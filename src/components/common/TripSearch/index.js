import { Suspense } from "react";
import TripSearchContent from "./TripSearchContent";

export default function TripSearch() {
  return (
    <Suspense fallback={
      <div className="bg-white relative z-[9] rounded-xl border border-slate-300 mt-45 animate-pulse">
        <div className="p-6 border-b border-slate-100">
          <div className="h-8 bg-gray-200 rounded w-32"></div>
        </div>
        <div className="p-6">
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    }>
      <TripSearchContent />
    </Suspense>
  );
}
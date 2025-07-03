import { Plane } from 'lucide-react';
import TourCalendar from './TourCalendar';
import TourInfo from './TourInfo';

export default function TourInfoBox({ tour }) {
  if (!tour) return null;

  return (
    <div className="border border-slate-200 rounded-lg p-4 mt-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl">{tour.title}</h2>
          <span className="text-slate-500">مدت زمان سفر : {tour.duration.description}</span>
        </div>
        <button className="btn btn-outline text-blue-500 px-6 py-2 rounded-md flex items-center gap-2">
          <Plane />
          مشاهده مسیر در نقشه
        </button>
      </div>
      <TourCalendar availableDates={tour.availableDates} />
      <TourInfo tourInfo={tour.tourInfo} />
    </div>
  );
}

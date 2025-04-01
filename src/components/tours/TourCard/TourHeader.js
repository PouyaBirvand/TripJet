import { Calendar, Clock } from 'lucide-react';

export default function TourHeader({ date, duration }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex items-center gap-1 text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded-md">
        <Calendar size={14} />
        <span>{date}</span>
      </div>
      
      <div className="flex items-center gap-1 text-sm bg-amber-50 text-amber-700 px-2 py-1 rounded-md">
        <Clock size={14} />
        <span>{duration.description}</span>
      </div>
    </div>
  );
}

import { Layers } from 'lucide-react';
import TourPlan from './TourPlan';

export default function TourPlans({ tour }) {
  if (!tour?.tourPlans?.length) return null;

  return (
    <div>
      <h1 className="text-2xl flex items-center gap-2">
        <Layers className="text-blue-600 h-7 w-7" />
        برنامه تور
      </h1>
      {tour.tourPlans.map(tourplan => (
        <TourPlan key={tourplan.id} {...tourplan} />
      ))}
    </div>
  );
}

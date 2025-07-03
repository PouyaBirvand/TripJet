import { Crown, Dot } from 'lucide-react';

export default function TourServices({ tour }) {
  if (!tour?.services?.length) return null;

  return (
    <div className="mt-10">
      <h1 className="text-2xl flex items-center gap-2 mb-4">
        <Crown className="text-blue-600 h-7 w-7" />
        خدمات تور
      </h1>
      <div className="border border-slate-300 rounded-xl p-6 flex flex-wrap items-center">
        {tour.services.map(service => (
          <div key={service.id} className="">
            <h1 className="text-xl font-medium flex items-center">
              <Dot size={50} />
              {service.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

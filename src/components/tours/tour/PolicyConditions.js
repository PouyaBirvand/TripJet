import { Dot, OctagonAlert } from 'lucide-react';

export default function PolicyConditions({ tour }) {
  if (!tour?.policies?.length) return null;

  return (
    <div className="mt-10">
      <h1 className="text-2xl flex items-center gap-2 mb-4">
        <OctagonAlert className="text-blue-600 h-7 w-7" />
        قوانین و شرایط
      </h1>
      <div className="border border-slate-300 rounded-xl p-6">
        {tour.policies.map(policy => (
          <div key={policy.id}>
            <h1 className="text-xl font-medium flex items-center">
              <Dot size={50} />
              {policy.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

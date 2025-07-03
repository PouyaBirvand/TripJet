import { Dot, ShoppingBag } from 'lucide-react';

export default function RequiredTools({ tour }) {
  if (!tour?.requiredTools?.length) return null;

  return (
    <div className="mt-10">
      <h1 className="text-2xl flex items-center gap-2 mb-4">
        <ShoppingBag className="text-blue-600 h-7 w-7" />
        لوازم موردنیاز
      </h1>
      <div className="border border-slate-300 rounded-xl p-6">
        {tour.requiredTools.map(tool => (
          <div key={tool.id}>
            <h1 className="text-xl font-medium flex items-center">
              <Dot size={50} />
              {tool.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

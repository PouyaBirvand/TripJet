import Image from 'next/image';
import { Calendar } from 'lucide-react';

export default function RecentlyBox({ item }) {
  return (
    <div className="bg-white rounded-xl  border border-slate-200 overflow-hidden h-full">
      <div className="relative h-96 w-full">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <Calendar size={16} className="text-blue-600" />
          <span className="text-sm">{item.date}</span>
        </div>
        <h3 className="font-medium text-lg">{item.title}</h3>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function TeamMemberBox({ item }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden h-full sm:w-11/12 w-full mt-5">
      <div className="relative h-24 mt-6">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className=""
          objectFit='contain'
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-normal text-lg mb-1">{item.name}</h3>
        <p className="text-slate-500 font-normal">{item.position}</p>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';

const TourCategoryItem = ({ tour }) => {
  return (
    <Link href="#" className="block mt-3">
      <div className="bg-white flex flex-col sm:flex-row gap-1 md:aspect-[2.6] aspect-[1] items-stretch rounded-xl overflow-hidden border border-slate-200">
        <div className="relative h-full w-full sm:w-[40%]">
          <Image src="/japen.png" alt={tour.title} fill className="object-cover p-1 rounded-xl" />
        </div>

        <div className="p-3 flex flex-col justify-between flex-grow">
          <h3 className="text-xl font-bold text-gray-900 text-right mb-2">{tour.title}</h3>

          <div className="flex items-center gap-2 text-nowrap">
            <p className="text-gray-500">شروع قیمت از</p>
            <p className="text-blue-600 font-bold ">
              {new Intl.NumberFormat('fa-IR').format(tour.price.original)} تومان
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCategoryItem;

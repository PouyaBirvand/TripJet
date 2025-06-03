import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

const NavigationButtons = ({ swiperEnabled, swiperRef }) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    swiperEnabled && (
      <div className="flex gap-2 items-center pr-4">
        {pathname == '/' && (
          <span
            className="text-blue-600 text-lg ml-3 cursor-pointer"
            onClick={() => router.push('/tours')}
          >
            مشاهده همه
          </span>
        )}
        <button
          className="bg-base-100 border-base-300 border rounded-xl p-2 hover:bg-base-200"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next slide"
        >
          <ChevronRight size={25} className="text-slate-500" />
        </button>
        <button
          className="bg-base-100 border-base-300 border rounded-xl p-2 hover:bg-base-200"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous slide"
        >
          <ChevronLeft size={25} className="text-slate-500" />
        </button>
      </div>
    )
  );
};

export default NavigationButtons;

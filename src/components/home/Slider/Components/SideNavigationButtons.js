import { ChevronLeft, ChevronRight } from "lucide-react";

const SideNavigationButtons = ({swiperEnabled, swiperRef}) => (
    swiperEnabled && (
        <>
            <button
                className="absolute top-1/2 right-0 -translate-y-1/2 z-10 bg-base-100 border-base-300 border rounded-xl p-2 hover:bg-base-200"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
            >
                <ChevronRight size={25} className="text-slate-500" />
            </button>
            <button
                className="absolute top-1/2 left-0 -translate-y-1/2 z-10 bg-base-100 border-base-300 border rounded-xl p-2 hover:bg-base-200"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
            >
                <ChevronLeft size={25} className="text-slate-500" />
            </button>
        </>
    )
);

export default SideNavigationButtons
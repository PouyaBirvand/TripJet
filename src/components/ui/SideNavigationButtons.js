import { ChevronLeft, ChevronRight } from "lucide-react";

const SideNavigationButtons = ({swiperEnabled, swiperRef}) => (
    swiperEnabled && (
        <>
            <button
                className="absolute top-1/2 right-6 -translate-y-1/2 z-10 bg-base-100 shadow-md rounded-2xl p-3 hover:bg-base-200"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
            >
                <ChevronRight />
            </button>
            <button
                className="absolute top-1/2 left-6 -translate-y-1/2 z-10 bg-base-100 shadow-md rounded-2xl p-3 hover:bg-base-200"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
            >
                <ChevronLeft />
            </button>
        </>
    )
);

export default SideNavigationButtons
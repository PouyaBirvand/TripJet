import { ChevronLeft, ChevronRight } from "lucide-react";

const NavigationButtons = ({swiperEnabled, swiperRef}) => (
    swiperEnabled && (
        <div className="flex gap-2">
            <button
                className="bg-base-100 shadow-md rounded-2xl p-3 hover:bg-base-200"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
            >
                <ChevronRight />
            </button>
            <button
                className="bg-base-100 shadow-md rounded-2xl p-3 hover:bg-base-200"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
            >
                <ChevronLeft />
            </button>
        </div>
    )
);

export default NavigationButtons
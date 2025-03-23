"use client"

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import TextSliderItem from "./TextSliderItem";
import NavigationButtons from "./NavigationButtons"
import Loading from "../../app/loading";
import SideNavigationButtons from "./SideNavigationButtons";

const Slider = ({
    items,
    children,
    buttonsPosition, // "header" or "sides"
}) => {
    const swiperRef = useRef(null);
    const [swiperEnabled, setSwiperEnabled] = useState(true);
    const [currentBreakpoint, setCurrentBreakpoint] = useState('default');
    const [isLoading, setIsLoading] = useState(true);

    // Define breakpoints for both swiper and static view
    const breakpoints = {
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        default: {
            slidesPerView: 6,
            spaceBetween: 20,
        }
    };

    useEffect(() => {
        const handleResize = () => {
            let activeBreakpoint;

            if (window.innerWidth < 640) {
                activeBreakpoint = '0';
            } else if (window.innerWidth < 768) {
                activeBreakpoint = '640';
            } else if (window.innerWidth < 1024) {
                activeBreakpoint = '768';
            } else if (window.innerWidth < 1280) {
                activeBreakpoint = '1024';
            } else {
                activeBreakpoint = '1280';
            }

            setCurrentBreakpoint(activeBreakpoint);

            // Enable swiper only if there are more items than slides per view
            const currentSlidesPerView = breakpoints[activeBreakpoint]?.slidesPerView || breakpoints.default.slidesPerView;
            setSwiperEnabled(items.length > currentSlidesPerView);
            setIsLoading(false);
        };

        // Run the resize handler once on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [items.length]);


    // Render header based on buttonsPosition
    const renderHeader = () => {
        if (buttonsPosition === "header") {
            return (
                <div className="flex flex-wrap justify-between items-center">
                    <div>{children}</div>
                    <NavigationButtons swiperEnabled={swiperEnabled} swiperRef={swiperRef} />
                </div>
            );
        }

        return (
            <div className="container mx-auto px-4 mb-4">
                {children}
            </div>
        );
    };

    if (isLoading) {
        return (
            <div className="w-full my-8">
                {renderHeader()}
                <Loading />
            </div>
        );
    }

    return (
        <div className="w-full my-8">
            {/* Header Section */}
            {renderHeader()}

            {/* Slider Section */}
            <div className="relative mt-4">
                {buttonsPosition === "sides" && <SideNavigationButtons swiperEnabled={swiperEnabled} swiperRef={swiperRef} />}
                {swiperEnabled ? (
                    <Swiper
                        loop={true}
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: breakpoints[640].slidesPerView,
                                spaceBetween: breakpoints[640].spaceBetween,
                            },
                            768: {
                                slidesPerView: breakpoints[768].slidesPerView,
                                spaceBetween: breakpoints[768].spaceBetween,
                            },
                            1024: {
                                slidesPerView: breakpoints[1024].slidesPerView,
                                spaceBetween: breakpoints[1024].spaceBetween,
                            },
                            1280: {
                                slidesPerView: breakpoints[1280].slidesPerView,
                                spaceBetween: breakpoints[1280].spaceBetween,
                            },
                        }}
                        className={buttonsPosition === "sides" ? "w-[calc(100%-10rem)]" : "w-full"}
                    >
                        {items.map((item, index) => (
                            <SwiperSlide key={index}>
                                <TextSliderItem origin={item.origin} destination={item.destination} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {items.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                <TextSliderItem origin={item.origin} destination={item.destination} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;
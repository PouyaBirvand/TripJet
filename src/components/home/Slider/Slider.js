"use client"

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import NavigationButtons from "./Components/NavigationButtons"
import Loading from "../../../app/loading";
import SideNavigationButtons from "./Components/SideNavigationButtons";

const Slider = ({
  items,
  children,
  buttonsPosition = "header",
  breakpoints = {
      '0': { slidesPerView: 1, spaceBetween: 10 },
      '640': { slidesPerView: 2, spaceBetween: 20 },
      '768': { slidesPerView: 3, spaceBetween: 20 },
      '1024': { slidesPerView: 4, spaceBetween: 30 },
      '1280': { slidesPerView: 5, spaceBetween: 30 },
      'default': { slidesPerView: 1, spaceBetween: 10 }
  },
  defaultSlidesPerView = 1,
  renderItem,
}) => {
    const swiperRef = useRef(null);
    const [swiperEnabled, setSwiperEnabled] = useState(true);
    const [currentBreakpoint, setCurrentBreakpoint] = useState('default');
    const [isLoading, setIsLoading] = useState(true);

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
  
          let currentSlidesPerView = defaultSlidesPerView;
          
          if (breakpoints && breakpoints[activeBreakpoint]?.slidesPerView) {
              currentSlidesPerView = breakpoints[activeBreakpoint].slidesPerView;
          } else if (breakpoints?.default?.slidesPerView) {
              currentSlidesPerView = breakpoints.default.slidesPerView;
          }
  
          setSwiperEnabled(items.length > currentSlidesPerView);
          setIsLoading(false);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [items.length, breakpoints, defaultSlidesPerView]);

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
            <div className="">
                {children}
            </div>
        );
    };

    if (isLoading) {
        return (
            <div className="w-full mb-8 mt-32">
                {renderHeader()}
                <Loading />
            </div>
        );
    }

    const renderComponent = (item, index) => {
        if (typeof renderItem === 'function') {
            return renderItem(item, index);
        }
        
        return (
            <div>
                {JSON.stringify(item)}
            </div>
        );
    };

    return (
        <div className="w-full mb-8 mt-32">
            {renderHeader()}

            <div className="relative mt-4">
                {buttonsPosition === "sides" && <SideNavigationButtons swiperEnabled={swiperEnabled} swiperRef={swiperRef} />}
                {swiperEnabled ? (
                    <Swiper
                    loop={true}
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={defaultSlidesPerView}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={breakpoints || {
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                        1280: { slidesPerView: 5, spaceBetween: 30 },
                    }}
                    className={buttonsPosition === "sides" ? "w-[calc(100%-10rem)]" : "w-full"}
                >
                        {items.map((item, index) => (
                            <SwiperSlide key={index}>
                                {renderComponent(item, index)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-4">
                        {items.map((item, index) => (
                            <div key={index} className="flex justify-center">
                                {renderComponent(item, index)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;
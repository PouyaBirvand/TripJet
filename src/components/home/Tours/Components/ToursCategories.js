"use client";
import { useEffect, useState } from 'react';
import { Map } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { useQueryState } from 'nuqs';
import TourCategoryItem from './TourCategoryItem';
import { tourService } from '../../../../services/tour/tourService';
import Slider from '../../Slider/Slider';
import SecHeader from '../../Slider/Components/SecHeader';

const TourCategories = () => {
  const [activeFilter, setActiveFilter] = useQueryState('sort');
  const [filteredTours, setFilteredTours] = useState([]);

  const { data: tours, isLoading } = useQuery({
    queryKey: ['tours'],
    queryFn: () => tourService.getTours(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  useEffect(() => {
    if (tours?.data) {
      if (activeFilter === 'luxury') {
        setFilteredTours(tours.data.filter(tour => tour.hotel.stars === 5));
      } else if (activeFilter === 'special') {
        setFilteredTours(tours.data.filter(tour => tour.price.hasDiscount));
      } else if (activeFilter === 'nearest_date') {
        setFilteredTours([...tours.data].sort((a, b) => a.date.localeCompare(b.date)));
      } else if (activeFilter === 'weekend') {
        setFilteredTours(tours.data.filter((_, index) => index % 2 === 0));
      } else {
        setFilteredTours(tours.data);
      }
    }
  }, [tours, activeFilter]);

  const handleFilterChange = (filter) => {
    // If the same filter is clicked again, clear it
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  const swiperConfig = {
    items: filteredTours || [],
    buttonsPosition: "header",
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      default: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
    defaultSlidesPerView: 1,
  };

  return (
    <div>
      <Slider
        renderItem={(tour) => <TourCategoryItem tour={tour} />}
        {...swiperConfig}
      >
        <div className='flex flex-col'>
          <div className="w-full flex items-center gap-5 flex-wrap">
            <SecHeader lTitle="دسته بندی تور ها" rTitle="">
              <Map size={30} className="mt-1" />
            </SecHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-max lg:mb-0 mb-5 text-nowrap">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 w-full">
                {['luxury', 'special', 'nearest_date', 'weekend'].map(filter => (
                  <button 
                    key={filter}
                    className={`btn btn-sm md:btn-md font-normal !text-[0.9rem] text-slate-500 bg-white ${activeFilter === filter ? '!bg-sky-200 !text-blue-600 !border-none' : 'btn-outline'} rounded-lg border border-slate-300 font-medium text-xs sm:text-sm`}
                    onClick={() => handleFilterChange(filter)}
                  >
                    {filter === 'luxury' ? 'لوکس ترین' : 
                     filter === 'special' ? 'تور های ویژه' : 
                     filter === 'nearest_date' ? 'نزدیک ترین تاریخ اجرا' : 
                     'تعطیلات اخر هفته'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TourCategories;
'use client';
import { BadgePercent } from 'lucide-react';
import SecHeader from '../Slider/Components/SecHeader';
import Slider from '../Slider/Slider';
import TourBox from './Components/TourBox';
import { useTours } from '../../../hooks/useTours';

const SpecialOffer = () => {
  const { tours, isLoading } = useTours({ isLastMinute: true });

  const swiperConfig = {
    items: tours,
    buttonsPosition: 'header',
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      default: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    defaultSlidesPerView: 1,
  };

  if (isLoading) {
    return <div className="loading loading-spinner loading-lg"></div>;
  }

  return (
    <Slider renderItem={item => <TourBox item={item} />} {...swiperConfig}>
      <div className="mb-4 sm:mb-0">
        <SecHeader lTitle="پیشنهادات ویژه">
          <BadgePercent className="mt-1" size={30} />
        </SecHeader>
      </div>
    </Slider>
  );
};

export default SpecialOffer;

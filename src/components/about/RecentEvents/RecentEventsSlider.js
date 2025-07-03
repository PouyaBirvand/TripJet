'use client';
import Slider from '../../home/Slider/Slider';
import SecHeader from '../../home/Slider/Components/SecHeader';
import RecentlyBox from './RecentlyBox';
import { Globe } from 'lucide-react';

export default function RecentEventsSlider({ events }) {
  const swiperConfig = {
    items: events,
    buttonsPosition: 'header',
    breakpoints: {
      default: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
    defaultSlidesPerView: 1,
  };

  return (
    <div className="mb-16">
      <Slider
        renderItem={item => (
          <div className="px-2 py-2">
            <RecentlyBox item={item} />
          </div>
        )}
        {...swiperConfig}
      >
        <div className="relative top-3 sm:top-0">
          <SecHeader lTitle="رویداد های اخیر">
            <Globe className="mt-1 text-blue-600" size={30} />
          </SecHeader>
        </div>
      </Slider>
    </div>
  );
}

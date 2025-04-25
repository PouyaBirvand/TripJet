'use client';
import { History } from 'lucide-react';
import SecHeader from '../Slider/Components/SecHeader';
import Slider from '../Slider/Slider';
import TextSliderItem from './Components/TextSliderItem';

const RecentlySearch = () => {
  const MockRecentlySearchData = [
    { origin: 'شوش', destination: 'اهواز' },
    { origin: 'تهران', destination: 'مشهد' },
    { origin: 'شوشتر', destination: 'بندر عباس' },
    { origin: 'ترکیه', destination: 'افریقا' },
    { origin: 'سبزوار', destination: 'گوهردشت' },
    { origin: 'کرج', destination: 'دزفول' },
    { origin: 'شاهین شهر', destination: 'بهبان' }

  ];

  return (
    <Slider
      items={MockRecentlySearchData}
      buttonsPosition="sides"
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 12 },
        768: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 4, spaceBetween: 16 },
        1280: { slidesPerView: 6, spaceBetween: 16 },
      }}
      defaultSlidesPerView={1}
      renderItem={item => (
        <div className="px-1 pb-1 h-full">
          <TextSliderItem {...item} />
        </div>
      )}
    >
      <div className="relative top-1">
        <SecHeader lTitle="جستجوهای اخیر" rTitle="پاک کردن همه">
          <History size={28} className="text-blue-600 relative mt-1" />
        </SecHeader>
      </div>
    </Slider>
  );
};

export default RecentlySearch;

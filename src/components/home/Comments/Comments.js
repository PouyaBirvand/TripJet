'use client';

import { MessageCircleMore } from 'lucide-react';
import CommentsBox from './Components/CommentsBox';
import SecHeader from '../Slider/Components/SecHeader';
import Slider from '../Slider/Slider';

const data = [
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  // ... other comments
];

const Comments = () => {
  const swiperConfig = {
    items: data,
    buttonsPosition: 'header',
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 8 },
      640: { slidesPerView: 1, spaceBetween: 8 },
      768: { slidesPerView: 1, spaceBetween: 15 },
      1024: { slidesPerView: 2, spaceBetween: 15 },
      1280: { slidesPerView: 2, spaceBetween: 15 },
      default: { slidesPerView: 2, spaceBetween: 20 },
    },
    defaultSlidesPerView: 1,
  };

  return (
    <Slider renderItem={item => <CommentsBox item={item} />} {...swiperConfig}>
      <div className='relative top-3 md:top-0'>
        <SecHeader lTitle="نظرات کاربران">
          <MessageCircleMore size={30} />
        </SecHeader>
      </div>
    </Slider>
  );
};

export default Comments;

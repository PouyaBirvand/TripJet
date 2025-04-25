'use client';

import { MessageCircleMore } from 'lucide-react';
import CommentsBox from './Components/CommentsBox';
import SecHeader from '../Slider/Components/SecHeader';
import Slider from '../Slider/Slider';

const MockCommentsData = [
  {
    id: 1,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود. هتل و پرواز عالی بودند!',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 2,
    message: 'سفر به دبی با تریپ جت تجربه خوبی بود. قیمت‌ها مناسب و خدمات راضی‌کننده بود.',
    username: 'علی محمدی',
    stars: 4,
    date: '۱۴۰۳/۰۳/۲۲',
  },
  {
    id: 3,
    message: 'برای سفر به استانبول از تریپ جت استفاده کردم. رزرو هتل سریع انجام شد اما پرواز کمی تاخیر داشت.',
    username: 'مریم حسینی',
    stars: 3,
    date: '۱۴۰۳/۰۲/۱۰',
  },
  {
    id: 4,
    message: 'تریپ جت بهترین سایت برای رزرو سفر به آنتالیاست! همه چیز طبق برنامه پیش رفت و قیمت‌ها عالی بود.',
    username: 'امیر رضایی',
    stars: 5,
    date: '۱۴۰۳/۰۱/۰۵',
  },
  {
    id: 5,
    message: 'سفر به کیش با تریپ جت تجربه خوبی بود. پشتیبانی سریع و پاسخگو بودند و مشکلی نداشتم.',
    username: 'زهرا کریمی',
    stars: 4,
    date: '۱۴۰۲/۱۲/۱۵',
  },
  {
    id: 6,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 7,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
  {
    id: 8,
    message: 'من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود...',
    username: 'سارا احمدی',
    stars: 5,
    date: '۱۴۰۳/۰۴/۱۶',
  },
];

const Comments = () => {
  const swiperConfig = {
    items: MockCommentsData,
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

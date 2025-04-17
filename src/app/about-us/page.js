'use client';
import Image from 'next/image';
import { BookOpen, Globe, Users } from 'lucide-react';
import Hero from '../../components/ui/Hero';
import Slider from '../../components/home/Slider/Slider';
import SecHeader from '../../components/home/Slider/Components/SecHeader';
import RecentlyBox from '../../components/AboutUs/RecentlyBox';
import TeamMemberBox from '../../components/AboutUs/TeamMemberBox';
import FAQ from '../../components/AboutUs/FAQ';
import Comments from '../../components/home/Comments/Comments';
import NavButtons from '../../components/common/NavButtons';

export default function AboutusPage() {
  const recentEvents = [
    {
      id: 1,
      date: '۱۴۰۳/۱۲/۱۰',
      title: 'تور مهر ماه جنگل های نمک ابرود',
      image: '/event.png',
    },
    {
      id: 2,
      date: '۱۴۰۳/۱۱/۲۰',
      title: 'تور زمستانی کویر مرنجاب',
      image: '/event.png',
    },
    {
      id: 3,
      date: '۱۴۰۳/۱۰/۱۵',
      title: 'سفر به جزیره هرمز',
      image: '/event.png',
    },
    {
      id: 4,
      date: '۱۴۰۳/۰۹/۰۵',
      title: 'تور پاییزی جنگل های گلستان',
      image: '/event.png',
    },
  ];

  const swiperConfig = {
    items: recentEvents,
    buttonsPosition: 'header',
    breakpoints: {
      default: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
    defaultSlidesPerView: 1,
  };

  const teamMembers = [
    { name: 'سارا احمدی', position: 'مدیر عامل', image: '/Rectangle1.png' },
    { name: 'رضا محمدی', position: 'مدیر عملیات', image: '/Rectangle2.png' },
    { name: 'علی رضایی', position: 'مدیر مالی', image: '/Rectangle.png' },
    { name: 'مینا افشار', position: 'مسئول پشتیبانی', image: '/Rectangle1.png' },
    { name: 'نرگس بهرامی', position: 'مدیر بازاریابی', image: '/Rectangle2.png' },
    { name: 'امیر جلالی', position: 'راهنمای تور', image: '/Rectangle1.png' },
    { name: 'امیر جلالی', position: 'راهنمای تور', image: '/Rectangle1.png' },
    { name: 'امیر جلالی', position: 'راهنمای تور', image: '/Rectangle1.png' },
    { name: 'امیر جلالی', position: 'راهنمای تور', image: '/Rectangle1.png' },
    { name: 'امیر جلالی', position: 'راهنمای تور', image: '/Rectangle1.png' },
  ];



  return (
    <div className="px-4 py-8">
      {/* Hero Section */}
      <Hero />
      <div className="mb-80"></div>

      {/* Navigation */}
<NavButtons/>

      {/* Our Story */}
      <div className="mb-16 mt-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-15 text-right flex items-center gap-2">
              <BookOpen className="text-blue-600" size={25} />
              داستان ما
            </h2>
            <p className="text-slate-500 leading-7 text-justify mb-8 text-lg">
              سفر، همیشه بخش مهمی از زندگی ما بوده است. از همان روزهای کودکی که اولین
              ماجراجویی‌هایمان را با خانواده تجربه کردیم، رویای کشف دنیا در ذهنمان شکل گرفت. این
              اشتیاق به سفر، ما را به این باور رساند که هر سفر می‌تواند فراتر از یک تجربه عادی باشد؛
              فرصتی برای شناخت فرهنگ‌ها، ایجاد خاطرات ناب و ارتباط با انسان‌های متفاوت.
            </p>
            <p className="text-slate-500 leading-7 text-justify mb-14 text-lg">
              سال‌ها پیش، وقتی برای اولین بار یک تور کوچک را با چند دوست ترتیب دادیم، متوجه شدیم که
              می‌توانیم به دیگران هم کمک کنیم تا دنیای اطرافشان را کشف کنند. همین ماجراجویی ساده،
              تبدیل به پایه‌ای برای تأسیس شرکت مسافرتی ما شد. با عشق به کشف و خلق تجربیات جدید، ما
              تصمیم گرفتیم که به مردم کمک کنیم تا سفرهایشان را به بهترین شکل ممکن برنامه‌ریزی کنند.
            </p>
            <p className="text-slate-500 leading-7 text-justify text-lg">
              امروز، با تیمی از کارشناسان مجرب و پرشور، ما افتخار می‌کنیم که هر روز به هزاران نفر
              کمک می‌کنیم تا به مقصدهای رویایی خود سفر کنند. هدف ما فقط ارائه تور نیست؛ ما در کنار
              شما هستیم تا هر لحظه از سفرتان را تبدیل به خاطره‌ای شیرین کنیم.
            </p>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/tourism-day.png"
              alt="روز جهانی گردشگری"
              width={400}
              height={300}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Recently Events */}
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

      {/* Team Members */}
      <div className="mb-16">
        <Slider
          items={teamMembers}
          buttonsPosition="sides"
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 12 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 6, spaceBetween: 16 },
          }}
          defaultSlidesPerView={1}
          renderItem={item => (
            <div>
              <TeamMemberBox item={item} />
            </div>
          )}
        >
          <div className="relative top-1">
            <SecHeader lTitle="اعضای تیم">
              <Users size={28} className="text-blue-600 relative mt-1" />
            </SecHeader>
          </div>
        </Slider>
      </div>

      {/* Trend Questions */}
      <FAQ />

      {/* Comments */}

      <Comments />
    </div>
  );
}

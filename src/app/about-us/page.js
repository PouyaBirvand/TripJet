'use client';
import Hero from '../../components/ui/Hero';
import NavButtons from '../../components/common/NavButtons';
import Comments from '../../components/home/Comments/Comments';
import OurStory from '../../components/AboutUs/OurStory/OurStory';
import RecentEventsSlider from '../../components/AboutUs/RecentEvents/RecentEventsSlider';
import TeamMembersSlider from '../../components/AboutUs/TeamMembers/TeamMembersSlider';
import FAQ from '../../components/AboutUs/FAQ/FAQ';

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
      <Hero />
      <div className="mb-80"></div>

      <NavButtons />

      <OurStory />
      <RecentEventsSlider events={recentEvents} />
      <TeamMembersSlider members={teamMembers} />
      <FAQ />
      <Comments />
    </div>
  );
}

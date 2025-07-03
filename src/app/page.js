'use client';
import { Suspense } from 'react';
import Hero from '../components/ui/Hero';
import RecentlySearch from '../components/home/RecentlySearch/RecentlySearch';
import SpecialOffer from '../components/home/Tours/SpecialOffer';
import HomeAbout from '../components/home/HomeAbout/HomeAbout';
import Comments from '../components/home/Comments/Comments';
import PopularTours from '../components/home/Tours/PopularTours';
import TripSearch from '../components/common/TripSearch/index';
import TourCategories from '../components/home/Tours/Components/ToursCategories';

// Loading components
const TripSearchLoading = () => (
  <div className="bg-white rounded-xl border border-slate-300 p-6">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4"></div>
      <div className="h-12 bg-gray-200 rounded"></div>
    </div>
  </div>
);

const TourCategoriesLoading = () => (
  <div className="space-y-4">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-48 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  </div>
);

const HomePage = () => {
  return (
    <main className="space-y-12 md:space-y-16">
      <Hero />
      <div className="container mx-auto px-4 space-y-12 md:space-y-16">
        <Suspense fallback={<TripSearchLoading />}>
          <TripSearch />
        </Suspense>
        <RecentlySearch />
        <SpecialOffer />
        <HomeAbout />
        <Suspense fallback={<TourCategoriesLoading />}>
          <TourCategories />
        </Suspense>
        <Comments />
        <PopularTours />
      </div>
    </main>
  );
};

export default HomePage;

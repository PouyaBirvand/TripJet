'use client';
import Hero from '../components/ui/Hero';
import RecentlySearch from '../components/home/RecentlySearch/RecentlySearch';
import SpecialOffer from '../components/home/Tours/SpecialOffer';
import HomeAbout from '../components/home/HomeAbout/HomeAbout';
import Comments from '../components/home/Comments/Comments';
import PopularTours from '../components/home/Tours/PopularTours';
import TripSearch from '../components/common/TripSearch/index';
import TourCategories from '../components/home/Tours/Components/ToursCategories';

const HomePage = () => {
  return (
    <main className="space-y-12 md:space-y-16">
      <Hero />
      <div className="container mx-auto px-4 space-y-12 md:space-y-16">
        <TripSearch />
        <RecentlySearch />
        <SpecialOffer />
        <HomeAbout />
        <TourCategories />
        <Comments />
        <PopularTours />
      </div>
    </main>
  );
};
export default HomePage;

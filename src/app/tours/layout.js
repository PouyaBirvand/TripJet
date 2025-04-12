import Hero from '../../components/ui/Hero';
import TripSearch from '../../components/common/TripSearch/index';

export default function TourLayout({ children }) {
  return (
    <div>
      <Hero />
      <TripSearch />
      {children}
    </div>
  );
}

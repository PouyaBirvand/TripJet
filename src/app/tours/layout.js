import Hero from "../../components/ui/Hero";
import TripSearch from "../../components/ui/TripSearch";

export default function TourLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Hero />
        <TripSearch />
        {children}
      </body>
    </html>
  );
}

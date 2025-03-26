import TripSearch from "../components/ui/TripSearch";
import Hero from "../components/ui/Hero";
import RecentlySearch from "../components/home/RecentlySearch/RecentlySearch";
import SpecialOffer from "../components/home/Tours/SpecialOffer";
import HomeAbout from "../components/home/HomeAbout/HomeAbout";
import Comments from "../components/home/Comments/Comments";
import PopularTours from "../components/home/Tours/PopularTours";

const HomePage = () => {
    return (
        <>
            <Hero />
            <TripSearch />
            <RecentlySearch />
            <SpecialOffer />
            <HomeAbout />
            <Comments />
            <PopularTours />
        </>
    );
};

export default HomePage;
import TripSearch from "../components/ui/TripSearch";
import Hero from "../components/ui/Hero";
import RecentlySearch from "../components/ui/RecentlySearch";
import SpecialOffer from "../components/ui/SpecialOffer";
import HomeAbout from "../components/ui/HomeAbout";
import Comments from "../components/ui/Comments";
import PopularTours from "../components/ui/PopularTours";

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
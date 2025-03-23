"use client"
import { History } from "lucide-react"
import SecHeader from "./SecHeader"
import Slider from "./Slider"
import TextSliderItem from "./TextSliderItem";

// fack data
const data = [
    { origin: "شوش", destination: "اهواز" },
    { origin: "تهران", destination: "مشهد" },
    { origin: "اصفهان", destination: "شیراز" },
    { origin: "تبریز", destination: "ارومیه" },
    { origin: "رشت", destination: "انزلی" },
    { origin: "کرمانشاه", destination: "همدان" },
    { origin: "یزد", destination: "کرمان" },
    { origin: "بندرعباس", destination: "قشم" },
    { origin: "زاهدان", destination: "چابهار" },
    { origin: "اردبیل", destination: "سرعین" },
    { origin: "سنندج", destination: "مریوان" },
    { origin: "گرگان", destination: "ساری" },
    { origin: "خرم‌آباد", destination: "ایلام" },
    { origin: "بیرجند", destination: "مشهد" },
    { origin: "اهواز", destination: "آبادان" },
    { origin: "شیراز", destination: "بوشهر" },
    { origin: "تهران", destination: "قم" },
    { origin: "اصفهان", destination: "کاشان" },
    { origin: "مشهد", destination: "نیشابور" },
    { origin: "تبریز", destination: "اردبیل" }
];

const swiperConfig = {
    items: data,
    buttonsPosition: "sides",
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 15,
        },
        default: {
            slidesPerView: 6,
            spaceBetween: 20,
        }
    },
    defaultSlidesPerView: 1,
}

const RecentlySearch = () => {
    return (
        <Slider
            renderItem={(item) => <TextSliderItem origin={item.origin} destination={item.destination} />}
            {...swiperConfig}
        >
            <SecHeader lTitle="جستجوهای اخیر" rTitle="حذف همه">
                <History />
            </SecHeader>
        </Slider>
    )
}

export default RecentlySearch
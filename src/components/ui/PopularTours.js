"use client"

import { MessageSquareHeart } from "lucide-react";
import SecHeader from "./SecHeader"
import Slider from "./Slider"
import TourBox from "./TourBox";

const data = [
    {
        id: 1,
        img: "/Japen.png",
        title: "تور ژاپن (توکیو - اوساکا)",
        time: "۸ شب و ۹ روز",
        date: "مهر و آبان ۱۴۰۳",
        price: "۸۵,۹۰۰,۰۰۰",
        discountedPrice: "۷۵,۹۰۰,۰۰۰",
        discountPercent: "۱۰",
        leftedTicket: "1"
    },
    {
        id: 2,
        img: "/France.png",
        title: "تور فرانسه (پاریس - نیس)",
        time: "۷ شب و ۸ روز",
        date: "شهریور و مهر ۱۴۰۳",
        price: "۹۲,۵۰۰,۰۰۰",
        discountedPrice: "۸۷,۸۷۵,۰۰۰",
        discountPercent: "۵",
        leftedTicket: "3"
    },
    {
        id: 3,
        img: "/Italy.png",
        title: "تور ایتالیا (رم - فلورانس - ونیز)",
        time: "۱۰ شب و ۱۱ روز",
        date: "آبان و آذر ۱۴۰۳",
        price: "۹۸,۰۰۰,۰۰۰",
        discountedPrice: "۸۳,۳۰۰,۰۰۰",
        discountPercent: "۱۵",
        leftedTicket: "2"
    },
    {
        id: 4,
        img: "/Spain.png",
        title: "تور اسپانیا (مادرید - بارسلونا)",
        time: "۶ شب و ۷ روز",
        date: "آذر و دی ۱۴۰۳",
        price: "۷۹,۵۰۰,۰۰۰",
        discountedPrice: "۷۱,۵۵۰,۰۰۰",
        discountPercent: "۱۰",
        leftedTicket: "5"
    },
    {
        id: 5,
        img: "/Turkey.png",
        title: "تور ترکیه (استانبول - آنتالیا)",
        time: "۵ شب و ۶ روز",
        date: "مرداد و شهریور ۱۴۰۳",
        price: "۳۵,۰۰۰,۰۰۰",
        discountedPrice: "۲۸,۰۰۰,۰۰۰",
        discountPercent: "۲۰",
        leftedTicket: "8"
    },
    {
        id: 6,
        img: "/Germany.png",
        title: "تور آلمان (برلین - مونیخ - فرانکفورت)",
        time: "۹ شب و ۱۰ روز",
        date: "دی و بهمن ۱۴۰۳",
        price: "۸۸,۰۰۰,۰۰۰",
        discountedPrice: "۸۳,۶۰۰,۰۰۰",
        discountPercent: "۵",
        leftedTicket: "4"
    },
    {
        id: 7,
        img: "/Thailand.png",
        title: "تور تایلند (بانکوک - پوکت)",
        time: "۶ شب و ۷ روز",
        date: "بهمن و اسفند ۱۴۰۳",
        price: "۴۵,۰۰۰,۰۰۰",
        discountedPrice: "۴۰,۵۰۰,۰۰۰",
        discountPercent: "۱۰",
        leftedTicket: "7"
    },
    {
        id: 8,
        img: "/UAE.png",
        title: "تور امارات (دبی - ابوظبی)",
        time: "۴ شب و ۵ روز",
        date: "فروردین و اردیبهشت ۱۴۰۴",
        price: "۳۸,۵۰۰,۰۰۰",
        discountedPrice: "۳۴,۶۵۰,۰۰۰",
        discountPercent: "۱۰",
        leftedTicket: "10"
    },
    {
        id: 9,
        img: "/Greece.png",
        title: "تور یونان (آتن - سانتورینی)",
        time: "۷ شب و ۸ روز",
        date: "خرداد و تیر ۱۴۰۴",
        price: "۷۶,۰۰۰,۰۰۰",
        discountedPrice: "۶۰,۸۰۰,۰۰۰",
        discountPercent: "۲۰",
        leftedTicket: "2"
    },
    {
        id: 10,
        img: "/Malaysia.png",
        title: "تور مالزی (کوالالامپور - لنکاوی)",
        time: "۵ شب و ۶ روز",
        date: "مرداد و شهریور ۱۴۰۴",
        price: "۵۲,۰۰۰,۰۰۰",
        discountedPrice: "۴۴,۲۰۰,۰۰۰",
        discountPercent: "۱۵",
        leftedTicket: "6"
    }
];

const swiperConfig = {
    items: data,
    buttonsPosition: "header",
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 8,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        default: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    },
    defaultSlidesPerView: 1,
}

const PopularTours = () => {
    return (
        <Slider
            renderItem={(item) => <TourBox item={item}/>}
            {...swiperConfig}
        >
            <SecHeader lTitle="تورهای محبوب">
                <MessageSquareHeart />
            </SecHeader>
        </Slider>
    )
}

export default PopularTours
"use client"

import { MessageCircleMore } from "lucide-react"
import CommentsBox from "./Components/CommentsBox"
import SecHeader from "../Slider/Components/SecHeader"
import Slider from "../Slider/Slider"

const data = [
    {
        id: 1, 
        message: "من با تریپ جت به ترکیه سفر کردم و همه چیز فوق‌العاده بود. از لحظه رزرو تور تا پایان سفر، همه چیز به راحتی و بدون مشکل پیش رفت.", 
        username: "سارا احمدی", 
        stars: 5, 
        date: "۱۴۰۳/۰۴/۱۶"
    },
    {
        id: 2, 
        message: "سفر به دبی با تریپ جت یکی از بهترین تجربه‌های زندگی من بود. راهنمای تور بسیار حرفه‌ای و مسلط بود و هتل انتخاب شده کیفیت بالایی داشت.", 
        username: "علی محمدی", 
        stars: 4, 
        date: "۱۴۰۳/۰۳/۲۲"
    },
    {
        id: 3, 
        message: "برای سفر به تایلند از خدمات تریپ جت استفاده کردم. قیمت‌ها منصفانه و پشتیبانی ۲۴ ساعته واقعاً کارآمد بود. تنها مشکل کوچک تأخیر در پرواز برگشت بود که البته خارج از کنترل آژانس بود.", 
        username: "مریم حسینی", 
        stars: 4, 
        date: "۱۴۰۳/۰۲/۱۰"
    },
    {
        id: 4, 
        message: "من و خانواده‌ام تور اروپا را با تریپ جت رزرو کردیم و از انتخابمان بسیار راضی بودیم. برنامه‌ریزی دقیق، هتل‌های خوب و راهنمای تور فارسی زبان و مسلط، همگی عالی بودند. قطعاً برای سفرهای بعدی هم از تریپ جت استفاده خواهیم کرد.", 
        username: "محمد رضایی", 
        stars: 5, 
        date: "۱۴۰۳/۰۱/۰۵"
    },
    {
        id: 5, 
        message: "سفر به استانبول با تریپ جت تجربه خوبی بود. هماهنگی‌ها خوب انجام شد و قیمت مناسبی داشت. فقط کاش اطلاعات بیشتری درباره مکان‌های گردشگری قبل از سفر در اختیارمان قرار می‌دادند.", 
        username: "نیلوفر کریمی", 
        stars: 3, 
        date: "۱۴۰۲/۱۲/۱۵"
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
            slidesPerView: 1,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        default: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    defaultSlidesPerView: 1,
}

const Comments = () => {
    return (
        <Slider
            renderItem={(item) => <CommentsBox item={item}/>}
            {...swiperConfig}
        >
            <SecHeader lTitle="نظرات کاربران">
                <MessageCircleMore />
            </SecHeader>
        </Slider>
    )
}

export default Comments
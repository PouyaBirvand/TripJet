const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
const isBrowser = typeof window !== 'undefined';

export const mockTourData = [
  {
    id: 1,
    slug: 'india-golden-triangle',
    destination: 'هندوستان',
    title: 'تور مثلث طلایی هند',
    shortDescription: 'سفری فراموش‌نشدنی به قلب تمدن هند',
    date: '۱۴۰۳/۰۸/۱۸',
    duration: {
      nights: 9,
      days: 10,
      description: '۹ شب و ۱۰ روز',
    },
    price: {
      original: 85000000,
      discounted: 75000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: [
      { id: 1, title: 'اقامتگاه' },
      { id: 2, title: 'حمل و نقل' },
      { id: 3, title: 'لیدر محلی' },
      { id: 4, title: 'وعده غذایی' },
      { id: 5, title: 'بیمه مسافرتی' },
    ],
    requiredTools: [
      { id: 1, title: 'کفش کتونی مناسب برای گشت‌های طولانی' },
      { id: 2, title: 'کلاه نقاب‌دار برای محافظت از آفتاب' },
      { id: 3, title: 'وسایل حمام شخصی' },
      { id: 4, title: 'داروهای شخصی و کیت کمک‌های اولیه' },
      { id: 5, title: 'لباس‌های مناسب آب و هوای گرم' },
    ],
    policies: [
      { id: 1, title: 'از زمان ثبت نام تا 15 روز قبل از سفر شامل جریمه نمی‌شود' },
      { id: 2, title: 'از 15 تا 7 روز قبل از سفر 30% جریمه کنسلی' },
      { id: 3, title: 'از 7 تا 3 روز قبل از سفر 50% جریمه کنسلی' },
      { id: 4, title: 'کمتر از 3 روز قبل از سفر 100% جریمه کنسلی' },
      { id: 5, title: 'تغییر نام مسافر تا 24 ساعت قبل از سفر امکان‌پذیر است' },
    ],
    tourInfo: [
      {
        id: 1,
        icon: 'Calendar',
        label: 'تاریخ شروع',
        value: 'چهارشنبه 18 مهر، ساعت 6:30 صبح',
      },
      {
        id: 2,
        icon: 'MapPin',
        label: 'مبدا حرکت',
        value: 'فرودگاه امام خمینی (ره)',
      },
      {
        id: 3,
        icon: 'Users',
        label: 'ظرفیت تور',
        value: 'حداکثر 25 نفر',
      },
      {
        id: 4,
        icon: 'Utensils',
        label: 'وعده غذایی',
        value: '7 وعده غذایی کامل',
      },
      {
        id: 5,
        icon: 'Bed',
        label: 'اقامت',
        value: 'هتل 4 ستاره در مرکز شهر',
      },
      {
        id: 6,
        icon: 'Shield',
        label: 'بیمه',
        value: 'بیمه مسافرتی کامل',
      },
      {
        id: 7,
        icon: 'Car',
        label: 'حمل و نقل',
        value: 'اتوبوس VIP + پروازهای داخلی',
      },
    ],
    tourPlans: [
      {
        id: 1,
        title: 'پرواز تهران به دهلی و انتقال به هتل',
        day: 'چهارشنبه 18 مهر',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop',
      },
      {
        id: 2,
        title: 'بازدید از قلعه سرخ دهلی و مسجد جامع',
        day: 'پنج‌شنبه 19 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 3,
        title: 'سفر به آگرا و بازدید از تاج محل',
        day: 'جمعه 20 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 4,
        title: 'حرکت به جیپور و بازدید از قلعه عنبر',
        day: 'شنبه 21 مهر',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=500&h=300&fit=crop',
      },
      {
        id: 5,
        title: 'بازدید از کاخ بادها و بازگشت به دهلی',
        day: 'یکشنبه 22 مهر',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      },
    ],
    gallery: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
        alt: 'تاج محل آگرا',
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        alt: 'قلعه سرخ دهلی',
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop',
        alt: 'قلعه عنبر جیپور',
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        alt: 'کاخ بادها جیپور',
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop',
        alt: 'بازار محلی هند',
      },
    ],
    availableDates: [
      {
        id: 1,
        day: 'شنبه',
        dayNum: 5,
        closed: true,
        notfound: true,
      },
      {
        id: 2,
        day: 'یکشنبه',
        dayNum: 6,
        closed: false,
        notfound: false,
      },
      {
        id: 3,
        day: 'دوشنبه',
        dayNum: 7,
        closed: false,
        notfound: false,
      },
      {
        id: 4,
        day: 'سه‌شنبه',
        dayNum: 8,
        closed: true,
        notfound: true,
      },
      {
        id: 5,
        day: 'چهارشنبه',
        dayNum: 9,
        closed: false,
        notfound: false,
      },
      {
        id: 6,
        day: 'پنج‌شنبه',
        dayNum: 10,
        closed: false,
        notfound: false,
      },
      {
        id: 7,
        day: 'جمعه',
        dayNum: 11,
        closed: true,
        notfound: false,
      },
    ],
    remaining: 5,
    isLastMinute: false,
    maxCapacity: 25,
  },
  {
    id: 2,
    slug: 'india-golden-triangle',
    destination: 'هندوستان',
    title: 'تور مثلث طلایی هند',
    shortDescription: 'سفری فراموش‌نشدنی به قلب تمدن هند',
    date: '۱۴۰۳/۰۸/۱۸',
    duration: {
      nights: 9,
      days: 10,
      description: '۹ شب و ۱۰ روز',
    },
    price: {
      original: 85000000,
      discounted: 75000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: [
      { id: 1, title: 'اقامتگاه' },
      { id: 2, title: 'حمل و نقل' },
      { id: 3, title: 'لیدر محلی' },
      { id: 4, title: 'وعده غذایی' },
      { id: 5, title: 'بیمه مسافرتی' },
    ],
    requiredTools: [
      { id: 1, title: 'کفش کتونی مناسب برای گشت‌های طولانی' },
      { id: 2, title: 'کلاه نقاب‌دار برای محافظت از آفتاب' },
      { id: 3, title: 'وسایل حمام شخصی' },
      { id: 4, title: 'داروهای شخصی و کیت کمک‌های اولیه' },
      { id: 5, title: 'لباس‌های مناسب آب و هوای گرم' },
    ],
    policies: [
      { id: 1, title: 'از زمان ثبت نام تا 15 روز قبل از سفر شامل جریمه نمی‌شود' },
      { id: 2, title: 'از 15 تا 7 روز قبل از سفر 30% جریمه کنسلی' },
      { id: 3, title: 'از 7 تا 3 روز قبل از سفر 50% جریمه کنسلی' },
      { id: 4, title: 'کمتر از 3 روز قبل از سفر 100% جریمه کنسلی' },
      { id: 5, title: 'تغییر نام مسافر تا 24 ساعت قبل از سفر امکان‌پذیر است' },
    ],
    tourInfo: [
      {
        id: 1,
        icon: 'Calendar',
        label: 'تاریخ شروع',
        value: 'چهارشنبه 18 مهر، ساعت 6:30 صبح',
      },
      {
        id: 2,
        icon: 'MapPin',
        label: 'مبدا حرکت',
        value: 'فرودگاه امام خمینی (ره)',
      },
      {
        id: 3,
        icon: 'Users',
        label: 'ظرفیت تور',
        value: 'حداکثر 25 نفر',
      },
      {
        id: 4,
        icon: 'Utensils',
        label: 'وعده غذایی',
        value: '7 وعده غذایی کامل',
      },
      {
        id: 5,
        icon: 'Bed',
        label: 'اقامت',
        value: 'هتل 4 ستاره در مرکز شهر',
      },
      {
        id: 6,
        icon: 'Shield',
        label: 'بیمه',
        value: 'بیمه مسافرتی کامل',
      },
      {
        id: 7,
        icon: 'Car',
        label: 'حمل و نقل',
        value: 'اتوبوس VIP + پروازهای داخلی',
      },
    ],
    tourPlans: [
      {
        id: 1,
        title: 'پرواز تهران به دهلی و انتقال به هتل',
        day: 'چهارشنبه 18 مهر',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop',
      },
      {
        id: 2,
        title: 'بازدید از قلعه سرخ دهلی و مسجد جامع',
        day: 'پنج‌شنبه 19 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 3,
        title: 'سفر به آگرا و بازدید از تاج محل',
        day: 'جمعه 20 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 4,
        title: 'حرکت به جیپور و بازدید از قلعه عنبر',
        day: 'شنبه 21 مهر',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=500&h=300&fit=crop',
      },
      {
        id: 5,
        title: 'بازدید از کاخ بادها و بازگشت به دهلی',
        day: 'یکشنبه 22 مهر',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      },
    ],
    gallery: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
        alt: 'تاج محل آگرا',
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        alt: 'قلعه سرخ دهلی',
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop',
        alt: 'قلعه عنبر جیپور',
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        alt: 'کاخ بادها جیپور',
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop',
        alt: 'بازار محلی هند',
      },
    ],
    availableDates: [
      {
        id: 1,
        day: 'شنبه',
        dayNum: 5,
        closed: true,
        notfound: true,
      },
      {
        id: 2,
        day: 'یکشنبه',
        dayNum: 6,
        closed: false,
        notfound: false,
      },
      {
        id: 3,
        day: 'دوشنبه',
        dayNum: 7,
        closed: false,
        notfound: false,
      },
      {
        id: 4,
        day: 'سه‌شنبه',
        dayNum: 8,
        closed: true,
        notfound: true,
      },
      {
        id: 5,
        day: 'چهارشنبه',
        dayNum: 9,
        closed: false,
        notfound: false,
      },
      {
        id: 6,
        day: 'پنج‌شنبه',
        dayNum: 10,
        closed: false,
        notfound: false,
      },
      {
        id: 7,
        day: 'جمعه',
        dayNum: 11,
        closed: true,
        notfound: false,
      },
    ],
    remaining: 5,
    isLastMinute: false,
    maxCapacity: 25,
  },
  {
    id: 3,
    slug: 'india-golden-triangle',
    destination: 'هندوستان',
    title: 'تور مثلث طلایی هند',
    shortDescription: 'سفری فراموش‌نشدنی به قلب تمدن هند',
    date: '۱۴۰۳/۰۸/۱۸',
    duration: {
      nights: 9,
      days: 10,
      description: '۹ شب و ۱۰ روز',
    },
    price: {
      original: 85000000,
      discounted: 75000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: [
      { id: 1, title: 'اقامتگاه' },
      { id: 2, title: 'حمل و نقل' },
      { id: 3, title: 'لیدر محلی' },
      { id: 4, title: 'وعده غذایی' },
      { id: 5, title: 'بیمه مسافرتی' },
    ],
    requiredTools: [
      { id: 1, title: 'کفش کتونی مناسب برای گشت‌های طولانی' },
      { id: 2, title: 'کلاه نقاب‌دار برای محافظت از آفتاب' },
      { id: 3, title: 'وسایل حمام شخصی' },
      { id: 4, title: 'داروهای شخصی و کیت کمک‌های اولیه' },
      { id: 5, title: 'لباس‌های مناسب آب و هوای گرم' },
    ],
    policies: [
      { id: 1, title: 'از زمان ثبت نام تا 15 روز قبل از سفر شامل جریمه نمی‌شود' },
      { id: 2, title: 'از 15 تا 7 روز قبل از سفر 30% جریمه کنسلی' },
      { id: 3, title: 'از 7 تا 3 روز قبل از سفر 50% جریمه کنسلی' },
      { id: 4, title: 'کمتر از 3 روز قبل از سفر 100% جریمه کنسلی' },
      { id: 5, title: 'تغییر نام مسافر تا 24 ساعت قبل از سفر امکان‌پذیر است' },
    ],
    tourInfo: [
      {
        id: 1,
        icon: 'Calendar',
        label: 'تاریخ شروع',
        value: 'چهارشنبه 18 مهر، ساعت 6:30 صبح',
      },
      {
        id: 2,
        icon: 'MapPin',
        label: 'مبدا حرکت',
        value: 'فرودگاه امام خمینی (ره)',
      },
      {
        id: 3,
        icon: 'Users',
        label: 'ظرفیت تور',
        value: 'حداکثر 25 نفر',
      },
      {
        id: 4,
        icon: 'Utensils',
        label: 'وعده غذایی',
        value: '7 وعده غذایی کامل',
      },
      {
        id: 5,
        icon: 'Bed',
        label: 'اقامت',
        value: 'هتل 4 ستاره در مرکز شهر',
      },
      {
        id: 6,
        icon: 'Shield',
        label: 'بیمه',
        value: 'بیمه مسافرتی کامل',
      },
      {
        id: 7,
        icon: 'Car',
        label: 'حمل و نقل',
        value: 'اتوبوس VIP + پروازهای داخلی',
      },
    ],
    tourPlans: [
      {
        id: 1,
        title: 'پرواز تهران به دهلی و انتقال به هتل',
        day: 'چهارشنبه 18 مهر',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop',
      },
      {
        id: 2,
        title: 'بازدید از قلعه سرخ دهلی و مسجد جامع',
        day: 'پنج‌شنبه 19 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 3,
        title: 'سفر به آگرا و بازدید از تاج محل',
        day: 'جمعه 20 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 4,
        title: 'حرکت به جیپور و بازدید از قلعه عنبر',
        day: 'شنبه 21 مهر',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=500&h=300&fit=crop',
      },
      {
        id: 5,
        title: 'بازدید از کاخ بادها و بازگشت به دهلی',
        day: 'یکشنبه 22 مهر',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      },
    ],
    gallery: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
        alt: 'تاج محل آگرا',
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        alt: 'قلعه سرخ دهلی',
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop',
        alt: 'قلعه عنبر جیپور',
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        alt: 'کاخ بادها جیپور',
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop',
        alt: 'بازار محلی هند',
      },
    ],
    availableDates: [
      {
        id: 1,
        day: 'شنبه',
        dayNum: 5,
        closed: true,
        notfound: true,
      },
      {
        id: 2,
        day: 'یکشنبه',
        dayNum: 6,
        closed: false,
        notfound: false,
      },
      {
        id: 3,
        day: 'دوشنبه',
        dayNum: 7,
        closed: false,
        notfound: false,
      },
      {
        id: 4,
        day: 'سه‌شنبه',
        dayNum: 8,
        closed: true,
        notfound: true,
      },
      {
        id: 5,
        day: 'چهارشنبه',
        dayNum: 9,
        closed: false,
        notfound: false,
      },
      {
        id: 6,
        day: 'پنج‌شنبه',
        dayNum: 10,
        closed: false,
        notfound: false,
      },
      {
        id: 7,
        day: 'جمعه',
        dayNum: 11,
        closed: true,
        notfound: false,
      },
    ],
    remaining: 5,
    isLastMinute: false,
    maxCapacity: 25,
  },
  {
    id: 4,
    slug: 'india-golden-triangle',
    destination: 'هندوستان',
    title: 'تور مثلث طلایی هند',
    shortDescription: 'سفری فراموش‌نشدنی به قلب تمدن هند',
    date: '۱۴۰۳/۰۸/۱۸',
    duration: {
      nights: 9,
      days: 10,
      description: '۹ شب و ۱۰ روز',
    },
    price: {
      original: 85000000,
      discounted: 75000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: [
      { id: 1, title: 'اقامتگاه' },
      { id: 2, title: 'حمل و نقل' },
      { id: 3, title: 'لیدر محلی' },
      { id: 4, title: 'وعده غذایی' },
      { id: 5, title: 'بیمه مسافرتی' },
    ],
    requiredTools: [
      { id: 1, title: 'کفش کتونی مناسب برای گشت‌های طولانی' },
      { id: 2, title: 'کلاه نقاب‌دار برای محافظت از آفتاب' },
      { id: 3, title: 'وسایل حمام شخصی' },
      { id: 4, title: 'داروهای شخصی و کیت کمک‌های اولیه' },
      { id: 5, title: 'لباس‌های مناسب آب و هوای گرم' },
    ],
    policies: [
      { id: 1, title: 'از زمان ثبت نام تا 15 روز قبل از سفر شامل جریمه نمی‌شود' },
      { id: 2, title: 'از 15 تا 7 روز قبل از سفر 30% جریمه کنسلی' },
      { id: 3, title: 'از 7 تا 3 روز قبل از سفر 50% جریمه کنسلی' },
      { id: 4, title: 'کمتر از 3 روز قبل از سفر 100% جریمه کنسلی' },
      { id: 5, title: 'تغییر نام مسافر تا 24 ساعت قبل از سفر امکان‌پذیر است' },
    ],
    tourInfo: [
      {
        id: 1,
        icon: 'Calendar',
        label: 'تاریخ شروع',
        value: 'چهارشنبه 18 مهر، ساعت 6:30 صبح',
      },
      {
        id: 2,
        icon: 'MapPin',
        label: 'مبدا حرکت',
        value: 'فرودگاه امام خمینی (ره)',
      },
      {
        id: 3,
        icon: 'Users',
        label: 'ظرفیت تور',
        value: 'حداکثر 25 نفر',
      },
      {
        id: 4,
        icon: 'Utensils',
        label: 'وعده غذایی',
        value: '7 وعده غذایی کامل',
      },
      {
        id: 5,
        icon: 'Bed',
        label: 'اقامت',
        value: 'هتل 4 ستاره در مرکز شهر',
      },
      {
        id: 6,
        icon: 'Shield',
        label: 'بیمه',
        value: 'بیمه مسافرتی کامل',
      },
      {
        id: 7,
        icon: 'Car',
        label: 'حمل و نقل',
        value: 'اتوبوس VIP + پروازهای داخلی',
      },
    ],
    tourPlans: [
      {
        id: 1,
        title: 'پرواز تهران به دهلی و انتقال به هتل',
        day: 'چهارشنبه 18 مهر',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop',
      },
      {
        id: 2,
        title: 'بازدید از قلعه سرخ دهلی و مسجد جامع',
        day: 'پنج‌شنبه 19 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 3,
        title: 'سفر به آگرا و بازدید از تاج محل',
        day: 'جمعه 20 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 4,
        title: 'حرکت به جیپور و بازدید از قلعه عنبر',
        day: 'شنبه 21 مهر',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=500&h=300&fit=crop',
      },
      {
        id: 5,
        title: 'بازدید از کاخ بادها و بازگشت به دهلی',
        day: 'یکشنبه 22 مهر',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      },
    ],
    gallery: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
        alt: 'تاج محل آگرا',
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        alt: 'قلعه سرخ دهلی',
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop',
        alt: 'قلعه عنبر جیپور',
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        alt: 'کاخ بادها جیپور',
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop',
        alt: 'بازار محلی هند',
      },
    ],
    availableDates: [
      {
        id: 1,
        day: 'شنبه',
        dayNum: 5,
        closed: true,
        notfound: true,
      },
      {
        id: 2,
        day: 'یکشنبه',
        dayNum: 6,
        closed: false,
        notfound: false,
      },
      {
        id: 3,
        day: 'دوشنبه',
        dayNum: 7,
        closed: false,
        notfound: false,
      },
      {
        id: 4,
        day: 'سه‌شنبه',
        dayNum: 8,
        closed: true,
        notfound: true,
      },
      {
        id: 5,
        day: 'چهارشنبه',
        dayNum: 9,
        closed: false,
        notfound: false,
      },
      {
        id: 6,
        day: 'پنج‌شنبه',
        dayNum: 10,
        closed: false,
        notfound: false,
      },
      {
        id: 7,
        day: 'جمعه',
        dayNum: 11,
        closed: true,
        notfound: false,
      },
    ],
    remaining: 5,
    isLastMinute: false,
    maxCapacity: 25,
  },
  {
    id: 5,
    slug: 'india-golden-triangle',
    destination: 'هندوستان',
    title: 'تور مثلث طلایی هند',
    shortDescription: 'سفری فراموش‌نشدنی به قلب تمدن هند',
    date: '۱۴۰۳/۰۸/۱۸',
    duration: {
      nights: 9,
      days: 10,
      description: '۹ شب و ۱۰ روز',
    },
    price: {
      original: 85000000,
      discounted: 75000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: [
      { id: 1, title: 'اقامتگاه' },
      { id: 2, title: 'حمل و نقل' },
      { id: 3, title: 'لیدر محلی' },
      { id: 4, title: 'وعده غذایی' },
      { id: 5, title: 'بیمه مسافرتی' },
    ],
    requiredTools: [
      { id: 1, title: 'کفش کتونی مناسب برای گشت‌های طولانی' },
      { id: 2, title: 'کلاه نقاب‌دار برای محافظت از آفتاب' },
      { id: 3, title: 'وسایل حمام شخصی' },
      { id: 4, title: 'داروهای شخصی و کیت کمک‌های اولیه' },
      { id: 5, title: 'لباس‌های مناسب آب و هوای گرم' },
    ],
    policies: [
      { id: 1, title: 'از زمان ثبت نام تا 15 روز قبل از سفر شامل جریمه نمی‌شود' },
      { id: 2, title: 'از 15 تا 7 روز قبل از سفر 30% جریمه کنسلی' },
      { id: 3, title: 'از 7 تا 3 روز قبل از سفر 50% جریمه کنسلی' },
      { id: 4, title: 'کمتر از 3 روز قبل از سفر 100% جریمه کنسلی' },
      { id: 5, title: 'تغییر نام مسافر تا 24 ساعت قبل از سفر امکان‌پذیر است' },
    ],
    tourInfo: [
      {
        id: 1,
        icon: 'Calendar',
        label: 'تاریخ شروع',
        value: 'چهارشنبه 18 مهر، ساعت 6:30 صبح',
      },
      {
        id: 2,
        icon: 'MapPin',
        label: 'مبدا حرکت',
        value: 'فرودگاه امام خمینی (ره)',
      },
      {
        id: 3,
        icon: 'Users',
        label: 'ظرفیت تور',
        value: 'حداکثر 25 نفر',
      },
      {
        id: 4,
        icon: 'Utensils',
        label: 'وعده غذایی',
        value: '7 وعده غذایی کامل',
      },
      {
        id: 5,
        icon: 'Bed',
        label: 'اقامت',
        value: 'هتل 4 ستاره در مرکز شهر',
      },
      {
        id: 6,
        icon: 'Shield',
        label: 'بیمه',
        value: 'بیمه مسافرتی کامل',
      },
      {
        id: 7,
        icon: 'Car',
        label: 'حمل و نقل',
        value: 'اتوبوس VIP + پروازهای داخلی',
      },
    ],
    tourPlans: [
      {
        id: 1,
        title: 'پرواز تهران به دهلی و انتقال به هتل',
        day: 'چهارشنبه 18 مهر',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop',
      },
      {
        id: 2,
        title: 'بازدید از قلعه سرخ دهلی و مسجد جامع',
        day: 'پنج‌شنبه 19 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 3,
        title: 'سفر به آگرا و بازدید از تاج محل',
        day: 'جمعه 20 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 4,
        title: 'حرکت به جیپور و بازدید از قلعه عنبر',
        day: 'شنبه 21 مهر',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=500&h=300&fit=crop',
      },
      {
        id: 5,
        title: 'بازدید از کاخ بادها و بازگشت به دهلی',
        day: 'یکشنبه 22 مهر',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      },
    ],
    gallery: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
        alt: 'تاج محل آگرا',
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        alt: 'قلعه سرخ دهلی',
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop',
        alt: 'قلعه عنبر جیپور',
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        alt: 'کاخ بادها جیپور',
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop',
        alt: 'بازار محلی هند',
      },
    ],
    availableDates: [
      {
        id: 1,
        day: 'شنبه',
        dayNum: 5,
        closed: true,
        notfound: true,
      },
      {
        id: 2,
        day: 'یکشنبه',
        dayNum: 6,
        closed: false,
        notfound: false,
      },
      {
        id: 3,
        day: 'دوشنبه',
        dayNum: 7,
        closed: false,
        notfound: false,
      },
      {
        id: 4,
        day: 'سه‌شنبه',
        dayNum: 8,
        closed: true,
        notfound: true,
      },
      {
        id: 5,
        day: 'چهارشنبه',
        dayNum: 9,
        closed: false,
        notfound: false,
      },
      {
        id: 6,
        day: 'پنج‌شنبه',
        dayNum: 10,
        closed: false,
        notfound: false,
      },
      {
        id: 7,
        day: 'جمعه',
        dayNum: 11,
        closed: true,
        notfound: false,
      },
    ],
    remaining: 5,
    isLastMinute: false,
    maxCapacity: 25,
  },
  {
    id: 1,
    slug: 'india-golden-triangle',
    destination: 'هندوستان',
    title: 'تور مثلث طلایی هند',
    shortDescription: 'سفری فراموش‌نشدنی به قلب تمدن هند',
    date: '۱۴۰۳/۰۸/۱۸',
    duration: {
      nights: 9,
      days: 10,
      description: '۹ شب و ۱۰ روز',
    },
    price: {
      original: 85000000,
      discounted: 75000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: [
      { id: 1, title: 'اقامتگاه' },
      { id: 2, title: 'حمل و نقل' },
      { id: 3, title: 'لیدر محلی' },
      { id: 4, title: 'وعده غذایی' },
      { id: 5, title: 'بیمه مسافرتی' },
    ],
    requiredTools: [
      { id: 1, title: 'کفش کتونی مناسب برای گشت‌های طولانی' },
      { id: 2, title: 'کلاه نقاب‌دار برای محافظت از آفتاب' },
      { id: 3, title: 'وسایل حمام شخصی' },
      { id: 4, title: 'داروهای شخصی و کیت کمک‌های اولیه' },
      { id: 5, title: 'لباس‌های مناسب آب و هوای گرم' },
    ],
    policies: [
      { id: 1, title: 'از زمان ثبت نام تا 15 روز قبل از سفر شامل جریمه نمی‌شود' },
      { id: 2, title: 'از 15 تا 7 روز قبل از سفر 30% جریمه کنسلی' },
      { id: 3, title: 'از 7 تا 3 روز قبل از سفر 50% جریمه کنسلی' },
      { id: 4, title: 'کمتر از 3 روز قبل از سفر 100% جریمه کنسلی' },
      { id: 5, title: 'تغییر نام مسافر تا 24 ساعت قبل از سفر امکان‌پذیر است' },
    ],
    tourInfo: [
      {
        id: 1,
        icon: 'Calendar',
        label: 'تاریخ شروع',
        value: 'چهارشنبه 18 مهر، ساعت 6:30 صبح',
      },
      {
        id: 2,
        icon: 'MapPin',
        label: 'مبدا حرکت',
        value: 'فرودگاه امام خمینی (ره)',
      },
      {
        id: 3,
        icon: 'Users',
        label: 'ظرفیت تور',
        value: 'حداکثر 25 نفر',
      },
      {
        id: 4,
        icon: 'Utensils',
        label: 'وعده غذایی',
        value: '7 وعده غذایی کامل',
      },
      {
        id: 5,
        icon: 'Bed',
        label: 'اقامت',
        value: 'هتل 4 ستاره در مرکز شهر',
      },
      {
        id: 6,
        icon: 'Shield',
        label: 'بیمه',
        value: 'بیمه مسافرتی کامل',
      },
      {
        id: 7,
        icon: 'Car',
        label: 'حمل و نقل',
        value: 'اتوبوس VIP + پروازهای داخلی',
      },
    ],
    tourPlans: [
      {
        id: 1,
        title: 'پرواز تهران به دهلی و انتقال به هتل',
        day: 'چهارشنبه 18 مهر',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=300&fit=crop',
      },
      {
        id: 2,
        title: 'بازدید از قلعه سرخ دهلی و مسجد جامع',
        day: 'پنج‌شنبه 19 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 3,
        title: 'سفر به آگرا و بازدید از تاج محل',
        day: 'جمعه 20 مهر',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=300&fit=crop',
      },
      {
        id: 4,
        title: 'حرکت به جیپور و بازدید از قلعه عنبر',
        day: 'شنبه 21 مهر',
        image: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=500&h=300&fit=crop',
      },
      {
        id: 5,
        title: 'بازدید از کاخ بادها و بازگشت به دهلی',
        day: 'یکشنبه 22 مهر',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
      },
    ],
    gallery: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
        alt: 'تاج محل آگرا',
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
        alt: 'قلعه سرخ دهلی',
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=400&h=300&fit=crop',
        alt: 'قلعه عنبر جیپور',
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
        alt: 'کاخ بادها جیپور',
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop',
        alt: 'بازار محلی هند',
      },
    ],
    availableDates: [
      {
        id: 1,
        day: 'شنبه',
        dayNum: 5,
        closed: true,
        notfound: true,
      },
      {
        id: 2,
        day: 'یکشنبه',
        dayNum: 6,
        closed: false,
        notfound: false,
      },
      {
        id: 3,
        day: 'دوشنبه',
        dayNum: 7,
        closed: false,
        notfound: false,
      },
      {
        id: 4,
        day: 'سه‌شنبه',
        dayNum: 8,
        closed: true,
        notfound: true,
      },
      {
        id: 5,
        day: 'چهارشنبه',
        dayNum: 9,
        closed: false,
        notfound: false,
      },
      {
        id: 6,
        day: 'پنج‌شنبه',
        dayNum: 10,
        closed: false,
        notfound: false,
      },
      {
        id: 7,
        day: 'جمعه',
        dayNum: 11,
        closed: true,
        notfound: false,
      },
    ],
    remaining: 5,
    isLastMinute: false,
    maxCapacity: 25,
  },
  {
    id: 6,
    slug: 'dubai-luxury',
    destination: 'دبی',
    title: 'تور لاکچری دبی',
    shortDescription: 'تجربه‌ای بی‌نظیر از شهر آسمان‌خراش‌ها',
    date: '۱۴۰۳/۰۸/۲۵',
    duration: {
      nights: 6,
      days: 7,
      description: '۶ شب و ۷ روز',
    },
    price: {
      original: 65000000,
      discounted: 58000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 5,
      description: 'اقامت در هتل ۵ ستاره',
    },
    services: [
      { id: 1, title: 'اقامتگاه لاکچری' },
      { id: 2, title: 'حمل و نقل VIP' },
      { id: 3, title: 'گاید فارسی‌زبان' },
      { id: 4, title: 'وعده غذایی' },
      { id: 5, title: 'تورهای اختیاری' },
    ],
    requiredTools: [
      { id: 1, title: 'لباس‌های تابستانی و راحت' },
      { id: 2, title: 'کرم ضد آفتاب قوی' },
      { id: 3, title: 'عینک آفتابی' },
      { id: 4, title: 'کفش راحت برای پیاده‌روی' },
      { id: 5, title: 'لباس شنا برای استفاده از ساحل' },
    ],
    policies: [
      { id: 1, title: 'کنسلی تا 10 روز قبل از سفر بدون جریمه' },
      { id: 2, title: 'از 10 تا 5 روز قبل از سفر 25% جریمه' },
      { id: 3, title: 'از 5 تا 2 روز قبل از سفر 50% جریمه' },
      { id: 4, title: 'کمتر از 2 روز قبل از سفر 100% جریمه' },
      { id: 5, title: 'امکان تغییر تاریخ تا یک بار' },
    ],
    tourInfo: [
      {
        id: 1,
        icon: 'Calendar',
        label: 'تاریخ شروع',
        value: 'جمعه 25 مهر، ساعت 14:30',
      },
      {
        id: 2,
        icon: 'MapPin',
        label: 'مبدا حرکت',
        value: 'فرودگاه امام خمینی (ره)',
      },
      {
        id: 3,
        icon: 'Users',
        label: 'ظرفیت تور',
        value: 'حداکثر 20 نفر',
      },
      {
        id: 4,
        icon: 'Utensils',
        label: 'وعده غذایی',
        value: '6 وعده غذایی',
      },
      {
        id: 5,
        icon: 'Bed',
        label: 'اقامت',
        value: 'هتل 5 ستاره در مرکز دبی',
      },
      {
        id: 6,
        icon: 'Shield',
        label: 'بیمه',
        value: 'بیمه مسافرتی کامل',
      },
      {
        id: 7,
        icon: 'Car',
        label: 'حمل و نقل',
        value: 'خودروی VIP + پرواز مستقیم',
      },
    ],
    tourPlans: [
      {
        id: 1,
        title: 'پرواز تهران به دبی و اسکان در هتل',
        day: 'جمعه 25 مهر',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=300&fit=crop',
      },
      {
        id: 2,
        title: 'بازدید از برج خلیفه و مال دبی',
        day: 'شنبه 26 مهر',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&h=300&fit=crop',
      },
      {
        id: 3,
        title: 'تور صحرا و شام در کویر',
        day: 'یکشنبه 27 مهر',
        image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=500&h=300&fit=crop',
      },
      {
        id: 4,
        title: 'کروز در خلیج فارس و بازدید از جزیره پالم',
        day: 'دوشنبه 28 مهر',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop',
      },
      {
        id: 5,
        title: 'خرید از بازار طلا و ادویه‌جات',
        day: 'سه‌شنبه 29 مهر',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
      },
    ],
    gallery: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
        alt: 'برج خلیفه دبی',
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=300&fit=crop',
        alt: 'مال دبی',
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop',
        alt: 'صحرای دبی',
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
        alt: 'جزیره پالم',
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        alt: 'بازار طلای دبی',
      },
    ],
    availableDates: [
      {
        id: 1,
        day: 'شنبه',
        dayNum: 12,
        closed: false,
        notfound: false,
      },
      {
        id: 2,
        day: 'یکشنبه',
        dayNum: 13,
        closed: false,
        notfound: false,
      },
      {
        id: 3,
        day: 'دوشنبه',
        dayNum: 14,
        closed: true,
        notfound: true,
      },
      {
        id: 4,
        day: 'سه‌شنبه',
        dayNum: 15,
        closed: false,
        notfound: false,
      },
      {
        id: 5,
        day: 'چهارشنبه',
        dayNum: 16,
        closed: false,
        notfound: false,
      },
      {
        id: 6,
        day: 'پنج‌شنبه',
        dayNum: 17,
        closed: true,
        notfound: false,
      },
      {
        id: 7,
        day: 'جمعه',
        dayNum: 18,
        closed: false,
        notfound: false,
      },
    ],
    remaining: 3,
    isLastMinute: true,
    maxCapacity: 20,
  },
  {
    id: 7,
    slug: 'turkey-istanbul',
    destination: 'ترکیه',
    title: 'تور استانبول',
    shortDescription: 'شهری در دو قاره، تاریخی و مدرن',
    date: '۱۴۰۳/۰۹/۰۵',
    duration: {
      nights: 7,
      days: 8,
      description: '۷ شب و ۸ روز',
    },
    price: {
      original: 95000000,
      discounted: 85000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: [
      { id: 1, title: 'اقامتگاه' },
      { id: 2, title: 'حمل و نقل' },
      { id: 3, title: 'راهنمای محلی' },
      { id: 4, title: 'صبحانه روزانه' },
      { id: 5, title: 'بیمه مسافرتی' },
    ],
    requiredTools: [
      { id: 1, title: 'کفش راحت برای پیاده‌روی در شهر' },
      { id: 2, title: 'لباس‌های مناسب برای بازدید از مساجد' },
      { id: 3, title: 'کیف کوچک برای حمل وسایل شخصی' },
      { id: 4, title: 'دوربین برای عکاسی' },
      { id: 5, title: 'نقشه یا اپلیکیشن مسیریابی' },
    ],
    policies: [
      { id: 1, title: 'کنسلی تا 20 روز قبل از سفر بدون جریمه' },
      { id: 2, title: 'از 20 تا 10 روز قبل از سفر 20% جریمه' },
      { id: 3, title: 'از 10 تا 5 روز قبل از سفر 40% جریمه' },
      { id: 4, title: 'کمتر از 5 روز قبل از سفر 80% جریمه' },
      { id: 5, title: 'امکان تغییر نام مسافر تا 48 ساعت قبل' },
    ],
    tourInfo: [
      {
        id: 1,
        icon: 'Calendar',
        label: 'تاریخ شروع',
        value: 'دوشنبه 5 آذر، ساعت 10:00 صبح',
      },
      {
        id: 2,
        icon: 'MapPin',
        label: 'مبدا حرکت',
        value: 'فرودگاه مهرآباد',
      },
      {
        id: 3,
        icon: 'Users',
        label: 'ظرفیت تور',
        value: 'حداکثر 30 نفر',
      },
      {
        id: 4,
        icon: 'Utensils',
        label: 'وعده غذایی',
        value: '8 صبحانه + 4 شام',
      },
      {
        id: 5,
        icon: 'Bed',
        label: 'اقامت',
        value: 'هتل 4 ستاره در منطقه سلطان احمد',
      },
      {
        id: 6,
        icon: 'Shield',
        label: 'بیمه',
        value: 'بیمه مسافرتی اروپا',
      },
      {
        id: 7,
        icon: 'Car',
        label: 'حمل و نقل',
        value: 'اتوبوس توریستی + پرواز مستقیم',
      },
    ],
    tourPlans: [
      {
        id: 1,
        title: 'پرواز تهران به استانبول و اسکان در هتل',
        day: 'دوشنبه 5 آذر',
        image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=500&h=300&fit=crop',
      },
      {
        id: 2,
        title: 'بازدید از آیاصوفیه و مسجد آبی',
        day: 'سه‌شنبه 6 آذر',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=500&h=300&fit=crop',
      },
      {
        id: 3,
        title: 'کاخ توپکاپی و بازار بزرگ',
        day: 'چهارشنبه 7 آذر',
        image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=500&h=300&fit=crop',
      },
      {
        id: 4,
        title: 'کروز در تنگه بسفر',
        day: 'پنج‌شنبه 8 آذر',
        image: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=500&h=300&fit=crop',
      },
      {
        id: 5,
        title: 'منطقه گالاتا و برج گالاتا',
        day: 'جمعه 9 آذر',
        image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=500&h=300&fit=crop',
      },
    ],
    gallery: [
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=600&fit=crop',
        alt: 'آیاصوفیه استانبول',
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
        alt: 'مسجد آبی',
      },
      {
        id: 3,
        img: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?w=400&h=300&fit=crop',
        alt: 'بازار بزرگ استانبول',
      },
      {
        id: 4,
        img: 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=400&h=300&fit=crop',
        alt: 'تنگه بسفر',
      },
      {
        id: 5,
        img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop',
        alt: 'برج گالاتا',
      },
    ],
    availableDates: [
      {
        id: 1,
        day: 'شنبه',
        dayNum: 19,
        closed: false,
        notfound: false,
      },
      {
        id: 2,
        day: 'یکشنبه',
        dayNum: 20,
        closed: true,
        notfound: true,
      },
      {
        id: 3,
        day: 'دوشنبه',
        dayNum: 21,
        closed: false,
        notfound: false,
      },
      {
        id: 4,
        day: 'سه‌شنبه',
        dayNum: 22,
        closed: false,
        notfound: false,
      },
      {
        id: 5,
        day: 'چهارشنبه',
        dayNum: 23,
        closed: false,
        notfound: false,
      },
      {
        id: 6,
        day: 'پنج‌شنبه',
        dayNum: 24,
        closed: true,
        notfound: false,
      },
      {
        id: 7,
        day: 'جمعه',
        dayNum: 25,
        closed: false,
        notfound: false,
      },
    ],
    remaining: 8,
    isLastMinute: false,
    maxCapacity: 30,
  },
];

let favoriteTours = [];

if (isBrowser) {
  try {
    const stored = localStorage.getItem('favoriteTours');
    if (stored) {
      favoriteTours = JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error loading favorites from localStorage:', e);
  }
} else {
  favoriteTours = [];
}

export const tourService = {
  async getTours(filters = {}) {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      let filteredTours = [...mockTourData];

      if (filters.isLastMinute) {
        filteredTours = filteredTours.filter(tour => tour.isLastMinute === true);
      }

      if (filters.isPopular) {
        filteredTours = filteredTours.filter(tour => tour.price.hasDiscount === true);
      }

      if (filters.destination) {
        filteredTours = filteredTours.filter(tour =>
          tour.destination.toLowerCase().includes(filters.destination.toLowerCase())
        );
      }

      if (filters.minPrice) {
        filteredTours = filteredTours.filter(
          tour => tour.price.discounted >= parseInt(filters.minPrice, 10)
        );
      }

      if (filters.maxPrice) {
        filteredTours = filteredTours.filter(
          tour => tour.price.discounted <= parseInt(filters.maxPrice, 10)
        );
      }

      return {
        data: filteredTours,
        meta: {
          total: filteredTours.length,
          per_page: 10,
          current_page: parseInt(filters.page || '1', 10),
          last_page: Math.ceil(filteredTours.length / 10),
        },
      };
    } catch (error) {
      console.error('Error fetching tours:', error);
      throw error;
    }
  },

  async getTourById(id) {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      const tour = mockTourData.find(tour => tour.id.toString() === id.toString());

      if (!tour) {
        throw new Error('تور مورد نظر یافت نشد');
      }

      return tour;
    } catch (error) {
      console.error(`Error fetching tour with ID ${id}:`, error);
      throw error;
    }
  },

  async getFiltersOptions() {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      return {
        price_ranges: [
          { id: '1', label: 'کمتر از ۵۰ میلیون تومان' },
          { id: '2', label: '۵۰ تا ۱۰۰ میلیون تومان' },
          { id: '3', label: '۱۰۰ تا ۱۵۰ میلیون تومان' },
          { id: '4', label: 'بیشتر از ۱۵۰ میلیون تومان' },
        ],
        tour_types: [
          { id: '1', name: 'تور طبیعت‌گردی' },
          { id: '2', name: 'تور تاریخی' },
          { id: '3', name: 'تور ساحلی' },
          { id: '4', name: 'تور ماه عسل' },
          { id: '5', name: 'تور خانوادگی' },
        ],
        difficulty_levels: [
          { id: '1', name: 'آسان' },
          { id: '2', name: 'متوسط' },
          { id: '3', name: 'سخت' },
        ],
        transport_types: [
          { id: '1', name: 'هواپیما' },
          { id: '2', name: 'قطار' },
          { id: '3', name: 'اتوبوس' },
          { id: '4', name: 'کشتی' },
        ],
        available_months: [
          { id: '1', name: 'فروردین' },
          { id: '2', name: 'اردیبهشت' },
          { id: '3', name: 'خرداد' },
          { id: '4', name: 'تیر' },
          { id: '5', name: 'مرداد' },
          { id: '6', name: 'شهریور' },
          { id: '7', name: 'مهر' },
          { id: '8', name: 'آبان' },
          { id: '9', name: 'آذر' },
          { id: '10', name: 'دی' },
          { id: '11', name: 'بهمن' },
          { id: '12', name: 'اسفند' },
        ],
      };
    } catch (error) {
      console.error('Error fetching filter options:', error);
      throw error;
    }
  },

  async getFavorites() {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));

      if (isBrowser) {
        try {
          const stored = localStorage.getItem('favoriteTours');
          if (stored) {
            favoriteTours = JSON.parse(stored);
          }
        } catch (e) {
          console.error('Error loading favorites from localStorage:', e);
        }
      }

      return favoriteTours;
    } catch (error) {
      console.error('Error fetching favorites:', error);
      throw error;
    }
  },

  async addToFavorites(tour) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));

      if (!favoriteTours.some(fav => fav.id === tour.id)) {
        favoriteTours.push(tour);

        if (isBrowser) {
          try {
            localStorage.setItem('favoriteTours', JSON.stringify(favoriteTours));
          } catch (e) {
            console.error('Error saving to localStorage:', e);
          }
        }
      }

      return { success: true };
    } catch (error) {
      console.error('Error adding to favorites:', error);
      throw error;
    }
  },

  async removeFromFavorites(tourId) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));

      favoriteTours = favoriteTours.filter(tour => tour.id !== tourId);

      if (isBrowser) {
        try {
          localStorage.setItem('favoriteTours', JSON.stringify(favoriteTours));
        } catch (e) {
          console.error('Error saving to localStorage:', e);
        }
      }

      return { success: true };
    } catch (error) {
      console.error('Error removing from favorites:', error);
      throw error;
    }
  },
};

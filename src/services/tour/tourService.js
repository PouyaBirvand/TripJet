const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
const isBrowser = typeof window !== 'undefined';

export const mockTourData = [
  {
    id: 1,
    destination: 'هندوستان',
    title: 'تور ویژه هندوستان',
    date: '۱۴۰۳/۰۵/۰۶',
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
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۳۰ نفر',
      meals: '۷ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 5,
    isLastMinute: false,
    image: 'https://example.com/images/india-tour.jpg',
  },
  {
    id: 2,
    destination: 'ترکیه',
    title: 'تور استانبول',
    date: '۱۴۰۳/۰۵/۱۵',
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
      stars: 5,
      description: 'اقامت در هتل ۵ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۲۵ نفر',
      meals: '۱۰ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 3,
    isLastMinute: true,
    image: 'https://example.com/images/turkey-tour.jpg',
  },
  {
    id: 3,
    destination: 'مالزی',
    title: 'تور کوالالامپور',
    date: '۱۴۰۳/۰۶/۱۰',
    duration: {
      nights: 8,
      days: 9,
      description: '۸ شب و ۹ روز',
    },
    price: {
      original: 78000000,
      discounted: 78000000,
      hasDiscount: false,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۲۰ نفر',
      meals: '۸ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 8,
    isLastMinute: false,
    image: 'https://example.com/images/malaysia-tour.jpg',
  },
  {
    id: 4,
    destination: 'تایلند',
    title: 'تور بانکوک',
    date: '۱۴۰۳/۰۵/۲۵',
    duration: {
      nights: 10,
      days: 11,
      description: '۱۰ شب و ۱۱ روز',
    },
    price: {
      original: 110000000,
      discounted: 95000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 5,
      description: 'اقامت در هتل ۵ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۳۵ نفر',
      meals: '۱۲ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 2,
    isLastMinute: true,
    image: 'https://example.com/images/thailand-tour.jpg',
  },
  {
    id: 5,
    destination: 'دبی',
    title: 'تور دبی',
    date: '۱۴۰۳/۰۶/۰۵',
    duration: {
      nights: 6,
      days: 7,
      description: '۶ شب و ۷ روز',
    },
    price: {
      original: 65000000,
      discounted: 60000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۲۸ نفر',
      meals: '۶ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 7,
    isLastMinute: false,
    image: 'https://example.com/images/dubai-tour.jpg',
  },
  {
    id: 6,
    destination: 'ارمنستان',
    title: 'تور ایروان',
    date: '۱۴۰۳/۰۵/۲۰',
    duration: {
      nights: 5,
      days: 6,
      description: '۵ شب و ۶ روز',
    },
    price: {
      original: 45000000,
      discounted: 40000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 3,
      description: 'اقامت در هتل ۳ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۲۵ نفر',
      meals: '۵ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 4,
    isLastMinute: true,
    image: 'https://example.com/images/armenia-tour.jpg',
  },
  {
    id: 7,
    destination: 'گرجستان',
    title: 'تور تفلیس',
    date: '۱۴۰۳/۰۶/۱۵',
    duration: {
      nights: 7,
      days: 8,
      description: '۷ شب و ۸ روز',
    },
    price: {
      original: 55000000,
      discounted: 55000000,
      hasDiscount: false,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۲۰ نفر',
      meals: '۷ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 6,
    isLastMinute: false,
    image: 'https://example.com/images/georgia-tour.jpg',
  },
  {
    id: 8,
    destination: 'سریلانکا',
    title: 'تور کلمبو',
    date: '۱۴۰۳/۰۷/۰۱',
    duration: {
      nights: 8,
      days: 9,
      description: '۸ شب و ۹ روز',
    },
    price: {
      original: 90000000,
      discounted: 80000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 5,
      description: 'اقامت در هتل ۵ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۲۲ نفر',
      meals: '۹ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 3,
    isLastMinute: true,
    image: 'https://example.com/images/srilanka-tour.jpg',
  },
  {
    id: 9,
    destination: 'ویتنام',
    title: 'تور هانوی',
    date: '۱۴۰۳/۰۶/۲۵',
    duration: {
      nights: 10,
      days: 11,
      description: '۱۰ شب و ۱۱ روز',
    },
    price: {
      original: 120000000,
      discounted: 110000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 4,
      description: 'اقامت در هتل ۴ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۱۸ نفر',
      meals: '۱۱ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 2,
    isLastMinute: true,
    image: 'https://example.com/images/vietnam-tour.jpg',
  },
  {
    id: 10,
    destination: 'چین',
    title: 'تور پکن',
    date: '۱۴۰۳/۰۷/۱۰',
    duration: {
      nights: 9,
      days: 10,
      description: '۹ شب و ۱۰ روز',
    },
    price: {
      original: 130000000,
      discounted: 120000000,
      hasDiscount: true,
    },
    hotel: {
      stars: 5,
      description: 'اقامت در هتل ۵ ستاره',
    },
    services: {
      insurance: 'بيمه مسافرتي',
      transport: 'حمل و نقل هواپيما',
      capacity: 'ظرفيت تور حداکثر ۱۵ نفر',
      meals: '۱۰ وعده غذايي',
      accommodation: 'اقامت در هتل',
    },
    remaining: 5,
    isLastMinute: false,
    image: 'https://example.com/images/china-tour.jpg',
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

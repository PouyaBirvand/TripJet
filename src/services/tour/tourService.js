const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
import tourData from '../../components/tours/tourData';

// Mock favorites storage (in a real app, this would be server-side)
let favoriteTours = [];
setInterval(() => {
  console.log(favoriteTours);
  
}, 1000);

export const tourService = {
  async getTours(filters = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.append(key, value);
        }
      });
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      let filteredTours = [...tourData];
      
      // Filter for isLastMinute tours (special offers)
      if (filters.isLastMinute) {
        filteredTours = filteredTours.filter(tour => tour.isLastMinute === true);
      }
      
      // Filter for popular tours (tours with discount)
      if (filters.isPopular) {
        filteredTours = filteredTours.filter(tour => tour.price.hasDiscount === true);
      }
      
      return {
        data: filteredTours,
        meta: {
          total: filteredTours.length,
          per_page: 10,
          current_page: parseInt(filters.page || '1', 10),
          last_page: Math.ceil(filteredTours.length / 10)
        }
      };
    } catch (error) {
      console.error('Error fetching tours:', error);
      throw error;
    }
  },

  async getTourById(id) {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const tour = tourData.find(tour => tour.id.toString() === id.toString());
      
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
          { id: '4', label: 'بیشتر از ۱۵۰ میلیون تومان' }
        ],
        tour_types: [
          { id: '1', name: 'تور طبیعت‌گردی' },
          { id: '2', name: 'تور تاریخی' },
          { id: '3', name: 'تور ساحلی' },
          { id: '4', name: 'تور ماه عسل' },
          { id: '5', name: 'تور خانوادگی' }
        ],
        difficulty_levels: [
          { id: '1', name: 'آسان' },
          { id: '2', name: 'متوسط' },
          { id: '3', name: 'سخت' }
        ],
        transport_types: [
          { id: '1', name: 'هواپیما' },
          { id: '2', name: 'قطار' },
          { id: '3', name: 'اتوبوس' },
          { id: '4', name: 'کشتی' }
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
          { id: '12', name: 'اسفند' }
        ]
      };
    } catch (error) {
      console.error('Error fetching filter options:', error);
      throw error;
    }
  },

  // Favorites functionality
  async getFavorites() {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // In a real app, this would fetch from an API
      return favoriteTours;
    } catch (error) {
      console.error('Error fetching favorites:', error);
      throw error;
    }
  },

  async addToFavorites(tour) {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Check if already in favorites
      if (!favoriteTours.some(fav => fav.id === tour.id)) {
        favoriteTours.push(tour);
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
      
      return { success: true };
    } catch (error) {
      console.error('Error removing from favorites:', error);
      throw error;
    }
  }
};

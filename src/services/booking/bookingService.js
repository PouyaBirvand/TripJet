// services/bookingService.js

// ماک دیتا برای اطلاعات رزرو
const mockBookingData = {
  id: 'BK-12345',
  status: 'confirmed',
  createdAt: '1403/05/15',
  passengers: [
    {
      id: 1,
      name: 'علی بیروند',
      type: 'بزرگسال',
      birthDate: '۱۳۷۵/۰۴/۱۲',
      gender: 'مذکر',
      isLeader: true
    },
    {
      id: 2,
      name: 'سارا محمدی',
      type: 'بزرگسال',
      birthDate: '۱۳۷۸/۰۹/۲۳',
      gender: 'مؤنث',
      isLeader: false
    }
  ],
  hotel: {
    name: 'هتل ۴ ستاره میکلو',
    roomType: 'اتاق دو تخته استاندارد',
    checkIn: '۱۴۰۳/۰۷/۱۸',
    checkOut: '۱۴۰۳/۰۷/۲۱',
    checkInTime: '۱۲:۳۰',
    checkOutTime: '۰۰:۳۰',
    amenities: ['واي فاي رايگان', 'استخر', 'صبحانه']
  },
  ticket: {
    departureDate: '۱۴۰۳/۰۷/۱۸',
    departureTime: '۲۰:۳۰',
    flightDuration: '۲ساعت و ۳۰ دقیقه',
    flightNumber: '۵۷۶۷',
    allowedBaggage: '۳۰ کیلوگرم',
    airline: 'قشم ایر',
    departureAirport: 'فرودگاه امام خمینی',
    arrivalAirport: 'فرودگاه دبی'
  },
  payment: {
    totalPrice: 300000000,
    totalPriceUSD: 300,
    currency: 'IRR',
    status: 'paid'
  }
};

const mockPassengerHistory = [
  {
    id: 1,
    name: 'علی بیروند',
    type: 'بزرگسال',
    birthDate: '۱۳۷۵/۰۴/۱۲',
    gender: 'مذکر',
    lastUsed: '۱۴۰۲/۱۰/۱۵'
  },
  {
    id: 2,
    name: 'سارا محمدی',
    type: 'بزرگسال',
    birthDate: '۱۳۷۸/۰۹/۲۳',
    gender: 'مؤنث',
    lastUsed: '۱۴۰۲/۰۹/۲۰'
  },
  {
    id: 3,
    name: 'پویا بیروند',
    type: 'کودک',
    birthDate: '۱۳۹۵/۰۲/۱۵',
    gender: 'مذکر',
    lastUsed: '۱۴۰۲/۰۹/۲۰'
  }
];

// ماک دیتا برای بانک‌ها
const mockBanks = [
  { id: 'mellat', name: 'بانک ملت', logo: '/banks/mellat.png' },
  { id: 'melli', name: 'بانک ملی', logo: '/banks/melli.png' },
];

export const bookingService = {
  async getPassengerHistory() {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        success: true,
        data: mockPassengerHistory
      };
    } catch (error) {
      console.error('Error fetching passenger history:', error);
      return {
        success: false,
        error: 'خطا در دریافت لیست مسافران'
      };
    }
  },

  async savePassengers(passengers) {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // در حالت واقعی اینجا API فراخوانی می‌شود
      return { 
        success: true,
        message: 'اطلاعات مسافران با موفقیت ذخیره شد'
      };
    } catch (error) {
      console.error('Error saving passengers:', error);
      return { 
        success: false, 
        error: 'خطا در ذخیره مسافران' 
      };
    }
  },

  async getBookingDetails(bookingId) {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      return {
        success: true,
        data: mockBookingData
      };
    } catch (error) {
      console.error('Error fetching booking details:', error);
      return {
        success: false,
        error: 'خطا در دریافت اطلاعات رزرو'
      };
    }
  },

  async getBankList() {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      return {
        success: true,
        data: mockBanks
      };
    } catch (error) {
      console.error('Error fetching bank list:', error);
      return {
        success: false,
        error: 'خطا در دریافت لیست بانک‌ها'
      };
    }
  },

  async processPayment(paymentData) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return {
        success: true,
        data: {
          paymentId: 'PAY-' + Math.random().toString(36).substr(2, 9),
          trackingCode: Math.floor(1000000 + Math.random() * 9000000).toString(),
          amount: paymentData.amount,
          date: new Date().toLocaleDateString('fa-IR'),
          bank: paymentData.bank
        }
      };
    } catch (error) {
      console.error('Error processing payment:', error);
      return {
        success: false,
        error: 'خطا در پردازش پرداخت'
      };
    }
  }
};
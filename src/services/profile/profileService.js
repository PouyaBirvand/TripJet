const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

const mockUserProfile = {
  id: 1,
  name: 'کوروش صفایی',
  firstName: 'کوروش',
  lastName: 'صفایی',
  firstNameEn: 'Kourosh',
  lastNameEn: 'Safaei',
  gender: 'male',
  email: 'kourosh@example.com',
  alternateEmail: '',
  phone: '09121809348',
  mobile: '09121809348',
  landline: '',
  national_id: '0021300875',
  birth_date: '1362/09/22',
  address: 'تهران، خیابان ولیعصر',
  postal_code: '1234567890',
  walletBalance: '30400000',
  avatar: '/profile.png',
  created_at: '1402/01/15',
  passport_number: 'K56743902',
  passport_expiry: '',
  bank_account: '',
  bank_card: '',
  bank_sheba: '',
};

const mockUserTrips = [
  {
    id: 1,
    title: 'تور سواد کوه',
    image: '/japen.png',
    status: 'success', // موفق
    paymentAmount: '35000000',
    paymentDate: '1402/08/15',
    bookingDate: '1402/08/10',
    tripDate: '1402/09/05',
    duration: '3 روز',
    participants: 2,
    passengers: [
      {
        name: 'کوروش صفایی',
        type: 'بزرگسال',
        birthDate: '۱۳۶۲/۰۴/۲۳',
        gender: 'مذکر',
      },
      {
        name: 'آریو بهرامی',
        type: 'کودک',
        birthDate: '۱۳۹۵/۰۵/۱۵',
        gender: 'مذکر',
      },
    ],
    details: {
      hotel: 'هتل سواد کوه',
      transportation: 'اتوبوس VIP',
      meals: 'صبحانه و شام',
      guide: 'دارد',
      insurance: 'دارد',
    },
  },
  {
    id: 2,
    title: 'تور هند',
    image: '/japen.png',
    status: 'failed', // ناموفق
    paymentAmount: '35000000',
    paymentDate: '1402/07/20',
    bookingDate: '1402/07/15',
    tripDate: '1402/08/10',
    duration: '7 روز',
    participants: 1,
    passengers: [
      {
        name: 'علی بهرامی',
        type: 'بزرگسال',
        birthDate: '۱۳۶۰/۰۱/۱۰',
        gender: 'مذکر',
      },
    ],
    details: {
      hotel: 'هتل تاج محل',
      transportation: 'هواپیما + اتوبوس',
      meals: 'صبحانه، ناهار و شام',
      guide: 'دارد',
      insurance: 'دارد',
    },
  },
  {
    id: 3,
    title: 'تور ویتنام',
    image: '/japen.png',
    status: 'pending', // در حال بررسی
    paymentAmount: '45000000',
    paymentDate: '1402/09/01',
    bookingDate: '1402/08/25',
    tripDate: '1402/10/15',
    duration: '10 روز',
    participants: 2,
    passengers: [
      {
        name: 'مریم حسینی',
        type: 'بزرگسال',
        birthDate: '۱۳۵۵/۰۲/۱۰',
        gender: 'مؤنث',
      },
      {
        name: 'آریا حسینی',
        type: 'کودک',
        birthDate: '۱۳۹۰/۰۳/۲۰',
        gender: 'مذکر',
      },
    ],
    details: {
      hotel: 'هتل هانوی',
      transportation: 'هواپیما + قطار',
      meals: 'صبحانه و شام',
      guide: 'دارد',
      insurance: 'دارد',
    },
  },
];

const mockTransactions = [
  {
    id: 'TW8790741',
    date: '۱۹:۳۰ - ۱۴۰۲/۰۹/۱۲',
    amount: '-2000000',
    type: 'رزرو تور',
    details: {
      passengerName: 'علی بهرامی',
      bank: 'بانک سامان',
      referenceNumber: '۱۲۶۸۹۵۳',
    },
  },
  {
    id: 'QW8325741',
    date: '۱۹:۳۰ - ۱۴۰۲/۰۹/۱۲',
    amount: '+11000000',
    type: 'رزرو تور',
    details: {
      passengerName: 'محمد حسینی',
      bank: 'بانک ملت',
      referenceNumber: '۱۲۳۴۵۶۷',
    },
  },
  {
    id: 'AY8745741',
    date: '۱۹:۳۰ - ۱۴۰۲/۰۹/۱۲',
    amount: '-2234000',
    type: 'رزرو تور',
    details: {
      passengerName: 'زهرا کریمی',
      bank: 'بانک ملی',
      referenceNumber: '۷۶۵۴۳۲۱',
    },
  },
  {
    id: 'AM8785741',
    date: '۱۹:۳۰ - ۱۴۰۲/۰۹/۱۲',
    amount: '+5250000',
    type: 'افزایش اعتبار',
    details: {
      passengerName: '',
      bank: 'بانک پاسارگاد',
      referenceNumber: '۹۸۷۶۵۴۳',
    },
  },
];

export const profileService = {
  async getUserProfile() {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      // const response = await fetch(`${API_BASE_URL}/profile`, {
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      //   },
      // });
      // if (!response.ok) throw new Error('خطا در دریافت اطلاعات پروفایل');
      // return await response.json();
      return { ...mockUserProfile, walletBalance: mockUserProfile.walletBalance };
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  },

  async updateUserProfile(profileData, section = 'profile') {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      // const response = await fetch(`${API_BASE_URL}/profile/update/${section}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(profileData),
      // });
      // if (!response.ok) throw new Error('خطا در به‌روزرسانی اطلاعات پروفایل');
      // return await response.json();

      return {
        ...mockUserProfile,
        ...profileData,
        updated_at: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  },

  async uploadProfileImage(file) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      // const formData = new FormData();
      // formData.append('avatar', file);
      //
      // const response = await fetch(`${API_BASE_URL}/profile/avatar`, {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      //   },
      //   body: formData,
      // });
      // if (!response.ok) throw new Error('خطا در آپلود تصویر پروفایل');
      // return await response.json();
      const mockImageUrl = URL.createObjectURL(file);
      return {
        avatar: mockImageUrl,
        message: 'تصویر پروفایل با موفقیت آپلود شد',
      };
    } catch (error) {
      console.error('Error uploading profile image:', error);
      throw error;
    }
  },

  async changePassword(passwordData) {
    try {
      await new Promise(resolve => setTimeout(resolve, 700));
      // const response = await fetch(`${API_BASE_URL}/profile/change-password`, {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(passwordData),
      // });
      //
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'خطا در تغییر رمز عبور');
      // }
      // return await response.json();
      return { message: 'رمز عبور با موفقیت تغییر یافت' };
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  },

  async getUserTrips() {
    try {
      await new Promise(resolve => setTimeout(resolve, 700));
      // const response = await fetch(`${API_BASE_URL}/profile/trips`, {
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      //   },
      // });
      // if (!response.ok) throw new Error('خطا در دریافت لیست تورها');
      // return await response.json();

      return mockUserTrips;
    } catch (error) {
      console.error('Error fetching user trips:', error);
      throw error;
    }
  },

  async getTripDetails(tripId) {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      // const response = await fetch(`${API_BASE_URL}/profile/trips/${tripId}`, {
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      //   },
      // });
      // if (!response.ok) throw new Error('خطا در دریافت جزئیات تور');
      // return await response.json();

      const trip = mockUserTrips.find(trip => trip.id === parseInt(tripId));
      if (!trip) {
        throw new Error('تور مورد نظر یافت نشد');
      }
      return trip;
    } catch (error) {
      console.error('Error fetching trip details:', error);
      throw error;
    }
  },

  async getUserTransactions() {
    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      // const response = await fetch(`${API_BASE_URL}/profile/transactions`, {
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      //   },
      // });
      // if (!response.ok) throw new Error('خطا در دریافت تاریخچه تراکنش‌ها');
      // return await response.json();

      // شبیه‌سازی پاسخ موفق
      return mockTransactions;
    } catch (error) {
      console.error('Error fetching user transactions:', error);
      throw error;
    }
  },

  async getTransactionDetails(transactionId) {
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      // const response = await fetch(`${API_BASE_URL}/profile/transactions/${transactionId}`, {
      //   headers: {
      //     'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
      //   },
      // });
      // if (!response.ok) throw new Error('خطا در دریافت جزئیات تراکنش');
      // return await response.json();

      const transaction = mockTransactions.find(transaction => transaction.id === transactionId);
      if (!transaction) {
        throw new Error('تراکنش مورد نظر یافت نشد');
      }
      return transaction;
    } catch (error) {
      console.error('Error fetching transaction details:', error);
      throw error;
    }
  },
};

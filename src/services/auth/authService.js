const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authService = {
  async sendOTP(phoneNumber) {
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (!phoneNumber || phoneNumber.length !== 10) {
      throw { message: 'شماره موبایل نامعتبر است' };
    }

    return { token: 'mock-token-123456' };
  },

  async verifyOTP({ code, token }) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!code || code.length !== 4) {
      throw { message: 'کد تایید نامعتبر است' };
    }

    if (!token || token !== 'mock-token-123456') {
      throw { message: 'توکن نامعتبر است' };
    }

    return { token: 'mock-auth-token-123456' };
  },

  async loginWithPassword({ phone, password }) {
    await new Promise(resolve => setTimeout(resolve, 1200));

    if (!phone || !password) {
      throw { message: 'لطفا نام کاربری و رمز عبور را وارد کنید' };
    }

    if (password.length < 8) {
      throw { message: 'رمز عبور باید حداقل ۸ کاراکتر باشد' };
    }

    return { token: 'mock-auth-token-123456' };
  },

  async setPassword({ password, password_confirmation, token }) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (!password || password.length < 8) {
      throw { message: 'رمز عبور باید حداقل ۸ کاراکتر باشد' };
    }

    if (password !== password_confirmation) {
      throw { message: 'رمز عبور و تکرار آن مطابقت ندارند' };
    }

    if (!token) {
      throw { message: 'توکن نامعتبر است' };
    }

    return { success: true };
  },

  async getCurrentUser(token) {
    await new Promise(resolve => setTimeout(resolve, 800));

    if (!token) {
      throw { message: 'توکن نامعتبر است' };
    }

    const needsPassword = Math.random() < 0.3;

    if (needsPassword) {
      throw { needsPassword: true, message: 'کاربر نیاز به تنظیم رمز عبور دارد' };
    }

    // Return currentuser info
  },
};

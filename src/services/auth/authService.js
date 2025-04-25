const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const authService = {
  async sendOTP(phoneNumber) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone: phoneNumber }),
      });

      const data = await response.json();

      if (!response.ok) {
        const error = new Error(data.message || 'خطا در ارسال کد تایید');
        error.status = response.status;
        error.isCodeAlreadySent =
          response.status === 429 && data.message && data.message.includes('already been sent');
        error.remainingTime = data.remaining_time;
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error sending OTP:', error);
      throw error;
    }
  },

  async verifyOTP({ token, code }) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verifyOtp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          code,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'کد تایید نامعتبر است');
      }

      return data;
    } catch (error) {
      console.error('Error verifying OTP:', error);
      throw error;
    }
  },

  async loginWithPassword({ phone, password }) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/loginWithPassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'نام کاربری یا رمز عبور اشتباه است');
      }

      return data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  async setPassword({ password, password_confirmation }) {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password !== password_confirmation) {
      throw new Error('تأیید رمز عبور نامعتبر است');
    }

    if (password.length < 8) {
      throw new Error('رمز عبور باید حداقل ۸ کاراکتر باشد');
    }

    return { message: 'رمز عبور با موفقیت تغییر یافت' };
  },

  async getCurrentUser(token) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/user`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 403) {
        const data = await response.json();
        const error = new Error(data.message || 'نیاز به تنظیم رمز عبور');
        error.needsPassword = true;
        throw error;
      }

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'خطا در دریافت اطلاعات کاربر');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  },
};
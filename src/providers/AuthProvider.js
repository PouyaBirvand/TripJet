'use client';
import { useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Cookies from 'js-cookie';
import { authService } from '../services/auth/authService';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [phoneVerificationToken, setPhoneVerificationToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);
  const [needsPasswordSetup, setNeedsPasswordSetup] = useState(false);
  const queryClient = useQueryClient();

  // تولید توکن پیشفرض و ست کردن کوکی
  const generateDefaultAuth = () => {
    const defaultToken = 'default-user-token-' + Date.now();
    const defaultUser = {
      id: 'default-user',
      name: 'کاربر مهمان',
      phone: '09123456789',
      isGuest: true
    };
    
    setAuthToken(defaultToken);
    setUser(defaultUser);
    setLoading(false);
    
    // ذخیره در کوکی برای 30 روز
    Cookies.set('phone_verification_token', defaultToken, { expires: 30 });
    Cookies.set('default_user', JSON.stringify(defaultUser), { expires: 30 });
  };

  useEffect(() => {
    const savedToken = Cookies.get('phone_verification_token');
    const savedUser = Cookies.get('default_user');
    
    if (savedToken && savedUser) {
      // اگر کوکی موجود است، از آن استفاده کن
      setAuthToken(savedToken);
      setUser(JSON.parse(savedUser));
      setLoading(false);
    } else {
      // اگر کوکی موجود نیست، کاربر پیشفرض ایجاد کن
      generateDefaultAuth();
    }
  }, []);

  const { isLoading } = useQuery({
    queryKey: ['currentUser', authToken],
    queryFn: () => authService.getCurrentUser(authToken),
    enabled: !!authToken && !user?.isGuest, // فقط برای کاربران واقعی API کال کن
    onSuccess: userData => {
      setUser(userData);
      setNeedsPasswordSetup(false);
      setLoading(false);
    },
    onError: error => {
      if (error.needsPassword) {
        setNeedsPasswordSetup(true);
      } else {
        // در صورت خطا، کاربر پیشفرض ایجاد کن
        generateDefaultAuth();
      }
      setLoading(false);
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (authToken && !user?.isGuest) {
      setLoading(isLoading);
    }
  }, [isLoading, authToken, user]);

  const login = token => {
    setAuthToken(token);
    Cookies.set('phone_verification_token', token, { expires: 7 });
    // حذف کاربر پیشفرض هنگام لاگین واقعی
    Cookies.remove('default_user');
    queryClient.invalidateQueries({ queryKey: ['currentUser', token] });
  };

  const logout = () => {
    // بعد از لاگ اوت، دوباره کاربر پیشفرض ایجاد کن
    setUser(null);
    setAuthToken(null);
    setNeedsPasswordSetup(false);
    setPhoneVerificationToken(null);
    Cookies.remove('phone_verification_token');
    Cookies.remove('user');
    Cookies.remove('phone_number');
    queryClient.removeQueries();
    
    // ایجاد کاربر پیشفرض جدید
    setTimeout(() => {
      generateDefaultAuth();
    }, 100);
  };

  const setPhoneVerificationTokenHandler = token => {
    setPhoneVerificationToken(token);
    Cookies.set('phone_verification_token', token, { expires: 1 / 24 });
  };

  const value = {
    user,
    phoneVerificationToken,
    authToken,
    loading,
    needsPasswordSetup,
    login,
    logout,
    setPhoneVerificationToken: setPhoneVerificationTokenHandler,
    setNeedsPasswordSetup,
    isGuest: user?.isGuest || false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
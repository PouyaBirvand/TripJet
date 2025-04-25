'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '../services/auth/authService';
import { useAuth } from '../contexts/AuthContext';
import Cookies from 'js-cookie';

export function usePhoneAuth() {
  const router = useRouter();
  const { 
    setPhoneVerificationToken, 
    login, 
    authToken, 
    setNeedsPasswordSetup,
    phoneVerificationToken
  } = useAuth();

  const storePhoneNumber = phoneNumber => {
    Cookies.set('phone_number', phoneNumber, { expires: 1 / 24 }); // 1 hour
  };

  const getPhoneNumber = () => {
    return Cookies.get('phone_number');
  };

  const phoneVerificationMutation = useMutation({
    mutationFn: phoneNumber => {
      storePhoneNumber(phoneNumber);
      return authService.sendOTP(phoneNumber);
    },
    onSuccess: data => {
      setPhoneVerificationToken(data.token);
      Cookies.set('phone_verification_token', data.token, { expires: 1 / 24 }); // 1 hour
      router.push('/otp');
    },
    onError: error => {
      if (error.isCodeAlreadySent) {
        router.push('/otp');
      }
    },
  });

  const otpVerificationMutation = useMutation({
    mutationFn: ({ code, token }) => {
      return authService.verifyOTP({ code, token });
    },
    onSuccess: data => {
      login(data.token);
      Cookies.remove('phone_verification_token');
      
      getUserMutation.mutate(data.token);
    },
  });

  const setPasswordMutation = useMutation({
    mutationFn: ({ password, password_confirmation, token }) => {
      return authService.setPassword({ password, password_confirmation, token });
    },
    onSuccess: () => {
      getUserMutation.mutate(authToken);
      router.push('/');
    },
    onError: () => {
      router.back(2)
    }
  });

  const loginPasswordMutation = useMutation({
    mutationFn: ({ phone, password }) => {
      return authService.loginWithPassword({ phone, password });
    },
    onSuccess: data => {
      login(data.token);
      router.push('/');
    },
  });

  const getUserMutation = useMutation({
    mutationFn: (token) => {
      return authService.getCurrentUser(token || authToken);
    },
    onSuccess: () => {
      router.push('/');
    },
    onError: error => {
      if (error.needsPassword) {
        setNeedsPasswordSetup(true);
        router.push('/set-password');
      }
    }
  });

  return {
    sendPhoneVerification: phoneVerificationMutation.mutate,
    verifyOtp: otpVerificationMutation.mutate,
    setPassword: setPasswordMutation.mutate,
    loginWithPassword: loginPasswordMutation.mutate,
    getCurrentUser: getUserMutation.mutate,
    
    isPhoneVerificationLoading: phoneVerificationMutation.isPending,
    isOtpVerificationLoading: otpVerificationMutation.isPending,
    isSetPasswordVerifactionLoading: setPasswordMutation.isPending,
    isloginWithPasswordLoading: loginPasswordMutation.isPending,
    isGetUserLoading: getUserMutation.isPending,
    
    phoneVerificationError: phoneVerificationMutation.error,
    otpVerificationError: otpVerificationMutation.error,
    setPasswordError: setPasswordMutation.error,
    loginWithPasswordError: loginPasswordMutation.error,
    getUserError: getUserMutation.error,
    
    getPhoneNumber,
  };
}
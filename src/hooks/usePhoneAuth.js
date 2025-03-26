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

  // Store phone number in cookies
  const storePhoneNumber = phoneNumber => {
    Cookies.set('phone_number', phoneNumber, { expires: 1 / 24 }); // 1 hour
  };

  // Get phone number from cookies
  const getPhoneNumber = () => {
    return Cookies.get('phone_number');
  };

  // Send OTP to phone number
  const phoneVerificationMutation = useMutation({
    mutationFn: phoneNumber => {
      storePhoneNumber(phoneNumber);
      return authService.sendOTP(phoneNumber);
    },
    onSuccess: data => {
      // Store the verification token in both context and cookie
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

  // Verify OTP code
  const otpVerificationMutation = useMutation({
    mutationFn: ({ code, token }) => {
      return authService.verifyOTP({ code, token });
    },
    onSuccess: data => {
      // Store auth token and remove verification token
      login(data.token);
      Cookies.remove('phone_verification_token');
      
      // After successful OTP verification, check if user needs to set password
      getUserMutation.mutate(data.token);
    },
  });

  // Set password for user
  const setPasswordMutation = useMutation({
    mutationFn: ({ password, password_confirmation, token }) => {
      return authService.setPassword({ password, password_confirmation, token });
    },
    onSuccess: () => {
      // After setting password, fetch user data
      getUserMutation.mutate(authToken);
      router.push('/');
    },
  });

  // Login with password
  const loginPasswordMutation = useMutation({
    mutationFn: ({ phone, password }) => {
      return authService.loginWithPassword({ phone, password });
    },
    onSuccess: data => {
      login(data.token);
      router.push('/');
    },
  });

  // Get current user
  const getUserMutation = useMutation({
    mutationFn: (token) => {
      return authService.getCurrentUser(token || authToken);
    },
    onSuccess: data => {
      // User exists and has set password
      router.push('/');
    },
    onError: error => {
      if (error.needsPassword) {
        // User needs to set password
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
    
    // Loading states
    isPhoneVerificationLoading: phoneVerificationMutation.isPending,
    isOtpVerificationLoading: otpVerificationMutation.isPending,
    isSetPasswordVerifactionLoading: setPasswordMutation.isPending,
    isloginWithPasswordLoading: loginPasswordMutation.isPending,
    isGetUserLoading: getUserMutation.isPending,
    
    // Error states
    phoneVerificationError: phoneVerificationMutation.error,
    otpVerificationError: otpVerificationMutation.error,
    setPasswordError: setPasswordMutation.error,
    loginWithPasswordError: loginPasswordMutation.error,
    getUserError: getUserMutation.error,
    
    // Helper functions
    getPhoneNumber,
  };
}
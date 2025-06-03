'use client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '../../services/auth/authService';
import Cookies from 'js-cookie';
import { useAuth } from '../../contexts/AuthContext';

export function usePhoneVerification() {
  const router = useRouter();
  const { setPhoneVerificationToken } = useAuth();

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
      Cookies.set('phone_verification_token', data.token, { expires: 1 / 24 });
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
  });

  return {
    sendPhoneVerification: phoneVerificationMutation.mutate,
    verifyOtp: otpVerificationMutation.mutate,
    getPhoneNumber,
    isSendingOtp: phoneVerificationMutation.isPending,
    isVerifyingOtp: otpVerificationMutation.isPending,
    phoneVerificationError: phoneVerificationMutation.error,
    otpVerificationError: otpVerificationMutation.error,
  };
}

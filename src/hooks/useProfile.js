'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { profileService } from '../services/profile/profileService';
import { useAuth } from '../contexts/AuthContext';

export function useProfile() {
  const { authToken, user: authUser } = useAuth();
  const queryClient = useQueryClient();

  // دریافت اطلاعات پروفایل
  const {
    data: profile,
    isLoading: isProfileLoading,
    error: profileError,
    refetch: refetchProfile
  } = useQuery({
    queryKey: ['userProfile'],
    queryFn: profileService.getUserProfile,
    // enabled: !!authToken, // فقط زمانی که کاربر لاگین کرده باشد
    staleTime: 5 * 60 * 1000, // 5 دقیقه
  });

  // دریافت لیست تورهای رزرو شده
  const {
    data: trips,
    isLoading: isTripsLoading,
    error: tripsError,
    refetch: refetchTrips
  } = useQuery({
    queryKey: ['userTrips'],
    queryFn: profileService.getUserTrips,
    // enabled: !!authToken, // فقط زمانی که کاربر لاگین کرده باشد
    staleTime: 5 * 60 * 1000, // 5 دقیقه
  });

  // دریافت تاریخچه تراکنش‌ها
  const {
    data: transactions,
    isLoading: isTransactionsLoading,
    error: transactionsError,
    refetch: refetchTransactions
  } = useQuery({
    queryKey: ['userTransactions'],
    queryFn: profileService.getUserTransactions,
    // enabled: !!authToken, // فقط زمانی که کاربر لاگین کرده باشد
    staleTime: 5 * 60 * 1000, // 5 دقیقه
  });

  // به‌روزرسانی اطلاعات پروفایل
  const updateProfileMutation = useMutation({
    mutationFn: profileService.updateUserProfile,
    onSuccess: (data) => {
      // به‌روزرسانی کش React Query
      queryClient.setQueryData(['userProfile'], data);
      alert("اطلاعات پروفایل با موفقیت به‌روز شد'")
    },
    onError: (error) => {
      alert("error.message || 'خطا در به‌روزرسانی اطلاعات پروفایل'")
    }
  });

  // آپلود تصویر پروفایل
  const uploadAvatarMutation = useMutation({
    mutationFn: profileService.uploadProfileImage,
    onSuccess: (data) => {
      // به‌روزرسانی کش React Query با تصویر جدید
      queryClient.setQueryData(['userProfile'], (oldData) => {
        return oldData ? { ...oldData, avatar: data.avatar } : oldData;
      });
      alert('تصویر پروفایل با موفقیت آپلود شد');
    },
    onError: (error) => {
      alert(error.message || 'خطا در آپلود تصویر پروفایل');
    }
  });

  // تغییر رمز عبور
  const changePasswordMutation = useMutation({
    mutationFn: profileService.changePassword,
    onSuccess: () => {
      alert('رمز عبور با موفقیت تغییر یافت');
    },
    onError: (error) => {
      alert(error.message || 'خطا در تغییر رمز عبور');
    }
  });

  // دریافت جزئیات یک تور خاص
  const getTripDetails = async (tripId) => {
    try {
      return await profileService.getTripDetails(tripId);
    } catch (error) {
      console.error('Error fetching trip details:', error);
      throw error;
    }
  };

  // دریافت جزئیات یک تراکنش خاص
  const getTransactionDetails = async (transactionId) => {
    try {
      return await profileService.getTransactionDetails(transactionId);
    } catch (error) {
      console.error('Error fetching transaction details:', error);
      throw error;
    }
  };

  return {
    // داده‌ها
    profile,
    trips,
    transactions,
    
    // توابع اصلی
    updateProfile: updateProfileMutation.mutate,
    uploadAvatar: uploadAvatarMutation.mutate,
    changePassword: changePasswordMutation.mutate,
    refetchProfile,
    refetchTrips,
    refetchTransactions,
    getTripDetails,
    getTransactionDetails,
    
    // وضعیت‌های بارگذاری
    isProfileLoading,
    isTripsLoading,
    isTransactionsLoading,
    isUpdatingProfile: updateProfileMutation.isPending,
    isUploadingAvatar: uploadAvatarMutation.isPending,
    isChangingPassword: changePasswordMutation.isPending,
    
    // خطاها
    profileError,
    tripsError,
    transactionsError,
    updateProfileError: updateProfileMutation.error,
    uploadAvatarError: uploadAvatarMutation.error,
    changePasswordError: changePasswordMutation.error,
  };
}
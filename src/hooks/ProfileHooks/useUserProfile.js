'use client';

import { profileService } from '../../services/profile/profileService';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export function useUserProfile() {
  const queryClient = useQueryClient();

  const {
    data: profile,
    isLoading: isProfileLoading,
    error: profileError,
    refetch: refetchProfile
  } = useQuery({
    queryKey: ['userProfile'],
    queryFn: profileService.getUserProfile,
    staleTime: 5 * 60 * 1000,
  });

  const updateProfileMutation = useMutation({
    mutationFn: profileService.updateUserProfile,
    onSuccess: (data) => {
      queryClient.setQueryData(['userProfile'], data);
      alert("اطلاعات پروفایل با موفقیت به‌روز شد'");
    },
    onError: (error) => {
      alert("error.message || 'خطا در به‌روزرسانی اطلاعات پروفایل'");
    }
  });

  const uploadAvatarMutation = useMutation({
    mutationFn: profileService.uploadProfileImage,
    onSuccess: (data) => {
      queryClient.setQueryData(['userProfile'], (oldData) => {
        return oldData ? { ...oldData, avatar: data.avatar } : oldData;
      });
      alert('تصویر پروفایل با موفقیت آپلود شد');
    },
    onError: (error) => {
      alert(error.message || 'خطا در آپلود تصویر پروفایل');
    }
  });

  return {
    profile,
    isProfileLoading,
    profileError,
    refetchProfile,
    updateProfile: updateProfileMutation.mutate,
    uploadAvatar: uploadAvatarMutation.mutate,
    isUpdatingProfile: updateProfileMutation.isPending,
    isUploadingAvatar: uploadAvatarMutation.isPending,
    updateProfileError: updateProfileMutation.error,
    uploadAvatarError: uploadAvatarMutation.error,
  };
}
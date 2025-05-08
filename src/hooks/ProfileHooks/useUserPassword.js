'use client';

import { useMutation } from '@tanstack/react-query';
import { profileService } from '../services/profile/profileService';

export function useUserPassword() {
  const changePasswordMutation = useMutation({
    mutationFn: profileService.changePassword,
    onSuccess: () => {
      alert('رمز عبور با موفقیت تغییر یافت');
    },
    onError: (error) => {
      alert(error.message || 'خطا در تغییر رمز عبور');
    }
  });

  return {
    changePassword: changePasswordMutation.mutate,
    isChangingPassword: changePasswordMutation.isPending,
    changePasswordError: changePasswordMutation.error,
  };
}
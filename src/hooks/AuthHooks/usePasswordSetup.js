'use client';
import { useAuth } from '../../contexts/AuthContext';
import { authService } from '../../services/auth/authService';
import { useMutation } from '@tanstack/react-query';

export function usePasswordSetup() {
  const { setNeedsPasswordSetup } = useAuth();

  const setPasswordMutation = useMutation({
    mutationFn: ({ password, password_confirmation, token }) => {
      return authService.setPassword({ password, password_confirmation, token });
    },
    onSuccess: () => {
      setNeedsPasswordSetup(false);
    },
  });

  return {
    setPassword: setPasswordMutation.mutate,
    isSettingPassword: setPasswordMutation.isPending,
    setPasswordError: setPasswordMutation.error,
  };
}

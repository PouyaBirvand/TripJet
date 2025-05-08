'use client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '../../services/auth/authService';
import { useAuth } from '../../contexts/AuthContext';

export function usePasswordAuth() {
  const router = useRouter();
  const { login } = useAuth();

  const loginPasswordMutation = useMutation({
    mutationFn: ({ phone, password }) => {
      return authService.loginWithPassword({ phone, password });
    },
    onSuccess: (data) => {
      login(data.token);
      router.push('/');
    },
  });

  return {
    loginWithPassword: loginPasswordMutation.mutate,
    isloginWithPasswordLoading: loginPasswordMutation.isPending,
    loginWithPasswordError: loginPasswordMutation.error,
  };
}
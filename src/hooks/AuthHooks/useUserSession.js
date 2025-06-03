'use client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '../services/auth/authService';
import { useAuth } from '../contexts/AuthContext';

export function useUserSession() {
  const router = useRouter();
  const { authToken, setNeedsPasswordSetup } = useAuth();

  const getUserMutation = useMutation({
    mutationFn: token => {
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
    },
  });

  return {
    getCurrentUser: getUserMutation.mutate,
    isGettingUser: getUserMutation.isPending,
    getUserError: getUserMutation.error,
  };
}

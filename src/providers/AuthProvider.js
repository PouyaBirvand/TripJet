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

  // Initialize state from cookies
  useEffect(() => {
    const savedToken = Cookies.get('auth_token');
    const savedVerificationToken = Cookies.get('phone_verification_token');
    
    if (savedVerificationToken) {
      setPhoneVerificationToken(savedVerificationToken);
    }
    
    if (savedToken) {
      setAuthToken(savedToken);
    } else {
      setLoading(false);
    }
  }, []);

  // Use React Query to fetch user data
  const { isLoading } = useQuery({
    queryKey: ['currentUser', authToken],
    queryFn: () => authService.getCurrentUser(authToken),
    enabled: !!authToken,
    onSuccess: (userData) => {
      setUser(userData);
      setNeedsPasswordSetup(false);
      setLoading(false);
    },
    onError: (error) => {
      if (error.needsPassword) {
        setNeedsPasswordSetup(true);
      } else {
        // If there's another error, clear the token
        logout();
      }
      setLoading(false);
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  // Update loading state based on query loading
  useEffect(() => {
    if (authToken) {
      setLoading(isLoading);
    }
  }, [isLoading, authToken]);

  const login = (token) => {
    setAuthToken(token);
    Cookies.set('auth_token', token, { expires: 7 });
    // Invalidate and refetch user data
    queryClient.invalidateQueries({ queryKey: ['currentUser'] });
  };

  const logout = () => {
    setUser(null);
    setAuthToken(null);
    setNeedsPasswordSetup(false);
    setPhoneVerificationToken(null);
    
    // Remove cookies
    Cookies.remove('auth_token');
    Cookies.remove('user');
    Cookies.remove('phone_verification_token');
    Cookies.remove('phone_number');
    
    // Clear related queries from cache
    queryClient.removeQueries({ queryKey: ['currentUser'] });
  };

  const setPhoneVerificationTokenHandler = (token) => {
    setPhoneVerificationToken(token);
    Cookies.set('phone_verification_token', token, { expires: 1/24 }); // 1 hour
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
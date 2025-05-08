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

  useEffect(() => {
    const savedToken = Cookies.get('phone_verification_token');
    const savedVerificationToken = Cookies.get('phone_verification_token'); // dead code  ...
    
    if (savedVerificationToken) {
      setPhoneVerificationToken(savedVerificationToken);
    }
    
    if (savedToken) {
      setAuthToken(savedToken);
    } else {
      setLoading(false);
    }
  }, []);

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
        logout();
      }
      setLoading(false);
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (authToken) {
      setLoading(isLoading);
    }
  }, [isLoading, authToken]);

  const login = (token) => {
    setAuthToken(token);
    Cookies.set('phone_verification_token', token, { expires: 7 });
    queryClient.invalidateQueries({ queryKey: ['currentUser'] });
  };

  const logout = () => {
    setUser(null);
    setAuthToken(null);
    setNeedsPasswordSetup(false);
    setPhoneVerificationToken(null);
    
    Cookies.remove('phone_verification_token');
    Cookies.remove('user'); // dead code
    Cookies.remove('phone_number');
    
    
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
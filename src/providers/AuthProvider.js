'use client';

import { useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Cookies from 'js-cookie';
import { authService } from '../services/auth/authService';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [phoneVerificationToken, setPhoneVerificationToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState(null);
  const [needsPasswordSetup, setNeedsPasswordSetup] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const savedToken = Cookies.get('auth_token');
    const savedVerificationToken = Cookies.get('phone_verification_token');
    
    if (savedVerificationToken) {
      setPhoneVerificationToken(savedVerificationToken);
    }
    
    if (savedToken) {
      setAuthToken(savedToken);
      
      // Try to fetch user data
      fetchUserData(savedToken);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const userData = await authService.getCurrentUser(token);
      setUser(userData);
      setNeedsPasswordSetup(false);
    } catch (error) {
      if (error.needsPassword) {
        setNeedsPasswordSetup(true);
      } else {
        // If there's another error, clear the token
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  const login = (token) => {
    setAuthToken(token);
    Cookies.set('auth_token', token, { expires: 7 });
    fetchUserData(token);
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
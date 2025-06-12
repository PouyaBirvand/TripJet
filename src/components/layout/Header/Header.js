'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import DesktopNav from './DesktopNav';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, authToken } = useAuth();
  const pathname = usePathname();

  // کاربر همیشه لاگین است (حتی اگر مهمان باشد)
  const isLoggedIn = !!(user && authToken);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <DesktopNav isLoggedIn={isLoggedIn} user={user} />
        <MobileHeader
          isLoggedIn={isLoggedIn}
          user={user}
          isMenuOpen={mobileMenuOpen}
          onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        <MobileMenu
          isOpen={mobileMenuOpen}
          isLoggedIn={isLoggedIn}
          user={user}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
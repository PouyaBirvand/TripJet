'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import DesktopNav from './DesktopNav';
import MobileHeader from './MobileHeader';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    const token = Cookies.get('phone_verification_token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <DesktopNav isLoggedIn={isLoggedIn} />
        <MobileHeader
          isLoggedIn={isLoggedIn}
          isMenuOpen={mobileMenuOpen}
          onMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        <MobileMenu
          isOpen={mobileMenuOpen}
          isLoggedIn={isLoggedIn}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;

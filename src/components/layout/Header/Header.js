'use client';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import NavItems from './Components/NavItems';
import TelBtn from './Components/TelBtn';
import SearchBtn from './Components/SearchBtn';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const token = Cookies.get('phone_verification_token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image
                width={130}
                height={45}
                src="/logo.svg"
                alt="Logo"
                className="h-12 w-auto"
                priority
              />
            </Link>
            <nav className="hidden lg:block">
              <NavItems />
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <SearchBtn />
            <TelBtn className="hidden lg:flex" />
            {isLoggedIn ? (
              <button
                onClick={() => router.push('/profile')}
                className="btn flex gap-2 relative bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-6 transition-colors duration-200"
              >
                <Image alt="profile" src={'/profile.png'} width={35} height={35} />
                <span className="absolute w-2 border border-white h-2 rounded-full bg-success right-7 top-8"></span>
                <span className="font-normal">کوروش صفایی</span>
              </button>
            ) : (
              <button
                onClick={() => router.push('/phone')}
                className="btn flex gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-6 transition-colors duration-200"
              >
                <ArrowRight className="w-5 h-5" />
                <span>ورود / ثبت نام</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between h-16 py-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
            aria-label="منو"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
          <Link href="/" className="flex-shrink-0 mx-2">
            <Image
              width={110}
              height={40}
              src="/logo.svg"
              alt="Logo"
              className="h-10 w-auto"
              priority
            />
          </Link>
          <div className="flex items-center gap-2">
            <SearchBtn />
            {isLoggedIn ? (
              <button
                onClick={() => router.push('/profile')}
                className="btn flex gap-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-2 text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                <Image alt="profile" src={'/profile.png'} width={30} height={30} />
              </button>
            ) : (
              <button
                onClick={() => router.push('/phone')}
                className="btn flex gap-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3 py-2 text-sm"
              >
                <ArrowRight className="w-4 h-4" />
                <span>ورود / ثبت نام</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg fixed inset-x-0 top-16 bottom-0 overflow-y-auto">
            <div className="container mx-auto px-4 py-3 h-full flex flex-col">
              <div className="overflow-y-auto flex-grow">
                <NavItems mobileMode />
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100 pb-6">
                <TelBtn className="w-full justify-center mb-3 py-3 text-base" />
                {isLoggedIn ? (
                  <button
                    onClick={() => router.push('/profile')}
                    className="btn w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-5 text-base"
                  >
                    <Image alt="profile" src={'/profile.png'} width={35} height={35} />
                    <span className="font-normal">کوروش صفایی</span>
                  </button>
                ) : (
                  <button
                    onClick={() => router.push('/phone')}
                    className="btn w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 text-base"
                  >
                    ورود / ثبت نام
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

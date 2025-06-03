'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavButtons = () => {
  const pathname = usePathname();
  const router = useRouter();
  const handleButtonClick = path => {
    router.push(path);
  };

  return (
    <div className="flex items-center text-nowrap gap-10 border-b border-slate-300 text-xl w-min justify-center">
      <button
        type="button"
        className={`relative pb-3  ${pathname === '/about-us' ? 'text-blue-600  border-b-2 border-blue-600' : 'text-slate-500'}`}
        onClick={() => handleButtonClick('/about-us')}
      >
        درباره ما
        {pathname === '/about' && (
          <span className="absolute -bottom-[0.02rem] left-0 right-0 h-0.5 bg-blue-600"></span>
        )}
      </button>
      <button
        type="button"
        className={`relative pb-3  ${pathname === '/contact-us' ? 'text-blue-600  border-b-2 border-blue-600' : 'text-slate-500'}`}
        onClick={() => handleButtonClick('/contact-us')}
      >
        ارتباط با ما
        {pathname === '/contact' && (
          <span className="absolute -bottom-[0.02rem]  left-0 right-0 h-0.5 bg-blue-600"></span>
        )}
      </button>
    </div>
  );
};

export default NavButtons;

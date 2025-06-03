'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ProfileLogout from '../../components/profile/ProfileLogout';
import ProfileBadge from '../../components/profile/ProfileBadge';
import ProfileSidebar from '../../components/profile/ProfileSidebar';
import { Menu } from 'lucide-react';

export default function ProfileLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="py-4 lg:py-15 px-4">
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative h-full w-72 max-w-[90%] bg-white shadow-xl">
          <div className="p-4 space-y-4 overflow-y-auto h-full">
            <div className="w-full">
              <ProfileBadge />
            </div>
            <ProfileSidebar mobileView />
            <div className="w-full">
              <ProfileLogout />
            </div>
          </div>
        </div>
      </div>

      <main className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
        <div className="hidden lg:flex flex-col w-full lg:w-1/3 xl:w-1/4 space-y-4 md:space-y-6">
          <div className="w-full">
            <ProfileBadge />
          </div>
          <ProfileSidebar />
          <div className="w-full">
            <ProfileLogout />
          </div>
        </div>

        <div className="w-full lg:w-2/3 xl:w-3/4">{children}</div>
      </main>
    </div>
  );
}

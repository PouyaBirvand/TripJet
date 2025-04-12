'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SidebarItem from './SidebarItem';
import LoadingSidebar from './LoadingSidebar';
import { ArrowLeftRight, Bolt, CalendarHeart, ShoppingBasket, Ticket, UserRound } from 'lucide-react';

export default function ProfileSidebar({ mobileView = false }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const SidebarItems = [
    {
      icon: <UserRound size={18} className="ml-2" />,
      title: 'حساب کاربری',
      href: '/profile/account',
    },
    {
      icon: <ShoppingBasket size={18} className="ml-2" />,
      title: 'سفر های من',
      href: '/profile/trips',
    },
    {
      icon: <Ticket size={18} className="ml-2" />,
      title: 'مدیریت رزرو خودکار',
      href: '/profile/auto-reservation',
    },
    {
      icon: <CalendarHeart size={18} className="ml-2" />,
      title: 'علاقه مندی ها',
      href: '/profile/favorites',
    },
    {
      icon: <ArrowLeftRight size={18} className="ml-2" />,
      title: 'تراکنش ها',
      href: '/profile/transactions',
    },
  ];

  return (
    <div className={`bg-white rounded-xl border-1 border-gray-200 px-4 py-1 ${mobileView ? 'w-full' : 'w-full max-w-xs'}`}>
      {loading ? (
        <LoadingSidebar length={SidebarItems.length} />
      ) : (
        <div className="space-y-1">
          {SidebarItems.map((item, index) => (
            <SidebarItem key={index} item={item} isActive={pathname.startsWith(item.href)} mobileView={mobileView} />
          ))}
        </div>
      )}
    </div>
  );
}
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const SidebarItem = ({ item, isActive, mobileView = false }) => {
  return (
    <div className="border-b border-gray-100 py-3">
      <Link href={item.href}>
        <div
          className={`flex w-full justify-between items-center py-2 text-base font-medium hover:!text-blue-600 transition-colors ${
            isActive ? '!text-blue-600' : ''
          } ${mobileView ? 'px-2' : ''}`}
        >
          <span className="flex items-center">
            <span className={`${isActive ? '!text-blue-600' : 'text-gray-500'}`}>{item.icon}</span>
            {item.title}
          </span>
          <ChevronLeft strokeWidth={1.5} size={16} />
        </div>
      </Link>
    </div>
  );
};

export default SidebarItem;

import { useAuth } from '../../contexts/AuthContext';
import Cookies from 'js-cookie';
import { X } from 'lucide-react';
import { redirect } from 'next/navigation';

export default function ProfileLogoutModal({ onClose }) {
  const { logout } = useAuth()
  const handleLogout = () => {
    Cookies.remove("phone_verification_token");
    
    logout(); 
    // router.refresh();
    redirect('/');
  }
  
  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4 sm:p-6"
      dir="rtl"
    >
      <div className="bg-white rounded-xl animate-slide-up overflow-hidden w-full max-w-[40rem] md:p-15 relative">
        <div className="absolute top-4 sm:top-5 left-4 sm:left-5">
          <button
            onClick={onClose}
            className="rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-base-content/10 transition-colors p-1 focus-ring border text-slate-400 border-slate-400"
            aria-label="بستن"
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center px-4 sm:px-8 pt-14 sm:pt-16 pb-8 sm:pb-10">
          <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-5 text-center">
            خروج از حساب کاربری
          </h1>
          <p className="text-center text-slate-400 font-light mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
            آیا مایل هستید از حساب کاربری خود خارج شوید؟
          </p>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 w-full max-w-md">
            <button onClick={handleLogout} className="btn btn-outline btn-error rounded-lg font-normal bg-red-500 text-white shadow-none w-1/2 max-w-xs text-xs sm:text-sm py-2 sm:py-2.5 h-auto min-h-0">
              خروج
            </button>
            <button onClick={onClose} className="btn btn-[#14324] btn-error rounded-lg font-normal bg-white shadow-none w-1/2 max-w-xs text-xs sm:text-sm py-2 sm:py-2.5 h-auto min-h-0">
              انصراف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

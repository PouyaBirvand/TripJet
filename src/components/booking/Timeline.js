'use client';

import { Home, CreditCard, Check, User, Plane } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Timeline() {
  const pathname = usePathname();
  
  const steps = [
    { id: 1, title: 'انتخاب تور', icon: Plane, path: '/tour-selection' },
    { id: 2, title: 'مشخصات', icon: User, path: '/personal-info' },
    { id: 3, title: 'تایید اطلاعات', icon: Check, path: '/confirmation' },
    { id: 4, title: 'پرداخت', icon: CreditCard, path: '/payment' },
    { id: 5, title: 'صدور ووچر', icon: Home, path: '/voucher' },
  ];

  let currentStep = steps.findIndex(step => pathname.includes(step.path)) + 1;
  
  if (currentStep <= 0) {
    if (pathname.includes('/booking')) {
      currentStep = 2; 
    } else {
      currentStep = 1; 
    }
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center relative">
        {/* Timeline line */}
        <div className="absolute h-1 w-[97%] bg-gray-400 top-7 lg:w-[30%] left-0 right-2 z-0 lg:mx-auto"></div>
        
        {/* Timeline steps */}
        <div className="flex justify-between w-full relative z-10 lg:w-1/3 lg:mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = step.id < currentStep;
            const isCurrent = step.id === currentStep;
            const isActive = step.id <= currentStep;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-14 h-14 flex items-center justify-center rounded-full 
                  ${isActive ? 'bg-blue-600' : 'bg-gray-400'}`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className={`mt-4 text-sm font-medium text-center
                  ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

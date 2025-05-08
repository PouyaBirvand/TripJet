'use client';

import { useEffect, useState } from 'react';
import { Compass } from 'lucide-react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 0));
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
          
          <svg className="w-24 h-24" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="46" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="8" 
              strokeLinecap="round" 
              strokeDasharray="289.27"
              strokeDashoffset={289.27 - (289.27 * progress) / 100}
              className="text-primary transform -rotate-90 origin-center transition-all duration-300 ease-out"
            />
          </svg>
          
          <Compass 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary" 
            size={36}
          />
          
          <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
        </div>
        
        <div className="text-center relative">
          <h2 className="text-2xl font-medium text-gray-800 mb-1">
            در حال بارگذاری
          </h2>
          <p className="text-gray-500 text-md mb-3">
            لطفاً کمی صبر کنید
          </p>
          
          <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="mt-2 text-md text-primary font-medium">
            {progress}%
          </div>
        </div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-ping opacity-20" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-ping opacity-20" style={{ animationDuration: '2.5s', animationDelay: '0.2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping opacity-20" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
    </div>
  );
}

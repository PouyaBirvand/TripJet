'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Wifi, Globe, Trash2 } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-red-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              مشکلی در مسیر سفر شما پیش آمد!
            </h2>
            <p className="text-gray-600 max-w-md">
              متأسفانه در پردازش درخواست شما خطایی رخ داده است. می‌توانید دوباره تلاش کنید یا به
              صفحه اصلی بازگردید.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full mb-8">
            <button
              onClick={() => reset()}
              className="btn bg-blue-600 text-white rounded-lg flex-1 gap-2"
            >
              <RefreshCw className="h-5 w-5" />
              تلاش مجدد
            </button>

            <Link href="/" className="btn btn-outline rounded-lg flex-1 gap-2">
              <Home className="h-5 w-5" />
              بازگشت به صفحه اصلی
            </Link>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 rounded-xl w-full text-left overflow-auto">
              <h3 className="font-mono font-bold text-sm mb-2 text-gray-700">
                جزئیات خطا (فقط در محیط توسعه):
              </h3>
              <pre className="text-xs font-mono whitespace-pre-wrap break-words text-red-600">
                {error?.message || 'خطای نامشخص'}
              </pre>
              {error?.stack && (
                <pre className="text-xs font-mono mt-2 whitespace-pre-wrap break-words text-gray-600 max-h-40 overflow-y-auto">
                  {error.stack}
                </pre>
              )}
            </div>
          )}

          <div className="bg-blue-50 rounded-xl p-5">
            <h3 className="font-medium text-blue-700 mb-3 flex items-center gap-2">
              <Globe className="h-5 w-5" />
              راهکارهای پیشنهادی
            </h3>

            <ul className="text-sm text-gray-700 space-y-3">
              <li className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span>صفحه را رفرش کنید</span>
              </li>
              <li className="flex items-center gap-2">
                <Wifi className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span>اتصال اینترنت خود را بررسی کنید</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span>از مرورگر دیگری استفاده کنید</span>
              </li>
              <li className="flex items-center gap-2">
                <Trash2 className="h-4 w-4 text-blue-500 flex-shrink-0" />
                <span>کوکی‌ها و کش مرورگر را پاک کنید</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            اگر مشکل همچنان ادامه دارد، لطفاً با پشتیبانی تماس بگیرید
          </div>
        </div>
      </div>
    </div>
  );
}

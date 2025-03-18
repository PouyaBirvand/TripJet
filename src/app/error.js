'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // اینجا می‌توانید خطا را به سرویس‌های مانیتورینگ گزارش دهید
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-base-100">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center text-center">
            <div className="text-error mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            <h2 className="card-title text-2xl font-bold mb-2">مشکلی پیش آمد!</h2>

            <p className="text-base-content/80 mb-6">
              متأسفانه خطایی در برنامه رخ داده است. می‌توانید دوباره تلاش کنید یا به صفحه اصلی
              بازگردید.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button onClick={() => reset()} className="btn btn-primary flex-1">
                تلاش مجدد
              </button>

              <Link href="/" className="btn btn-outline flex-1">
                بازگشت به صفحه اصلی
              </Link>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div className="mt-8 p-4 bg-base-300 rounded-box w-full text-left overflow-auto">
                <h3 className="font-mono font-bold text-sm mb-2">
                  جزئیات خطا (فقط در محیط توسعه):
                </h3>
                <pre className="text-xs font-mono whitespace-pre-wrap break-words text-error">
                  {error?.message || 'خطای نامشخص'}
                </pre>
                {error?.stack && (
                  <pre className="text-xs font-mono mt-2 whitespace-pre-wrap break-words text-base-content/70">
                    {error.stack}
                  </pre>
                )}
              </div>
            )}

            <div className="divider mt-8 mb-4">راهنمایی</div>

            <ul className="text-sm text-base-content/70 space-y-2 text-right w-full">
              <li>• صفحه را رفرش کنید</li>
              <li>• اتصال اینترنت خود را بررسی کنید</li>
              <li>• از مرورگر دیگری استفاده کنید</li>
              <li>• کوکی‌ها و کش مرورگر را پاک کنید</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

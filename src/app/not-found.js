import Link from 'next/link';
import { Compass, ArrowLeft, Map } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-blue-600 p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="relative">
                <Compass className="h-32 w-32 text-white mx-auto animate-pulse" strokeWidth={1.5} />
              </div>
              <h3 className="text-white text-xl mt-6 font-light">مسیر شما گم شده است</h3>
            </div>
          </div>

          <div className="md:w-1/2 p-8 md:p-10">
            <div className="text-center md:text-right">
              <h2 className="text-5xl font-bold text-gray-800 mb-2">404</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">صفحه مورد نظر پیدا نشد</h3>

              <div className="mb-8 text-gray-600">
                <p className="mb-4">صفحه‌ای که به دنبال آن هستید در نقشه سفر ما وجود ندارد.</p>
                <p>شاید مسیر را اشتباه آمده‌اید یا این مقصد دیگر در تورهای ما موجود نیست.</p>
              </div>

              <div className="space-y-3">
                <Link
                  href="/"
                  className="btn rounded-lg !bg-blue-600 !text-white w-full flex items-center justify-center gap-2 group"
                >
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                  <span>بازگشت به صفحه اصلی</span>
                </Link>

                <Link
                  href="/tours"
                  className="btn rounded-lg btn-outline !bg-blue-600 !text-white w-full flex items-center justify-center gap-2"
                >
                  <Map className="h-5 w-5" />
                  <span>مشاهده تورهای ویژه</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import { Construction, ArrowLeft, Clock, Calendar } from 'lucide-react';

export default function TourPage({ params }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-48 bg-blue-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNG0xOCA5YzAtMS4xMDUtLjg5NS0yLTItMnMtMiAuODk1LTIgMiAuODk1IDIgMiAyIDItLjg5NSAyLTJNMjQgMTZjMC0xLjEwNS0uODk1LTItMi0ycy0yIC44OTUtMiAyIC44OTUgMiAyIDIgMi0uODk1IDItMm0tMTggOWMwLTEuMTA1LS44OTUtMi0yLTJzLTIgLjg5NS0yIDIgLjg5NSAyIDIgMiAyLS44OTUgMi0ybTE4IDljMC0xLjEwNS0uODk1LTItMi0ycy0yIC44OTUtMiAyIC44OTUgMiAyIDIgMi0uODk1IDItMiIvPjwvZz48L2c+PC9zdmc+')]"></div>
          </div>
          
          <div className="relative text-white text-center z-10">
            <Construction className="h-16 w-16 mx-auto mb-2" />
            <h1 className="text-2xl font-bold">در حال ساخت</h1>
          </div>
        </div>
        
        <div className="p-6">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-amber-500">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-amber-800 mb-1">این صفحه در حال توسعه است</h3>
                <p className="text-amber-700 text-sm">
                  صفحه جزئیات تور با شناسه <span className="font-mono bg-amber-100 px-1.5 py-0.5 rounded text-amber-800">{params.id}</span> در حال ساخت است و به زودی در دسترس قرار خواهد گرفت.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-500" />
              <div>
                <h3 className="font-medium">زمان تقریبی راه‌اندازی</h3>
                <p className="text-gray-600 text-sm">به زودی در دسترس خواهد بود</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <span className="text-xs font-bold">؟</span>
              </div>
              <div>
                <h3 className="font-medium">چه انتظاری داشته باشیم؟</h3>
                <p className="text-gray-600 text-sm">در این صفحه می‌توانید جزئیات کامل تور، تصاویر، برنامه سفر، قیمت و امکان رزرو را مشاهده کنید.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/" className="btn bg-blue-600 rounded-lg text-white py-5 flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              بازگشت به صفحه اصلی
            </Link>
            
            <Link href="/tours" className="btn btn-outline hover:bg-blue-600 hover:text-white rounded-lg text-blue-600 py-5  flex items-center justify-center gap-2">
              مشاهده سایر تورها
            </Link>
          </div>
          
          <div className="mt-8">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">پیشرفت توسعه</span>
              <span className="text-blue-600 font-medium">40%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full w-[40%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

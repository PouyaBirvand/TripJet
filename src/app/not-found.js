import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 bg-base-100">
      <div className="card w-full max-w-md bg-base-200 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center text-center">
            <div className="text-error mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h2 className="card-title text-3xl font-bold mb-2">404</h2>
            <h3 className="text-xl font-semibold mb-4">صفحه مورد نظر یافت نشد</h3>

            <p className="text-base-content/80 mb-6">
              صفحه‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.
            </p>

            <Link href="/" className="btn btn-primary w-full">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Vazirmatn } from 'next/font/google';

import './globals.css';
import ThemeToggle from '../components/ui/theme-toggle';
import { QueryProvider } from '../providers/QueryProvider';
import { AuthProvider } from '../hooks/useAuth';

const vazir = Vazirmatn({
  variable: '--font-vazir',
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: 'سایت فروش بلیط تور گردشگری',
  description: 'سایت فروش بلیط تور های گردشگری',
};

export default function RootLayout({ children, auth }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} container antialiased min-h-screen flex flex-col`}>
        <header>
          <div>
            <ThemeToggle />
          </div>
        </header>

        <main className="">
          <AuthProvider>
            <QueryProvider>
              {children}
              {auth}
            </QueryProvider>
          </AuthProvider>
        </main>

        <footer>{/* FOOTER */}</footer>
      </body>
    </html>
  );
}

import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Footer from '../components/layout/Footer';
import { QueryProvider } from '../providers/QueryProvider';
import { AuthProvider } from '../providers/AuthProvider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Header from '../components/layout/Header/Header';

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
      <body className={`${vazir.className} antialiased min-h-screen flex flex-col bg-base-200`}>
        <NuqsAdapter>
          <QueryProvider>
            <AuthProvider>
              <Header />
              <main className="container my-4 pb-24">
                {children}
                {auth}
              </main>
              <Footer />
            </AuthProvider>
          </QueryProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

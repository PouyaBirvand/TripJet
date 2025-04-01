import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import { QueryProvider } from '../providers/QueryProvider';
import { AuthProvider } from '../providers/AuthProvider';

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
        <QueryProvider>
          <AuthProvider>
            <Header />
            <main className="container my-4">
              {children}
              {auth}
            </main>
            <Footer />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}

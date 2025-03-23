import { Vazirmatn } from 'next/font/google';

import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} antialiased min-h-screen flex flex-col bg-base-300`}>
        <Header />

        <main className="container my-4">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
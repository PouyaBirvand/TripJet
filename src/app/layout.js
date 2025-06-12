import { Vazirmatn } from 'next/font/google';
import './globals.css';
import Footer from '../components/layout/Footer';
import { QueryProvider } from '../providers/QueryProvider';
import { AuthProvider } from '../providers/AuthProvider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import Header from '../components/layout/Header/Header';

export const metadata = {
  title: 'تریپ جت | رزرو آنلاین تور و سفر | بهترین قیمت تورهای گردشگری',
  description:
    'رزرو آنلاین تورهای گردشگری داخلی و خارجی با بهترین قیمت. تور کیش، مشهد، شیراز، استانبول، دبی و بیش از 100 مقصد گردشگری. تضمین کیفیت و قیمت مناسب.',
  keywords:
    'رزرو تور, تور گردشگری, سفر, تور کیش, تور مشهد, تور شیراز, تور استانبول, تور دبی, بلیط هواپیما, هتل, تریپ جت',
  authors: [{ name: 'TripJet Team' }],
  creator: 'TripJet',
  publisher: 'TripJet',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://tripjet.liara.run/',
    siteName: 'تریپ جت',
    title: 'تریپ جت | رزرو آنلاین تور و سفر',
    description:
      'رزرو آنلاین تورهای گردشگری داخلی و خارجی با بهترین قیمت. بیش از 100 مقصد گردشگری در سراسر جهان.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'تریپ جت - رزرو تور گردشگری',
      },
    ],
  },
  alternates: {
    canonical: 'https://tripjet.liara.run/',
    languages: {
      'fa-IR': 'https://tripjet.liara.run/',
    },
  },
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
  category: 'travel',
  classification: 'Travel & Tourism',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tripjet.liara.run/'),
  applicationName: 'TripJet',
  appleWebApp: {
    capable: true,
    title: 'TripJet',
    statusBarStyle: 'default',
  },
  // manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/Trip.com_Icon_2022.png', sizes: '16x16', type: 'image/png' },
      { url: '/Trip.com_Icon_2022.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children, auth }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
      <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'تریپ جت',
              description: 'رزرو آنلاین تورهای گردشگری داخلی و خارجی',
              url: 'https://tripjet.com',
              logo: 'https://tripjet.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+98-21-12345678',
                contactType: 'customer service',
                availableLanguage: ['Persian', 'English'],
              },
              sameAs: [
                'https://instagram.com/tripjet_official',
                'https://telegram.me/tripjet_official',
              ],
            }),
          }}
        />
      </head>
      <body className={`antialiased min-h-screen flex flex-col bg-base-200`}>
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

  import Link from "next/link";
  import Image from "next/image";
  import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

  const Footer = () => {
    return (
      <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
            {/* Logo and Contact Info */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image 
                  width={150} 
                  height={50} 
                  src="/logo.svg" 
                  alt="TripJet Logo"
                  className="h-10 w-auto dark:invert"
                />
              </Link>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600 " />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">پشتیبانی تلفنی</p>
                    <Link href="tel:+02170709797" className="hover:text-blue-600 ">
                      ۰۲۱۷۰۷۰۹۷۹۷
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600 " />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">آدرس دفتر مرکزی</p>
                    <p>تهران، سعادت آباد، خیابان کاج، پلاک ۱۶</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600 " />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">آدرس ایمیل</p>
                    <Link href="mailto:tripjet@gmail.com" className="hover:text-blue-600 ">
                      tripjet@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">تریپ جت</h3>
              <ul className="space-y-3">
                <li><Link href="/about-us" className="hover:text-blue-600 ">درباره ما</Link></li>
                <li><Link href="/contact-us" className="hover:text-blue-600 ">تماس با ما</Link></li>
                <li><Link href="/insurance" className="hover:text-blue-600 ">بیمه مسافرتی</Link></li>
                <li><Link href="/faq" className="hover:text-blue-600 ">پرسش و پاسخ</Link></li>
              </ul>
            </div>
            
            {/* Customer Service */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">خدمات مشتریان</h3>
              <ul className="space-y-3">
                <li><Link href="/purchase-guide" className="hover:text-blue-600 ">راهنمای خرید</Link></li>
                <li><Link href="/terms" className="hover:text-blue-600 ">قوانین و مقررات</Link></li>
                <li><Link href="/refund" className="hover:text-blue-600 ">راهنمای استرداد</Link></li>
                <li><Link href="/support" className="hover:text-blue-600 ">پشتیبانی آنلاین</Link></li>
              </ul>
            </div>
            
            {/* Popular Tours */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">تورهای پرطرفدار</h3>
              <ul className="space-y-3">
                <li><Link href="/tours/dubai" className="hover:text-blue-600 ">تور دبی</Link></li>
                <li><Link href="/tours/kish" className="hover:text-blue-600 ">تور کیش</Link></li>
                <li><Link href="/tours/antalya" className="hover:text-blue-600 ">تور آنتالیا</Link></li>
                <li><Link href="/tours/istanbul" className="hover:text-blue-600 ">تور استانبول</Link></li>
              </ul>
            </div>
            
            {/* Additional Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">اطلاعات تکمیلی</h3>
              <ul className="space-y-3">
                <li><Link href="/corporate" className="hover:text-blue-600 ">فروش سازمانی</Link></li>
                <li><Link href="/careers" className="hover:text-blue-600 ">فرصت‌های شغلی</Link></li>
                <li><Link href="/feedback" className="hover:text-blue-600 ">سنجش رضایتمندی</Link></li>
                <li><Link href="/partnership" className="hover:text-blue-600 ">همکاری با آژانس‌ها</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Social and Certification Section */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200  pt-8 gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-6 space-x-reverse">
              
              <div className="flex items-center gap-4">
                <Link 
                  href="https://www.instagram.com/" 
                  aria-label="اینستاگرام"
                  className="p-2 rounded-lg hover:text-blue-600 bg-slate-200"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/" 
                  aria-label="لینکدین"
                  className="p-2 rounded-lg hover:text-blue-600 bg-slate-200"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link 
                  href="mailto:tripjet@gmail.com" 
                  aria-label="ایمیل"
                  className="p-2 rounded-lg hover:text-blue-600 bg-slate-200"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://enamad.ir/" className="hover:opacity-80 transition-opacity">
                <Image 
                  width={70} 
                  height={70} 
                  src="/enamad.png" 
                  alt="نماد الکترونیکی" 
                  className="h-16 w-auto dark:invert"
                />
              </Link>
              <Link href="http://samandehi.ir" className="hover:opacity-80 transition-opacity">
                <Image 
                  width={70} 
                  height={70} 
                  src="/samandehi.png" 
                  alt="ساماندهی" 
                  className="h-16 w-auto dark:invert"
                />
              </Link>
              <Link href="https://www.aira.ir/" className="hover:opacity-80 transition-opacity">
                <Image 
                  width={70} 
                  height={70} 
                  src="/aira.png" 
                  alt="انجمن صنفی کسب و کار اینترنتی" 
                  className="h-16 w-auto dark:invert"
                />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Image 
                  width={70} 
                  height={70} 
                  src="/airPlane.png" 
                  alt="مجوز رسمی آژانس مسافرتی" 
                  className="h-16 w-auto dark:invert"
                />
              </Link>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-200  text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} تمامی حقوق این وبگاه محفوظ و متعلق به آژانس مسافرتی تریپ جت می‌باشد.
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
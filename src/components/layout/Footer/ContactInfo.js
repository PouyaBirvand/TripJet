import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
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
          <Phone className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">پشتیبانی تلفنی</p>
            <Link href="tel:+02170709797" className="hover:text-blue-600">
              ۰۲۱۷۰۷۰۹۷۹۷
            </Link>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">آدرس دفتر مرکزی</p>
            <p>تهران، سعادت آباد، خیابان کاج، پلاک ۱۶</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail className="h-5 w-5 mt-1 flex-shrink-0 text-blue-600" />
          <div>
            <p className="font-medium text-gray-900 dark:text-white">آدرس ایمیل</p>
            <Link href="mailto:tripjet@gmail.com" className="hover:text-blue-600">
              tripjet@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

import { Mail, MapPin, Phone } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';

const contactInfo = [
  {
    id: 'email',
    icon: Mail,
    label: 'آدرس ایمیل:',
    value: 'tripjet@gmail.com',
    href: 'mailto:tripjet@gmail.com',
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'تلفن پشتیبانی:',
    value: '۰۲۱۷۰۷۰۹۷۹۷',
    href: 'tel:+982170709797',
    isRtlNumber: true,
  },
  {
    id: 'address',
    icon: MapPin,
    label: 'آدرس دفتر مرکزی:',
    value: 'تهران، سعادت آباد، خیابان کاج، پلاک ۱۶',
    isMultiLine: true,
  },
];

export default function ContactInfoList() {
  return (
    <div className="space-y-6">
      {contactInfo.map(item => (
        <ContactInfoItem key={item.id} {...item} />
      ))}
    </div>
  );
}

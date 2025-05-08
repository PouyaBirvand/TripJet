import { Mail, MapPin, Phone } from "lucide-react";
import ContactInfoItem from "./ContactInfoItem";

export default function ContactInfoList() {
    return (
      <div className="flex flex-col gap-8 text-lg mb-10">
        <ContactInfoItem
          icon={<Mail size={20} />} 
          label="آدرس ایمیل:" 
          value="tripjet@gmail.com" 
        />
        <ContactInfoItem 
          icon={<Phone size={20} />} 
          label="تلفن پشتیبانی:" 
          value="۰۲۱۷۰۷۰۹۷۹۷" 
          isRtlNumber 
        />
        <ContactInfoItem 
          icon={<MapPin size={20} />} 
          label="آدرس دفتر مرکزی:" 
          value="تهران، سعادت آباد، خیابان کاج، پلاک ۱۶" 
          isMultiLine 
        />
      </div>
    );
  }
'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';
import SocialMediaLinks from './SocialMediaLinks';

export default function ContactInfoCard() {
  return (
    <div className="w-full lg:w-1/3 rounded-2xl border border-slate-200 bg-blue-600 relative overflow-hidden p-8 text-white shadow-lg">
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-8">اطلاعات تماس</h2>
        <p className="text-lg font-normal mb-8">برای شروع چت فیلد های مقابل را تکمیل کنید.</p>
        
        <ContactInfoList />
        <SocialMediaLinks />
      </div>
      
      <ContactCardDecorations />
    </div>
  );
}

function ContactInfoList() {
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

function ContactCardDecorations() {
  return (
    <>
      <span className="absolute w-40 h-40 bg-blue-700 rounded-full top-[2rem] left-[80%] z-0 opacity-80"></span>
      <span className="absolute w-60 h-60 bg-blue-800 rounded-full bottom-[-5rem] left-[-1rem] z-0 opacity-80"></span>
    </>
  );
}
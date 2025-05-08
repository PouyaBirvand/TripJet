'use client';
import ContactCardDecorations from './ContactCardDecorations';
import ContactInfoList from './ContactInfoList';
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




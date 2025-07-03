'use client';
import ContactCardDecorations from './ContactCardDecorations';
import ContactInfoList from './ContactInfoList';
import SocialMediaLinks from './SocialMediaLinks';

export default function ContactInfoCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 sm:p-8 text-white shadow-xl">
      <div className="relative z-10 space-y-8">
        <ContactHeader />
        <ContactInfoList />
        <SocialMediaLinks />
      </div>
      <ContactCardDecorations />
    </div>
  );
}

const ContactHeader = () => (
  <div className="space-y-4">
    <h2 className="text-xl sm:text-2xl font-bold">اطلاعات تماس</h2>
    <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
      برای شروع چت فیلد های مقابل را تکمیل کنید.
    </p>
  </div>
);

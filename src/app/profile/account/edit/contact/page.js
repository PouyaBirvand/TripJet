'use client';
import { useRouter } from 'next/navigation';
import { useProfile } from '../../../../../hooks/useProfile';
import EditContactCard from '../../../../../components/profile/ProfileAccount/ProfileEdit/EditContactCard';

export default function EditContactPage() {
  const router = useRouter();
  const { profile, updateProfile, isProfileLoading } = useProfile();

  const handleSubmit = (values) => {
    console.log('Submitting contact data:', values);
    
    // ارسال اطلاعات به سرور با استفاده از متد updateProfile
    updateProfile({
      phone: values.mobile,
      landline: values.phone,
      email: values.email,
      alternateEmail: values.alternateEmail
    }, 'contact');
    
    router.push('/profile/account');
  };

  // اگر در حال بارگذاری اطلاعات پروفایل هستیم، یک لودر نمایش دهیم
  if (isProfileLoading) {
    return <div className="animate-pulse bg-white rounded-xl p-6 h-96"></div>;
  }

  const initialData = {
    phone: profile?.landline || '',
    mobile: profile?.phone || '',
    email: profile?.email || '',
    alternateEmail: profile?.alternateEmail || '',
  };

  return (
    <EditContactCard
      initialData={initialData}
      onSubmit={handleSubmit}
      returnPath="/profile/account"
    />
  );
}

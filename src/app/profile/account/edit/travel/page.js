'use client';
import { useRouter } from 'next/navigation';
import { useProfile } from '../../../../../hooks/useProfile';
import EditTravelCard from '../../../../../components/profile/ProfileAccount/ProfileEdit/EditTravelCard';

export default function EditTravelPage() {
  const router = useRouter();
  const { profile, updateProfile, isProfileLoading } = useProfile();

  const handleSubmit = (values) => {
    console.log('Submitting travel data:', values);
    
    // ارسال اطلاعات به سرور با استفاده از متد updateProfile
    updateProfile({
      national_id: values.nationalId,
      birth_date: values.birthDate,
      passport_number: values.passportNumber,
      passport_expiry: values.passportExpiry
    }, 'travel');
    
    router.push('/profile/account');
  };

  // اگر در حال بارگذاری اطلاعات پروفایل هستیم، یک لودر نمایش دهیم
  if (isProfileLoading) {
    return <div className="animate-pulse bg-white rounded-xl p-6 h-96"></div>;
  }

  const initialData = {
    birthDate: profile?.birth_date || '',
    nationalId: profile?.national_id || '',
    passportExpiry: profile?.passport_expiry || '',
    passportNumber: profile?.passport_number || '',
  };

  return (
    <EditTravelCard
      initialData={initialData}
      onSubmit={handleSubmit}
      returnPath="/profile/account"
    />
  );
}

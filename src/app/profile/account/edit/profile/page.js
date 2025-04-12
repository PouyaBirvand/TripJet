'use client';
import { useRouter } from 'next/navigation';
import EditProfileCard from '../../../../../components/profile/ProfileAccount/ProfileEdit/EditProfileCard';
import { useProfile } from '../../../../../hooks/useProfile';

export default function EditProfilePage() {
  const router = useRouter();
  const { profile, updateProfile, isProfileLoading } = useProfile();

  const handleSubmit = (values) => {
    console.log('Submitting profile data:', values);
    
    // ترکیب نام و نام خانوادگی برای فیلد name
    const updatedData = {
      ...values,
      name: `${values.firstName} ${values.lastName}`
    };
    
    // ارسال اطلاعات به سرور با استفاده از متد updateProfile
    updateProfile(updatedData, 'profile');
    
    // پس از موفقیت، کاربر به صفحه اصلی پروفایل هدایت می‌شود
    router.push('/profile/account');
  };

  // اگر در حال بارگذاری اطلاعات پروفایل هستیم، یک لودر نمایش دهیم
  if (isProfileLoading) {
    return <div className="animate-pulse bg-white rounded-xl p-6 h-96"></div>;
  }

  const initialData = {
    firstName: profile?.firstName || '',
    lastName: profile?.lastName || '',
    firstNameEn: profile?.firstNameEn || '',
    lastNameEn: profile?.lastNameEn || '',
    gender: profile?.gender || 'male',
  };

  return (
    <EditProfileCard 
      initialData={initialData}
      onSubmit={handleSubmit}
      returnPath="/profile/account"
    />
  );
}

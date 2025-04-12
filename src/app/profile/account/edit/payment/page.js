'use client';
import { useRouter } from 'next/navigation';
import EditPaymentCard from '../../../../../components/profile/ProfileAccount/ProfileEdit/EditPaymentCard';
import { useProfile } from '../../../../../hooks/useProfile';

export default function EditPaymentPage() {
  const router = useRouter();
  const { profile, updateProfile, isProfileLoading } = useProfile();

  const handleSubmit = (values) => {
    console.log('Submitting payment data:', values);
    
    // ارسال اطلاعات به سرور با استفاده از متد updateProfile
    updateProfile({
      bank_account: values.accountNumber,
      bank_sheba: values.sheba,
      bank_card: values.cardNumber
    }, 'payment');
    
    router.push('/profile/account');
  };

  // اگر در حال بارگذاری اطلاعات پروفایل هستیم، یک لودر نمایش دهیم
  if (isProfileLoading) {
    return <div className="animate-pulse bg-white rounded-xl p-6 h-96"></div>;
  }

  const initialData = {
    accountNumber: profile?.bank_account || '',
    sheba: profile?.bank_sheba || '',
    cardNumber: profile?.bank_card || '',
  };

  return (
    <EditPaymentCard 
      initialData={initialData}
      onSubmit={handleSubmit}
      returnPath="/profile/account"
    />
  );
}

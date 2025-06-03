'use client';
import { useRouter } from 'next/navigation';
import EditPaymentCard from '../../../../../components/profile/ProfileAccount/ProfileEdit/EditPaymentCard';
import { useUserProfile } from '../../../../../hooks/ProfileHooks/useUserProfile';
import { getPaymentInitialValues } from '../../../../../lib/formInitialValues';

export default function EditPaymentPage() {
  const router = useRouter();
  const { profile, updateProfile, isProfileLoading } = useUserProfile();

  const handleSubmit = values => {
    console.log('Submitting payment data:', values);

    updateProfile(
      {
        bank_account: values.accountNumber,
        bank_sheba: values.sheba,
        bank_card: values.cardNumber,
      },
      'payment'
    );

    router.push('/profile/account');
  };

  if (isProfileLoading) {
    return <div className="animate-pulse bg-white rounded-xl p-6 h-96"></div>;
  }

  return (
    <EditPaymentCard
      initialData={getPaymentInitialValues}
      onSubmit={handleSubmit}
      returnPath="/profile/account"
    />
  );
}

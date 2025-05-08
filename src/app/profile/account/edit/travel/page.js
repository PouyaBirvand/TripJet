'use client';
import { useRouter } from 'next/navigation';
import EditTravelCard from '../../../../../components/profile/ProfileAccount/ProfileEdit/EditTravelCard';
import { useUserProfile } from '../../../../../hooks/ProfileHooks/useUserProfile';
import { getTravelInitialValues } from '../../../../../lib/formInitialValues';

export default function EditTravelPage() {
  const router = useRouter();
  const { updateProfile, isProfileLoading } = useUserProfile();

  const handleSubmit = (values) => {
    console.log('Submitting travel data:', values);
    
    updateProfile({
      national_id: values.nationalId,
      birth_date: values.birthDate,
      passport_number: values.passportNumber,
      passport_expiry: values.passportExpiry
    }, 'travel');
    
    router.push('/profile/account');
  };

  if (isProfileLoading) {
    return <div className="animate-pulse bg-white rounded-xl p-6 h-96"></div>;
  }



  return (
    <EditTravelCard
      initialData={getTravelInitialValues}
      onSubmit={handleSubmit}
      returnPath="/profile/account"
    />
  );
}

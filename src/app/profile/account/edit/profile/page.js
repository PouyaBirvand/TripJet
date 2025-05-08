'use client';
import { useRouter } from 'next/navigation';
import EditProfileCard from '../../../../../components/profile/ProfileAccount/ProfileEdit/EditProfileCard';
import { useUserProfile } from '../../../../../hooks/ProfileHooks/useUserProfile';
import { getPersonalInitialValues } from '../../../../../lib/formInitialValues';

export default function EditProfilePage() {
  const router = useRouter();
  const { profile, updateProfile, isProfileLoading } = useUserProfile();

  const handleSubmit = (values) => {
    console.log('Submitting profile data:', values);
    
    const updatedData = {
      ...values,
      name: `${values.firstName} ${values.lastName}`
    };
    
    updateProfile(updatedData, 'profile');
    
    router.push('/profile/account');
  };

  if (isProfileLoading) {
    return <div className="animate-pulse bg-white rounded-xl p-6 h-96"></div>;
  }

  return (
    <EditProfileCard 
      initialData={getPersonalInitialValues}
      onSubmit={handleSubmit}
      returnPath="/profile/account"
    />
  );
}

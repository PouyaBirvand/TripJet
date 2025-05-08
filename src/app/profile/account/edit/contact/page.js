'use client';
import { useRouter } from 'next/navigation';
import EditContactCard from '../../../../../components/profile/ProfileAccount/ProfileEdit/EditContactCard';
import { useUserProfile } from '../../../../../hooks/ProfileHooks/useUserProfile';
import { getContactInitialValues } from '../../../../../lib/formInitialValues';

export default function EditContactPage() {
  const router = useRouter();
  const { profile, updateProfile, isProfileLoading } = useUserProfile();

  const handleSubmit = (values) => {
    console.log('Submitting contact data:', values);
    
    updateProfile({
      phone: values.mobile,
      landline: values.phone,
      email: values.email,
      alternateEmail: values.alternateEmail
    }, 'contact');
    
    router.push('/profile/account');
  };

  if (isProfileLoading) {
    return <div className="animate-pulse bg-white rounded-xl p-6 h-96"></div>;
  }


  return (
    <EditContactCard
      initialData={getContactInitialValues}
      onSubmit={handleSubmit}
      returnPath="/profile/account"
    />
  );
}

'use client';
import { useRouter } from 'next/navigation';
import CardBase from '../../common/CardBase';
import InfoRow from '../../common/InfoRow';
import { useUserProfile } from '../../../hooks/ProfileHooks/useUserProfile';

export default function PaymentDetailsCard() {
  const router = useRouter();
  const { profile, isProfileLoading } = useUserProfile();

  const handleEdit = () => {
    router.push('/profile/account/edit/payment');
  };

  if (isProfileLoading) {
    return (
      <CardBase title="اطلاعات بانکی" onEdit={handleEdit}>
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </CardBase>
    );
  }

  return (
    <CardBase title="اطلاعات بانکی" onEdit={handleEdit}>
      <InfoRow label="شماره حساب" value={profile?.bank_account} />
      <InfoRow label="شماره کارت" value={profile?.bank_card} />
      <InfoRow label="شماره شبا" value={profile?.bank_sheba} />
    </CardBase>
  );
}

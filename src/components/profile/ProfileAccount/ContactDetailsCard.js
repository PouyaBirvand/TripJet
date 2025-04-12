'use client';
import { useRouter } from 'next/navigation';
import CardBase from '../../common/CardBase';
import InfoRow from '../../common/InfoRow';
import { useProfile } from '../../../hooks/useProfile';

export default function ContactDetailsCard() {
  const router = useRouter();
  const { profile, isProfileLoading } = useProfile();

  const handleEdit = () => {
    router.push('/profile/account/edit/contact');
  };

  if (isProfileLoading) {
    return (
      <CardBase title="اطلاعات تماس" onEdit={handleEdit}>
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </CardBase>
    );
  }

  return (
    <CardBase title="اطلاعات تماس" onEdit={handleEdit}>
      <InfoRow label="تلفن ثابت" value={profile?.landline} />
      <InfoRow label="شماره موبایل" value={profile?.phone} />
    </CardBase>
  );
}

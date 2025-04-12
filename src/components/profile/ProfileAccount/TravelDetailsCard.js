'use client';
import { useRouter } from 'next/navigation';
import CardBase from '../../common/CardBase';
import InfoRow from '../../common/InfoRow';
import { useProfile } from '../../../hooks/useProfile';

export default function TravelDetailsCard() {
  const router = useRouter();
  const { profile, isProfileLoading } = useProfile();

  const handleEdit = () => {
    router.push('/profile/account/edit/travel');
  };

  if (isProfileLoading) {
    return (
      <CardBase title="اطلاعات مسافرتی" onEdit={handleEdit}>
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </CardBase>
    );
  }

  return (
    <CardBase title="اطلاعات مسافرتی" onEdit={handleEdit}>
      <InfoRow label="کد ملی" value={profile?.national_id} />
      <InfoRow label="تاریخ تولد" value={profile?.birth_date} />
      <InfoRow label="تاریخ انقضای پاسپورت" value={profile?.passport_expiry} />
      <InfoRow label="شماره پاسپورت" value={profile?.passport_number} />
    </CardBase>
  );
}

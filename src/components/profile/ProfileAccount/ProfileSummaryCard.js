'use client';
import { useRouter } from 'next/navigation';
import { formatPrice } from '../../../lib/utils/numbers';
import CardBase from '../../common/CardBase';
import InfoRow from '../../common/InfoRow';
import { useProfile } from '../../../hooks/useProfile';

export default function ProfileSummaryCard() {
  const router = useRouter();
  const { profile, isProfileLoading } = useProfile();

  const handleEdit = () => {
    router.push('/profile/account/edit/profile');
  };

  if (isProfileLoading) {
    return (
      <CardBase title="اطلاعات کاربری" onEdit={handleEdit}>
        <div className="animate-pulse space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </CardBase>
    );
  }

  return (
    <CardBase title="اطلاعات کاربری" onEdit={handleEdit}>
      <InfoRow label="نام و نام خانوادگی" value={profile?.name} />
      <InfoRow
        label="موجودی حساب کاربری"
        value={profile?.walletBalance ? formatPrice(profile.walletBalance) : '-'}
      />
    </CardBase>
  );
}

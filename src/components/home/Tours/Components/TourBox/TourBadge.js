'use client';

import { BadgeAlert, BadgePercent } from 'lucide-react';

export const DiscountBadge = ({ discount }) => (
  <div className="badge badge-soft badge-error rounded-md text-[0.9rem] py-[0.9rem]">
    <BadgePercent fill="red" stroke="white" className="mr-1" />
    {discount}٪ تخفیف
  </div>
);

export const RemainingBadge = ({ remaining }) => (
  <div className="badge badge-soft badge-primary rounded-md text-[0.9rem] py-[0.9rem]">
    <BadgeAlert fill="blue" stroke="white" className="mr-1" />
    {remaining} نفر باقیمانده
  </div>
);

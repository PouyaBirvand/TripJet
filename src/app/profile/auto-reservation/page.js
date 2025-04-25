'use client';
import { AutoReservationHeader } from "../../../components/profile/ProfileReservation/AutoReservationHeader";
import { AutoReservationInfo } from "../../../components/profile/ProfileReservation/AutoReservationInfo";
import { CreditButton } from "../../../components/profile/ProfileReservation/CreditButton";
import { UserCredit } from "../../../components/profile/ProfileReservation/UserCredit";
import { useProfile } from "../../../hooks/useProfile";

export default function AutoReservation() {
  const { profile } = useProfile();
  
  return (
    <div className="bg-white border border-base-300 rounded-xl p-3 sm:p-4 md:p-6">
      <AutoReservationHeader />
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">
        <UserCredit credit={profile?.walletBalance} />
        <CreditButton />
      </div>
      <div className="bg-blue-50 p-3 sm:p-4 md:p-6 rounded-xl flex flex-col gap-3">
        <AutoReservationInfo text="رزرو خودکار تا یک ساعت پیش از حرکت سفرها ادامه خواهد داشت و در صورت موجود بودن ظرفیت، رزرو به طور خودکار انجام می‌شود. پس از این زمان، رزرو متوقف می‌گردد." />
        <AutoReservationInfo text="امکان لغو رزرو خودکار تا پیش از رزرو موفق وجود دارد و در صورت لغو، اعتبار به صورت کامل به حساب کاربری شما بازگردانده می‌شود." />
        <AutoReservationInfo text="رزرو خودکار تا یک ساعت پیش از حرکت سفرها ادامه خواهد داشت و در صورت موجود بودن ظرفیت، رزرو به طور خودکار انجام می‌شود. پس از این زمان، در صورت موفقیت رزرو خودکار، اطلاع‌رسانی از طریق پیامک یا ایمیل انجام خواهد شد و نیازی به پیگیری دستی نخواهد بود." />
        <AutoReservationInfo text="به منظور انصراف از رزرو خودکار، کافیست گزینه 'حذف رزرو' را روی کارت پرواز مورد نظر انتخاب کنید تا رزرو شما به طور کامل لغو شود." />
      </div>
    </div>
  );
}

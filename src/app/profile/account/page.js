import ProfileSummaryCard from "../../../components/profile/ProfileAccount/ProfileSummaryCard";
import ContactDetailsCard from "../../../components/profile/ProfileAccount/ContactDetailsCard";
import PaymentDetailsCard from "../../../components/profile/ProfileAccount/PaymentDetailsCard";
import TravelDetailsCard from "../../../components/profile/ProfileAccount/TravelDetailsCard";

export default function AccountPage() {
  return (
    <div className="grid gap-4 md:gap-6">
      <ProfileSummaryCard />
      <TravelDetailsCard />
      <ContactDetailsCard />
      <PaymentDetailsCard />
    </div>
  );
}

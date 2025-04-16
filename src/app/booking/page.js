import { redirect } from 'next/navigation';

export default function BookingPage() {
  redirect('/booking/personal-info');
  return null;
}

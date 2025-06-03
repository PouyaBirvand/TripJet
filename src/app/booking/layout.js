import Timeline from '../../components/booking/Timeline';
export default function BookingLayout({ children }) {
  return (
    <div>
      <main className="mt-10 flex flex-col gap-20">
        <Timeline />
        {children}
      </main>
    </div>
  );
}

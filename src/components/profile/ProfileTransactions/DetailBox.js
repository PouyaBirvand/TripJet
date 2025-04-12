function DetailBox({ label, value }) {
  return (
    <div className="bg-sky-100/80 rounded-lg p-4 border border-primary">
      <div className="text-sm font-normal text-gray-600">{label}</div>
      <div className="mt-2 font-medium text-gray-800">{value}</div>
    </div>
  );
}
export default DetailBox;

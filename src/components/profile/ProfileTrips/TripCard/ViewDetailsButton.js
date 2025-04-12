import { ChevronLeft } from 'lucide-react';

const ViewDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="!text-blue-600 gap-2 flex items-center justify-self-end">
    مشاهده جزئیات
    <ChevronLeft size={20} />
  </button>
);

export default ViewDetailsButton;

import { X } from 'lucide-react';

const ModalHeader = ({ onClose }) => (
  <div className="flex justify-between items-center p-6 border-b border-base-200">
    <h2 className="text-xl font-bold">جزئیات تور</h2>
    <button onClick={onClose} className="btn btn-ghost btn-sm btn-circle">
      <X size={20} />
    </button>
  </div>
);

export default ModalHeader;

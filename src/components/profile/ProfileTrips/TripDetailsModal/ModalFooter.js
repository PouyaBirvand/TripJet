const ModalFooter = ({ onClose }) => (
  <div className="flex justify-end gap-4 p-6 border-t border-base-200">
    <button
      onClick={onClose}
      className="btn btn-outline border-primary !text-blue-600 btn-md rounded-lg font-normal w-48"
    >
      بستن
    </button>
  </div>
);

export default ModalFooter;

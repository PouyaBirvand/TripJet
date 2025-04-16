'use client';
import { Users, UserPlus, AlertCircle } from 'lucide-react';
import ChildPassengerForm from './ChildPassengerForm';

const ChildPassengerSection = ({
  children,
  pushChild,
  removeChild,
  childInitialValues,
}) => {
  return (
    <div className="mt-12 space-y-8">
      <h3 className="font-semibold text-lg flex items-center gap-2 mb-6">
        <div className="bg-amber-100 rounded-full p-2">
          <Users className="text-amber-600" size={20} />
        </div>
        اطلاعات کودکان
      </h3>

      {children.length === 0 ? (
        <EmptyChildPassengerSection pushChild={pushChild} childInitialValues={childInitialValues} />
      ) : (
        <>
          {children.map((child, index) => (
            <ChildPassengerForm
              key={index}
              child={child}
              index={index}
              removeChild={removeChild}
            />
          ))}

          <button
            type="button"
            className="flex items-center justify-center w-full border-2 border-dashed border-amber-300 text-amber-600 py-3 rounded-lg hover:bg-amber-50 transition-all mt-4 gap-2"
            onClick={() => pushChild(childInitialValues)}
          >
            <UserPlus size={18} />
            افزودن کودک دیگر
          </button>
        </>
      )}
    </div>
  );
};

const EmptyChildPassengerSection = ({ pushChild, childInitialValues }) => (
  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center">
    <div className="text-gray-400 mb-4">
      <AlertCircle size={40} />
    </div>
    <p className="text-gray-500 mb-4 text-center">
      هنوز کودکی به لیست مسافران اضافه نشده است
    </p>
    <button
      type="button"
      className="flex items-center text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all px-4 py-2 rounded-md"
      onClick={() => pushChild(childInitialValues)}
    >
      <UserPlus size={16} className="ml-1" />
      افزودن کودک
    </button>
  </div>
);

export default ChildPassengerSection;

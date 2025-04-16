'use client';
import { Users, UserCheck, UserPlus } from 'lucide-react';
import { adultInitialValues } from '../../../lib/constants/PassengerForm';
import AdultPassengerForm from './AdultPassengerForm';

const AdultPassengerSection = ({
  children,
  pushAdult,
  removeAdult,
  setFieldValue,
  showPassengerModal,
  setShowPassengerModal,
  isLoading,
}) => {
  const setAsLeader = (index) => {
    const updatedAdults = children.map((adult, i) => ({
      ...adult,
      isLeader: i === index,
    }));
    setFieldValue('adults', updatedAdults);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <div className="bg-blue-100 rounded-full p-2">
            <Users className="text-blue-600" size={20} />
          </div>
          اطلاعات بزرگسالان
        </h3>
        <button
          className={`btn transition-all duration-300 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white px-4 py-2 flex items-center gap-2 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="button"
          onClick={() => setShowPassengerModal(true)}
          disabled={isLoading}
        >
          <UserCheck size={18} />
          {isLoading ? 'در حال دریافت اطلاعات...' : 'انتخاب مسافران سابق'}
        </button>
      </div>

      {children.map((adult, index) => (
        <AdultPassengerForm
          key={index}
          adult={adult}
          index={index}
          setAsLeader={setAsLeader}
          removeAdult={removeAdult}
        />
      ))}

      <button
        type="button"
        className="flex items-center justify-center w-full border-2 border-dashed border-blue-300 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition-all mt-4 gap-2"
        onClick={() => pushAdult({ ...adultInitialValues, isLeader: children.length === 0 })}
      >
        <UserPlus size={18} />
        افزودن بزرگسال
      </button>
    </div>
  );
};

export default AdultPassengerSection;

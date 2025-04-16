'use client';
import { Users, Trash2 } from 'lucide-react';
import CustomFormField from '../../../components/common/CustomFormField';

const ChildPassengerForm = ({ child, index, removeChild }) => (
  <div className="space-y-6 border border-gray-200 rounded-lg p-6 transition-all duration-300">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full">
        <Users size={18} />
        <span className="font-medium">کودک {index + 1}</span>
      </div>
      <button
        type="button"
        className="flex items-center text-red-500 text-sm hover:bg-red-50 px-2 py-1 rounded-md transition-all"
        onClick={() => removeChild(index)}
      >
        <Trash2 size={16} className="ml-1" />
        حذف کودک
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CustomFormField
        name={`children[${index}].fullName`}
        label="نام و نام خانوادگی"
        placeholder="مثال: سارا محمدی"
      />
      <CustomFormField
        name={`children[${index}].nationality`}
        label="تابعیت"
        type="select"
        options={[
          { value: 'ایران', label: 'ایران' },
          { value: 'سایر', label: 'سایر کشورها' },
        ]}
      />
    </div>
    <CustomFormField
      name={`children[${index}].birthDate`}
      label="تاریخ تولد"
      dateFormat={true}
      convertToFarsi={true}
    />
  </div>
);

export default ChildPassengerForm;

'use client';
import { Users, UserCheck, Trash2 } from 'lucide-react';
import CustomFormField from '../../../components/common/CustomFormField';

const AdultPassengerForm = ({ adult, index, setAsLeader, removeAdult }) => (
  <div className="space-y-6 border border-gray-200 rounded-lg p-6 transition-all duration-300">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
      <div className="flex items-center gap-2">
        {adult.isLeader ? (
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
            <UserCheck size={18} />
            <span className="font-medium">سرپرست گروه</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            <Users size={18} />
            <span className="font-medium">بزرگسال {index + 1}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 self-end sm:self-auto">
        {!adult.isLeader && (
          <button
            type="button"
            className="text-blue-600 text-sm flex items-center gap-1 hover:bg-blue-50 px-2 py-1 rounded-md transition-all"
            onClick={() => setAsLeader(index)}
          >
            <UserCheck size={16} />
            تعیین به عنوان سرپرست
          </button>
        )}
        {index > 0 && (
          <button
            type="button"
            className="flex items-center text-red-500 text-sm hover:bg-red-50 px-2 py-1 rounded-md transition-all"
            onClick={() => removeAdult(index)}
          >
            <Trash2 size={16} className="ml-1" />
            حذف
          </button>
        )}
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CustomFormField
        name={`adults[${index}].fullName`}
        label="نام و نام خانوادگی"
        placeholder="مثال: علی محمدی"
      />
      <CustomFormField
        name={`adults[${index}].gender`}
        label="جنسیت"
        type="select"
        options={[
          { value: 'مرد', label: 'مرد' },
          { value: 'زن', label: 'زن' },
        ]}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CustomFormField
        name={`adults[${index}].nationality`}
        label="تابعیت"
        type="select"
        options={[
          { value: 'ایران', label: 'ایران' },
          { value: 'سایر', label: 'سایر کشورها' },
        ]}
      />
      <CustomFormField
        name={`adults[${index}].birthDate`}
        label="تاریخ تولد"
        dateFormat={true}
        convertToFarsi={true}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CustomFormField
        name={`adults[${index}].nationalId`}
        label="کد ملی"
        placeholder="مثال: 1234567890"
        maxLength={10}
        digitsOnly={true}
        convertToFarsi={true}
      />
      <CustomFormField
        name={`adults[${index}].passportNumber`}
        label="شماره پاسپورت"
        placeholder="مثال: A12345678"
      />
    </div>
    <CustomFormField
      name={`adults[${index}].passportExpiry`}
      label="تاریخ انقضای پاسپورت"
      dateFormat={true}
      convertToFarsi={true}
    />
  </div>
);

export default AdultPassengerForm;

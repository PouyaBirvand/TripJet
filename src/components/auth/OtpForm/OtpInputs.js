'use client';

import { Field, useFormikContext } from 'formik';

import { toEnglishNumber } from '../../../lib/utils/numbers';

// این کامپوننت برای مدیریت بهتر فیلدهای OTP استفاده می‌شود
const OtpInputs = ({ inputRefs }) => {
  const formik = useFormikContext();

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const fieldName = `digit${index + 1}`;

    // تبدیل اعداد فارسی به انگلیسی
    const englishValue = toEnglishNumber(value);

    // فقط اعداد مجاز هستند
    if (!/^\d*$/.test(englishValue)) return;

    // به‌روزرسانی مقدار در فرمیک
    formik.setFieldValue(fieldName, englishValue.slice(0, 1));

    // انتقال به فیلد بعدی اگر مقدار وارد شده است
    if (englishValue && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // انتقال به فیلد قبلی با کلید Backspace اگر فیلد فعلی خالی است
    if (e.key === 'Backspace' && !formik.values[`digit${index + 1}`] && index > 0) {
      inputRefs[index - 1].current.focus();
      // پاک کردن مقدار فیلد قبلی
      formik.setFieldValue(`digit${index}`, '');
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    const pastedData = toEnglishNumber(e.clipboardData.getData('text/plain').trim());

    // بررسی اینکه آیا محتوای کپی شده یک عدد 4 رقمی است
    if (/^\d{4}$/.test(pastedData)) {
      // پر کردن همه فیلدها
      for (let i = 0; i < 4; i++) {
        formik.setFieldValue(`digit${i + 1}`, pastedData[i]);
      }
      // تمرکز روی آخرین فیلد
      inputRefs[3].current.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3 w-full">
      {[0, 1, 2, 3].map(index => (
        <div key={index} className="w-14 h-14 relative">
          <Field
            name={`digit${index + 1}`}
            innerRef={inputRefs[index]}
            type="text"
            maxLength="1"
            className={`w-full h-full text-center text-xl font-bold rounded-lg border 
              ${
                formik.errors[`digit${index + 1}`] && formik.touched[`digit${index + 1}`]
                  ? 'border-error focus:border-error'
                  : 'border-base-300 focus:border-primary'
              } 
  border-slate-300
              focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
            onChange={e => handleInputChange(e, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onPaste={index === 0 ? handlePaste : undefined}
            inputMode="numeric"
            autoComplete="one-time-code"
          />
        </div>
      ))}
    </div>
  );
};

export default OtpInputs;






// T_T Fuck </3
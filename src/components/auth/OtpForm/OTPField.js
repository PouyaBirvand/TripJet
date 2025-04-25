'use client';
import { Field, useFormikContext } from 'formik';
import { toEnglishNumber } from '../../../lib/utils/numbers';
import { useEffect } from 'react';

const OTPField = ({ inputRefs, length = 4 }) => {
  const formik = useFormikContext();

  // Auto-focus first input on mount
  useEffect(() => {
    if (inputRefs[0]?.current) {
      inputRefs[0].current.focus();
    }
  }, []);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    const fieldName = `digit${index + 1}`;
    const englishValue = toEnglishNumber(value);

    if (!/^\d*$/.test(englishValue)) return;

    formik.setFieldValue(fieldName, englishValue.slice(0, 1));

    // Move to next field if value entered
    if (englishValue && index < length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !formik.values[`digit${index + 1}`] && index > 0) {
      inputRefs[index - 1].current.focus();
      formik.setFieldValue(`digit${index}`, '');
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = toEnglishNumber(e.clipboardData.getData('text/plain').trim());

    if (new RegExp(`^\\d{${length}}$`).test(pastedData)) {
      for (let i = 0; i < length; i++) {
        formik.setFieldValue(`digit${i + 1}`, pastedData[i]);
      }
      inputRefs[length - 1].current.focus();
    }
  };

  return (
    <div className="flex justify-center gap-2 sm:gap-3 w-full">
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="w-14 h-14 sm:w-16 sm:h-16 relative">
          <Field
            name={`digit${index + 1}`}
            innerRef={inputRefs[index]}
            type="text"
            maxLength="1"
            className={`w-full h-full text-center text-2xl font-bold rounded-lg border-2
              ${
                formik.errors[`digit${index + 1}`] && formik.touched[`digit${index + 1}`]
                  ? 'border-error focus:border-error'
                  : 'border-gray-300 focus:border-blue-500'
              } 
              bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all`}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={index === 0 ? handlePaste : undefined}
            inputMode="numeric"
            autoComplete="one-time-code"
            aria-label={`Digit ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default OTPField;
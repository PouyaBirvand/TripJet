'use client';

import { useState, useRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Field, ErrorMessage } from 'formik';

const PasswordField = ({ name, label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // Maintain focus after toggling visibility
    if (inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 0);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-base-content mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <Field
          id={name}
          name={name}
          innerRef={inputRef}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="w-full px-4 py-3 text-base rounded-lg border border-base-300 focus:border-primary
            bg-base-200 dark:bg-base-100
            focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
          aria-label={showPassword ? "پنهان کردن رمز عبور" : "نمایش رمز عبور"}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      <ErrorMessage name={name}>
        {msg => <div className="text-error text-sm mt-1">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

export default PasswordField;
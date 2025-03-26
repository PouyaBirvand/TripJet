"use client";

import { useRef, useState } from 'react';
import { CheckCircle, CircleAlert, XCircle } from 'lucide-react';
import { useField } from 'formik';
import { PATTERNS } from '../../../../lib/constants/regex';
import { toEnglishNumber, toFarsiNumber } from '../../../../lib/utils/numbers';

const PhoneInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const { value } = field;
  const { error, touched } = meta;
  
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState(value ? toFarsiNumber(value) : '');
  const inputRef = useRef(null);
  
  const handleChange = (e) => {
    let inputValue = e.target.value;
    
    // Convert to English for validation
    const englishValue = toEnglishNumber(inputValue);
    
    // Only accept digits and limit to 10 characters
    if (englishValue === '' || (PATTERNS.DIGITS_ONLY.test(englishValue) && englishValue.length <= 10)) {
      // Store the English value in Formik
      setValue(englishValue);
      // Display Farsi numbers to the user
      setDisplayValue(toFarsiNumber(englishValue));
    }
  };
  
  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // اضافه کردن تابع برای پاک کردن شماره تلفن
  const handleClearInput = (e) => {
    e.stopPropagation(); // جلوگیری از انتقال رویداد به container
    setValue('');
    setDisplayValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const getBorderColorClass = () => {
    if (error && touched && !isFocused) return 'border-error';
    if (!error && value && value.length === 10) return 'border-success';
    if (isFocused) return 'border-primary';
    return 'border-base-300 dark:border-base-content/20';
  };

  const getColorClass = () => {
    if (error && touched && !isFocused) return 'text-error';
    if (!error && value && value.length === 10) return 'text-success';
    if (isFocused) return 'text-primary';
    return 'text-base-content/50';
  };
  
  return (
    <div className="w-full">
      <div className="relative">
        <label 
          className="absolute right-3 -top-2.5 bg-base-100 dark:bg-base-300 px-2 text-sm font-medium text-base-content/80"
          htmlFor={`phone-input-${name}`}
        >
          شماره موبایل
        </label>
        
        <div 
          className={`flex items-center border ${getBorderColorClass()} rounded-lg transition-all duration-200 ${isFocused ? 'shadow-sm' : ''}`}
          onClick={handleContainerClick}
        >
          {/* دکمه X برای پاک کردن شماره تلفن */}
          {value && value.length > 0 && (
            <div 
              className="absolute right-3 cursor-pointer hover:opacity-70 transition-opacity z-10"
              onClick={handleClearInput}
              title="پاک کردن شماره"
            >
              <XCircle size={18} className={getColorClass()} />
            </div>
          )}
          
          <div className="flex-1 py-3 relative">
            <input
              id={`phone-input-${name}`}
              ref={inputRef}
              type="text"
              {...field}
              value={displayValue}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                setIsFocused(false);
                setTouched(true);
              }}
              placeholder="۹۱۲۳۴۵۶۷۸۹"
              className="w-full bg-transparent outline-none text-left text-base-content placeholder-base-content/40 pr-8"
              inputMode="numeric"
              autoComplete="tel-national"
              {...props}
            />
          </div>
          
          <div className="flex items-center px-3 border-l border-base-300 dark:border-base-content/20">
            <span className="text-base-content/70 whitespace-nowrap">| +۹۸</span>
          </div>
          
          {value && value.length === 10 && !error && (
            <div className="absolute left-12">
              <CheckCircle size='18' stroke='1' className="text-success" />
            </div>
          )}
        </div>
      </div>
      
      {error && touched && !isFocused && (
        <p className="text-error text-sm mt-2 flex items-center gap-1.5 animate-fade-in">
          <CircleAlert size={14}/>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default PhoneInput;
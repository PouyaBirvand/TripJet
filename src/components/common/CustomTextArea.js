'use client';
import { useRef, useState } from 'react';
import { CheckCircle, CircleAlert, XCircle } from 'lucide-react';
import { useField } from 'formik';

const CustomTextArea = ({
  name,
  label,
  placeholder,
  rows = 6,
  maxLength,
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const { value } = field;
  const { error, touched } = meta;
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef(null);

  const handleChange = e => {
    const inputValue = e.target.value;
    if (!maxLength || inputValue.length <= maxLength) {
      setValue(inputValue);
    }
  };

  const handleContainerClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleClearInput = e => {
    e.stopPropagation();
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const getBorderColorClass = () => {
    if (error && touched && !isFocused) return 'border-error';
    if (!error && value && value.length > 0) return 'border-success';
    if (isFocused) return 'border-primary';
    return 'border-base-300 dark:border-base-content/20';
  };

  const getColorClass = () => {
    if (error && touched && !isFocused) return 'text-error';
    if (!error && value && value.length > 0) return 'text-success';
    if (isFocused) return '!text-blue-600';
    return 'text-base-content/50';
  };

  return (
    <div className="w-full">
      <div className="relative">
        {label && (
          <label
            className="absolute right-3 z-[10] -top-2.5 bg-base-100 dark:bg-base-300 px-2 text-sm font-medium text-base-content/80"
            htmlFor={`textarea-${name}`}
          >
            {label}
          </label>
        )}
        <div
          className={`flex items-start border ${getBorderColorClass()} rounded-lg transition-all duration-200 ${isFocused ? 'shadow-sm' : ''}`}
          onClick={handleContainerClick}
        >
          <textarea
            id={`textarea-${name}`}
            ref={textareaRef}
            {...field}
            value={value || ''}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setTouched(true);
            }}
            placeholder={placeholder}
            rows={rows}
            className="w-full bg-transparent outline-none text-right text-base-content placeholder-base-content/40 p-3 resize-none"
            dir="rtl"
            {...props}
          />
          
          {value && value.length > 0 && (
            <div
              className="absolute left-3 top-3 cursor-pointer hover:opacity-70 transition-opacity z-10"
              onClick={handleClearInput}
              title="پاک کردن"
            >
              <XCircle size={18} className={getColorClass()} />
            </div>
          )}
          
          {value && value.length > 0 && !error && (
            <div className="absolute left-3 bottom-3">
              <CheckCircle size="18" stroke="1" className="text-success" />
            </div>
          )}
        </div>
      </div>
      {error && touched && !isFocused && (
        <p className="text-error text-sm mt-2 flex items-center gap-1.5 animate-fade-in">
          <CircleAlert size={14} />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

export default CustomTextArea;

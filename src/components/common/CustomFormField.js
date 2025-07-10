'use client';

import { useRef, useState, useEffect } from 'react';
import { CheckCircle, CircleAlert, XCircle, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { useField } from 'formik';
import { PATTERNS } from '../../lib/constants/regex';
import { toEnglishNumber, toFarsiNumber } from '../../lib/utils/numbers';

const YEARS = Array.from({ length: 100 }, (_, i) => 1300 + i);
const MONTHS = [
  { value: 1, label: 'فروردین' },
  { value: 2, label: 'اردیبهشت' },
  { value: 3, label: 'خرداد' },
  { value: 4, label: 'تیر' },
  { value: 5, label: 'مرداد' },
  { value: 6, label: 'شهریور' },
  { value: 7, label: 'مهر' },
  { value: 8, label: 'آبان' },
  { value: 9, label: 'آذر' },
  { value: 10, label: 'دی' },
  { value: 11, label: 'بهمن' },
  { value: 12, label: 'اسفند' },
];

const getDaysInMonth = (year, month) => {
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
  if ([4, 6, 9, 11].includes(month)) return 30;
  if (month === 2) {
    return (year % 4 === 3 && year % 100 !== 3) || year % 400 === 3 ? 29 : 28;
  }
  return 30;
};

const CustomFormField = ({
  name,
  label,
  placeholder,
  type = 'text',
  inputMode = 'text',
  maxLength,
  showPrefix = false,
  prefix = '',
  convertToFarsi = false,
  digitsOnly = false,
  autoComplete,
  options = [],
  masked = false,
  dateFormat = false,
  textAlign = 'right',
  ...props
}) => {
  const [field, meta, helpers] = useField(name);
  const { setValue, setTouched } = helpers;
  const { value } = field;
  const { error, touched } = meta;

  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState(
    value && convertToFarsi ? toFarsiNumber(value) : value || ''
  );
  const [showPassword, setShowPassword] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [daysInMonth, setDaysInMonth] = useState(31);

  const [isDayDropdownOpen, setIsDayDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (dateFormat && selectedYear && selectedMonth) {
      setDaysInMonth(getDaysInMonth(parseInt(selectedYear), parseInt(selectedMonth)));
    }
  }, [selectedYear, selectedMonth, dateFormat]);

  useEffect(() => {
    if (dateFormat && value) {
      const parts = value.split('/');
      if (parts.length === 3) {
        setSelectedYear(parts[0]);
        setSelectedMonth(parts[1]);
        setSelectedDay(parts[2]);
      }
    }
  }, [dateFormat, value]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsDayDropdownOpen(false);
        setIsMonthDropdownOpen(false);
        setIsYearDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const datePickerRef = useRef(null);

  const handleChange = e => {
    let inputValue = e.target.value;

    if (convertToFarsi) {
      const englishValue = toEnglishNumber(inputValue);

      if (
        englishValue === '' ||
        ((!digitsOnly || PATTERNS.DIGITS_ONLY.test(englishValue)) &&
          (!maxLength || englishValue.length <= maxLength))
      ) {
        setValue(englishValue);
        setDisplayValue(toFarsiNumber(englishValue));
      }
    } else {
      if (!maxLength || inputValue.length <= maxLength) {
        if (!digitsOnly || PATTERNS.DIGITS_ONLY.test(inputValue)) {
          setValue(inputValue);
          setDisplayValue(inputValue);
        }
      }
    }
  };

  const handleContainerClick = () => {
    if (type === 'select') {
      setIsDropdownOpen(!isDropdownOpen);
    } else if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleClearInput = e => {
    e.stopPropagation();
    setValue('');
    setDisplayValue('');
    if (dateFormat) {
      setSelectedYear('');
      setSelectedMonth('');
      setSelectedDay('');
    }
    if (inputRef.current && type !== 'select' && !dateFormat) {
      inputRef.current.focus();
    }
  };

  const togglePasswordVisibility = e => {
    e.stopPropagation();
    setShowPassword(!showPassword);
  };

  const handleSelectOption = option => {
    setValue(option.value);
    setDisplayValue(option.label);
    setIsDropdownOpen(false);
    setTouched(true);
  };
  const handleDateChange = (part, value) => {
    let newYear = selectedYear;
    let newMonth = selectedMonth;
    let newDay = selectedDay;

    if (part === 'year') newYear = value;
    if (part === 'month') newMonth = value;
    if (part === 'day') newDay = value;

    if (newYear && newMonth && newDay) {
      const formattedDate = `${newYear}/${newMonth.padStart(2, '0')}/${newDay.padStart(2, '0')}`;
      setValue(formattedDate);
    }

    if (part === 'year') setSelectedYear(value);
    if (part === 'month') setSelectedMonth(value);
    if (part === 'day') setSelectedDay(value);

    setTouched(true);
  };

  const getBorderColorClass = () => {
    if (error && touched && !isFocused) return 'border-error';
    if (!error && value && value.length > 0) return 'border-success';
    if (isFocused) return 'border-primary';
    return 'border-slate-300';
  };

  const getColorClass = () => {
    if (error && touched && !isFocused) return 'text-error';
    if (!error && value && value.length > 0) return 'text-success';
    if (isFocused) return '!text-blue-600';
    return 'text-base-content/50';
  };

  const actualType = (type === 'password' || masked) && !showPassword ? 'password' : type;

  const renderField = () => {
    // برای سلکت
    if (type === 'select') {
      return (
        <div className="relative w-full" ref={dropdownRef}>
          <div
            className={`flex items-center justify-between w-full py-3 px-3  cursor-pointer ${value ? 'text-base-content' : 'text-base-content/40'}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {displayValue || placeholder}
            <ChevronDown
              size={22}
              strokeWidth={1.5}
              className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </div>

          {isDropdownOpen && (
            <div className="absolute z-20 w-full mt-1 bg-base-100 border border-base-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {options.map(option => (
                <div
                  key={option.value}
                  className={`px-4 py-2 cursor-pointer hover:bg-base-200 ${value === option.value ? 'text-white bg-blue-600 hover:text-blue-600 transition-all duration-200 hover:bg-white' : ''}`}
                  onClick={() => handleSelectOption(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (dateFormat) {
      return (
        <div className="grid grid-cols-3 gap-2 w-full" ref={datePickerRef}>
          <div className="relative">
            <div className="relative">
              <div
                className="flex items-center justify-between w-full border-none outline-none py-3 px-3 cursor-pointer border border-base-300 rounded-md bg-base-100"
                onClick={() => {
                  setIsYearDropdownOpen(false);
                  setIsMonthDropdownOpen(false);
                  setIsDayDropdownOpen(!isDayDropdownOpen);
                }}
              >
                <span className={selectedDay ? 'text-base-content' : 'text-base-content/40'}>
                  {selectedDay
                    ? convertToFarsi
                      ? toFarsiNumber(selectedDay)
                      : selectedDay
                    : 'روز'}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isDayDropdownOpen ? 'rotate-180' : ''}`}
                />
              </div>

              {isDayDropdownOpen && (
                <div className="absolute z-30 w-full mt-1 bg-base-100 border border-base-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => (
                    <div
                      key={day}
                      className={`px-4 py-2 cursor-pointer hover:bg-base-200 text-center ${selectedDay === day.toString().padStart(2, '0') ? 'bg-blue-600 text-white/10 !text-blue-600' : ''}`}
                      onClick={() => {
                        handleDateChange('day', day.toString().padStart(2, '0'));
                        setIsDayDropdownOpen(false);
                      }}
                    >
                      {convertToFarsi ? toFarsiNumber(day) : day}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div
                className="flex items-center justify-between w-full border-none outline-none py-3 px-3 cursor-pointer border border-base-300 rounded-md bg-base-100"
                onClick={() => {
                  setIsYearDropdownOpen(false);
                  setIsDayDropdownOpen(false);
                  setIsMonthDropdownOpen(!isMonthDropdownOpen);
                }}
              >
                <span className={selectedMonth ? 'text-base-content' : 'text-base-content/40'}>
                  {selectedMonth
                    ? MONTHS.find(m => m.value.toString().padStart(2, '0') === selectedMonth)?.label
                    : 'ماه'}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isMonthDropdownOpen ? 'rotate-180' : ''}`}
                />
              </div>

              {isMonthDropdownOpen && (
                <div className="absolute z-30 w-full mt-1 bg-base-100 border border-base-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {MONTHS.map(month => (
                    <div
                      key={month.value}
                      className={`px-4 py-2 cursor-pointer hover:bg-base-200 text-center ${selectedMonth === month.value.toString().padStart(2, '0') ? 'bg-blue-600 text-white/10 !text-blue-600' : ''}`}
                      onClick={() => {
                        handleDateChange('month', month.value.toString().padStart(2, '0'));
                        setIsMonthDropdownOpen(false);
                      }}
                    >
                      {month.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div
                className="flex items-center justify-between w-full border-none outline-none py-3 px-3 cursor-pointer border border-base-300 rounded-md bg-base-100"
                onClick={() => {
                  setIsMonthDropdownOpen(false);
                  setIsDayDropdownOpen(false);
                  setIsYearDropdownOpen(!isYearDropdownOpen);
                }}
              >
                <span className={selectedYear ? 'text-base-content' : 'text-base-content/40'}>
                  {selectedYear
                    ? convertToFarsi
                      ? toFarsiNumber(selectedYear)
                      : selectedYear
                    : 'سال'}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isYearDropdownOpen ? 'rotate-180' : ''}`}
                />
              </div>

              {isYearDropdownOpen && (
                <div className="absolute z-30 w-full mt-1 bg-base-100 border border-base-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {YEARS.map(year => (
                    <div
                      key={year}
                      className={`px-4 py-2 cursor-pointer hover:bg-base-200 text-center ${selectedYear === year.toString() ? 'bg-blue-600 text-white/10 !text-blue-600' : ''}`}
                      onClick={() => {
                        handleDateChange('year', year.toString());
                        setIsYearDropdownOpen(false);
                      }}
                    >
                      {convertToFarsi ? toFarsiNumber(year) : year}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex-1 py-3 relative">
        <input
          id={`input-${name}`}
          ref={inputRef}
          type={actualType}
          {...field}
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            setTouched(true);
          }}
          placeholder={placeholder}
          className={`w-full bg-transparent outline-none text-${textAlign} text-base-content placeholder-base-content/40 ${value && value.length > 0 ? 'pr-8' : 'pr-3'}`}
          inputMode={inputMode}
          autoComplete={autoComplete}
          dir={textAlign === 'right' ? 'rtl' : 'ltr'}
          {...props}
        />
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="relative">
        {label && (
          <label
            className="absolute right-3 z-[10] -top-2.5 bg-base-100 dark:bg-base-300 px-2 text-sm font-medium text-base-content/80"
            htmlFor={`input-${name}`}
          >
            {label}
          </label>
        )}

        <div
          className={`flex items-center border ${getBorderColorClass()} rounded-lg transition-all duration-200 ${isFocused ? 'shadow-sm' : ''}`}
          onClick={handleContainerClick}
        >
          {type === 'select' && value && value.length > 0 && (
            <div
              className="absolute left-9 cursor-pointer hover:opacity-70 transition-opacity z-10"
              onClick={handleClearInput}
              title="پاک کردن"
            >
              <XCircle size={18} className={getColorClass()} />
            </div>
          )}

          {renderField()}

          {(type === 'password' || masked) && (
            <div
              className="px-3 cursor-pointer"
              onClick={togglePasswordVisibility}
              title={showPassword ? 'مخفی کردن' : 'نمایش'}
            >
              {showPassword ? (
                <EyeOff size={18} className="text-base-content/70" />
              ) : (
                <Eye size={18} className="text-base-content/70" />
              )}
            </div>
          )}

          {showPrefix && prefix && !dateFormat && (
            <div className="flex items-center px-3 border-l border-base-300 dark:border-base-content/20">
              <span className="text-base-content/70 whitespace-nowrap">{prefix}</span>
            </div>
          )}

          {value && value.length > 0 && !error && !dateFormat && (
            <div className="absolute left-3">
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

export default CustomFormField;

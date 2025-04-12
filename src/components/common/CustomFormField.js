'use client';

import { useRef, useState, useEffect } from 'react';
import { CheckCircle, CircleAlert, XCircle, Eye, EyeOff, ChevronDown } from 'lucide-react';
import { useField } from 'formik';
import { PATTERNS } from '../../lib/constants/regex';
import { toEnglishNumber, toFarsiNumber } from '../../lib/utils/numbers';

// آرایه‌های مورد نیاز برای تاریخ تولد
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

// تابع کمکی برای محاسبه تعداد روزهای ماه
const getDaysInMonth = (year, month) => {
  // ماه‌های 31 روزه: 1, 3, 5, 7, 8, 10, 12
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) return 31;
  // ماه‌های 30 روزه: 4, 6, 9, 11
  if ([4, 6, 9, 11].includes(month)) return 30;
  // اسفند: 29 روز در سال کبیسه، 28 روز در سال عادی
  // محاسبه ساده سال کبیسه در تقویم شمسی
  if (month === 2) {
    return (year % 4 === 3 && year % 100 !== 3) || year % 400 === 3 ? 29 : 28;
  }
  return 30; // حالت پیش‌فرض
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
  options = [], // برای سلکت
  masked = false, // برای مخفی کردن مقادیر حساس مثل کد ملی
  dateFormat = false, // برای تاریخ تولد
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

  // برای تاریخ تولد
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [daysInMonth, setDaysInMonth] = useState(31);

  const [isDayDropdownOpen, setIsDayDropdownOpen] = useState(false);
  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // برای بستن دراپ‌داون وقتی خارج از آن کلیک می‌شود
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

  // برای تاریخ تولد: به‌روزرسانی روزها بر اساس سال و ماه انتخاب شده
  useEffect(() => {
    if (dateFormat && selectedYear && selectedMonth) {
      setDaysInMonth(getDaysInMonth(parseInt(selectedYear), parseInt(selectedMonth)));
    }
  }, [selectedYear, selectedMonth, dateFormat]);

  // برای تاریخ تولد: تنظیم مقادیر اولیه
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

    // اگر تبدیل به فارسی فعال است
    if (convertToFarsi) {
      // تبدیل به انگلیسی برای اعتبارسنجی
      const englishValue = toEnglishNumber(inputValue);

      // اعمال محدودیت‌ها
      if (
        englishValue === '' ||
        ((!digitsOnly || PATTERNS.DIGITS_ONLY.test(englishValue)) &&
          (!maxLength || englishValue.length <= maxLength))
      ) {
        // ذخیره مقدار انگلیسی در فرمیک
        setValue(englishValue);
        // نمایش اعداد فارسی به کاربر
        setDisplayValue(toFarsiNumber(englishValue));
      }
    } else {
      // برای سایر انواع ورودی
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
  // برای تاریخ تولد
  const handleDateChange = (part, value) => {
    let newYear = selectedYear;
    let newMonth = selectedMonth;
    let newDay = selectedDay;

    if (part === 'year') newYear = value;
    if (part === 'month') newMonth = value;
    if (part === 'day') newDay = value;

    // اگر همه قسمت‌ها انتخاب شده‌اند، مقدار را در فرمیک ذخیره کنید
    if (newYear && newMonth && newDay) {
      const formattedDate = `${newYear}/${newMonth.padStart(2, '0')}/${newDay.padStart(2, '0')}`;
      setValue(formattedDate);
    }

    // بروزرسانی state‌های مربوطه
    if (part === 'year') setSelectedYear(value);
    if (part === 'month') setSelectedMonth(value);
    if (part === 'day') setSelectedDay(value);

    setTouched(true);
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

  // تعیین نوع ورودی واقعی (برای رمز عبور و کد ملی)
  const actualType = (type === 'password' || masked) && !showPassword ? 'password' : type;

  // رندر کردن فیلد مناسب بر اساس نوع
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

    // برای تاریخ تولد
    // بخش مربوط به تاریخ تولد در تابع renderField را با این کد جایگزین کنید

    if (dateFormat) {
      return (
        <div className="grid grid-cols-3 gap-2 w-full" ref={datePickerRef}>
          {/* سلکت روز */}
          <div className="relative">
            <div className="relative">
              <div
                className="flex items-center justify-between w-full border-none outline-none py-3 px-3 cursor-pointer border border-base-300 rounded-md bg-base-100"
                onClick={() => {
                  // بستن سایر دراپ‌داون‌ها
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

          {/* سلکت ماه */}
          <div className="relative">
            <div className="relative">
              <div
                className="flex items-center justify-between w-full border-none outline-none py-3 px-3 cursor-pointer border border-base-300 rounded-md bg-base-100"
                onClick={() => {
                  // بستن سایر دراپ‌داون‌ها
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

          {/* سلکت سال */}
          <div className="relative">
            <div className="relative">
              <div
                className="flex items-center justify-between w-full border-none outline-none py-3 px-3 cursor-pointer border border-base-300 rounded-md bg-base-100"
                onClick={() => {
                  // بستن سایر دراپ‌داون‌ها
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

    // برای سایر انواع ورودی (متن، عدد، رمز عبور و...)
    // جایگزین کردن این بخش در تابع renderField برای اینپوت‌های معمولی
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
          {/* دکمه X برای پاک کردن ورودی */}
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

          {/* نمایش آیکون چشم برای رمز عبور یا فیلدهای مخفی */}
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

          {/* نمایش پیشوند (مثل +۹۸) */}
          {showPrefix && prefix && !dateFormat && (
            <div className="flex items-center px-3 border-l border-base-300 dark:border-base-content/20">
              <span className="text-base-content/70 whitespace-nowrap">{prefix}</span>
            </div>
          )}

          {/* نمایش تیک برای ورودی معتبر */}
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

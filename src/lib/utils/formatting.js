import { toEnglishNumber, toFarsiNumber } from "./numbers";

/**
 * Formats a phone number with spaces for better readability
 * @param {string} value - The phone number to format
 * @returns {string} The formatted phone number
 */
export const formatPhoneDisplay = (value) => {
  if (!value) return '';
  const digits = toEnglishNumber(value);
  
  if (digits.length <= 3) {
    return toFarsiNumber(digits);
  } else if (digits.length <= 6) {
    return toFarsiNumber(digits.slice(0, 3) + ' ' + digits.slice(3));
  } else {
    return toFarsiNumber(
      digits.slice(0, 3) + ' ' + 
      digits.slice(3, 6) + ' ' + 
      digits.slice(6)
    );
  }
};


export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${toFarsiNumber(mins.toString().padStart(2, '0'))}:${toFarsiNumber(secs.toString().padStart(2, '0'))}`;
}

export const formatDate = (dateString) => {
  if (!dateString) return '';
  
  // اگر تاریخ به فرمت شمسی باشد (مثلاً 1402/08/15)
  if (dateString.includes('/')) {
    return dateString;
  }
  
  // اگر تاریخ به فرمت میلادی باشد
  try {
    const date = new Date(dateString);
    
    // تبدیل به تاریخ شمسی (این فقط یک مثال ساده است)
    // در پروژه واقعی باید از کتابخانه‌های تبدیل تاریخ مانند moment-jalaali استفاده کنید
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('fa-IR', options).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

// تبدیل تاریخ و زمان به فرمت فارسی
export const formatDateTime = (dateTimeString) => {
  if (!dateTimeString) return '';
  
  try {
    const date = new Date(dateTimeString);
    
    // تبدیل به تاریخ و زمان شمسی
    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    
    const persianDate = new Intl.DateTimeFormat('fa-IR', dateOptions).format(date);
    const persianTime = new Intl.DateTimeFormat('fa-IR', timeOptions).format(date);
    
    return `${persianDate} - ${persianTime}`;
  } catch (error) {
    console.error('Error formatting date time:', error);
    return dateTimeString;
  }
};

// تبدیل تاریخ به فرمت نسبی (مثلاً "۲ روز پیش")
export const formatRelativeTime = (dateString) => {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    // کمتر از یک دقیقه
    if (diffInSeconds < 60) {
      return 'چند لحظه پیش';
    }
    
    // کمتر از یک ساعت
    if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} دقیقه پیش`;
    }
    
    // کمتر از یک روز
    if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} ساعت پیش`;
    }
    
    // کمتر از یک هفته
    if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} روز پیش`;
    }
    
    // کمتر از یک ماه
    if (diffInSeconds < 2592000) {
      const weeks = Math.floor(diffInSeconds / 604800);
      return `${weeks} هفته پیش`;
    }
    
    // کمتر از یک سال
    if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} ماه پیش`;
    }
    
    // بیشتر از یک سال
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years} سال پیش`;
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return dateString;
  }
};

/**
 * Determines the border color based on input state
 * @param {Object} state - The input state
 * @param {boolean} state.isValid - Whether the input is valid
 * @param {boolean} state.isDirty - Whether the input has been modified
 * @param {boolean} state.isFocused - Whether the input is focused
 * @param {string} state.value - The input value
 * @returns {string} The Tailwind CSS class for border color
 */
export const getBorderColorClass = ({ isValid, isDirty, isFocused, value }) => {
  if (!isValid && isDirty && !isFocused) return 'border-red-500';
  if (isValid && value.length === 10) return 'border-green-500';
  if (isFocused) return 'border-blue-500';
  return 'border-gray-300';
};
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
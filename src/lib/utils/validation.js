import { toEnglishNumber } from './numbers';

/**
 * Validates an Iranian mobile phone number
 * @param {string} value - The phone number to validate
 * @returns {boolean} Whether the phone number is valid
 */
export const validateIranianMobile = (value) => {
  if (!value) return false;
  const englishNumber = toEnglishNumber(value);
  const pattern = /^9\d{9}$/;
  return pattern.test(englishNumber);
};
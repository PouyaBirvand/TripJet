import { toEnglishNumber } from '../../../lib/utils/numbers';
import { validateIranianMobile } from '../../../lib/utils/validation';
import * as Yup from 'yup';


export const phoneValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('شماره موبایل الزامی است')
    .test(
      'is-valid-iranian-mobile',
      'لطفاً یک شماره موبایل معتبر وارد کنید',
      function (value) {
        if (!value) return false;
        return validateIranianMobile(value);
      }
    )
    .test(
      'is-10-digits',
      'شماره موبایل باید ۱۰ رقم باشد (بدون صفر ابتدا)',
      function (value) {
        if (!value) return false;
        const englishNumber = toEnglishNumber(value);
        return englishNumber.length === 10;
      }
    ),
});
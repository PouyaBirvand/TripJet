import * as Yup from 'yup';

export const otpValidationSchema = Yup.object().shape({
  digit1: Yup.string().required('کد الزامی است').length(1, 'کد نامعتبر است'),
  digit2: Yup.string().required('کد الزامی است').length(1, 'کد نامعتبر است'),
  digit3: Yup.string().required('کد الزامی است').length(1, 'کد نامعتبر است'),
  digit4: Yup.string().required('کد الزامی است').length(1, 'کد نامعتبر است'),
});
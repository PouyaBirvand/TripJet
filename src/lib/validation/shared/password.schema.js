import * as Yup from 'yup';

export const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .required('رمز عبور الزامی است')
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'رمز عبور باید شامل حروف بزرگ، کوچک و اعداد باشد'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'رمز عبور مطابقت ندارد')
    .required('تکرار رمز عبور الزامی است')
});
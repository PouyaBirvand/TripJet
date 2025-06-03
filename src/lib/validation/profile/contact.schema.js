import * as Yup from 'yup';

export const contactInfoSchema = Yup.object({
  phone: Yup.string()
    .matches(/^[0-9]*$/, 'شماره تلفن ثابت باید فقط شامل اعداد باشد')
    .notRequired(),

  mobile: Yup.string()
    .required('تلفن همراه الزامی است')
    .matches(/^[0-9]{10}$/, 'شماره همراه باید ۱۰ رقم باشد'),

  email: Yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),

  alternateEmail: Yup.string().email('ایمیل جایگزین نامعتبر است').notRequired(),
});

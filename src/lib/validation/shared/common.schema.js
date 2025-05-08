import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
  firstName: Yup.string().required('نام الزامی است'),
  lastName: Yup.string().required('نام خانوادگی الزامی است'),
  email: Yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'شماره همراه باید 10 رقم باشد')
    .required('شماره همراه الزامی است'),
  subject: Yup.string().required('موضوع الزامی است'),
  message: Yup.string()
    .required('متن پیام الزامی است')
    .min(10, 'متن پیام باید حداقل 10 کاراکتر باشد'),
});
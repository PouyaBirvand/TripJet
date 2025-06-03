import * as Yup from 'yup';

export const travelInfoSchema = Yup.object({
  birthDate: Yup.string().required('تاریخ تولد الزامی است'),
  nationalId: Yup.string()
    .required('کد ملی الزامی است')
    .matches(/^[0-9]{10}$/, 'کد ملی باید ۱۰ رقم باشد'),
  passportExpiry: Yup.string(),
  passportNumber: Yup.string(),
});

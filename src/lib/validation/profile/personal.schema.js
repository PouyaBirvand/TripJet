import * as Yup from 'yup';

export const personalInfoSchema = Yup.object({
  firstName: Yup.string().required('نام الزامی است'),
  lastName: Yup.string().required('نام خانوادگی الزامی است'),
  firstNameEn: Yup.string(),
  lastNameEn: Yup.string(),
  gender: Yup.string().required('انتخاب جنسیت الزامی است'),
});

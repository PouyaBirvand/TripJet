import * as Yup from 'yup';

export const tourValidationSchema = Yup.object({
  selectedDate: Yup.string()
    .required('انتخاب تاریخ سفر الزامی است'),
  
  phoneNumber: Yup.string()
    .matches(/^09[0-9]{9}$/, 'شماره تلفن معتبر نیست')
    .required('شماره تماس الزامی است'),
  
  specialRequests: Yup.string()
    .max(500, 'درخواست‌های ویژه نباید بیش از ۵۰۰ کاراکتر باشد')
});

export const tourSearchSchema = Yup.object({
  destination: Yup.string()
    .min(2, 'مقصد باید حداقل ۲ کاراکتر باشد')
    .required('انتخاب مقصد الزامی است'),
  
  startDate: Yup.date()
    .min(new Date(), 'تاریخ شروع نمی‌تواند در گذشته باشد')
    .required('تاریخ شروع الزامی است'),
  
  endDate: Yup.date()
    .min(Yup.ref('startDate'), 'تاریخ پایان باید بعد از تاریخ شروع باشد')
    .required('تاریخ پایان الزامی است'),
  
  travelers: Yup.number()
    .min(1, 'حداقل یک مسافر الزامی است')
    .max(20, 'حداکثر ۲۰ مسافر مجاز است')
    .required('تعداد مسافران الزامی است'),
  
  budget: Yup.object({
    min: Yup.number().min(0, 'حداقل بودجه نمی‌تواند منفی باشد'),
    max: Yup.number().min(Yup.ref('min'), 'حداکثر بودجه باید بیشتر از حداقل باشد')
  })
});

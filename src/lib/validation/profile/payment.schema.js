import * as Yup from 'yup';

export const paymentInfoSchema = Yup.object({
  accountNumber: Yup.string()
    .matches(/^[0-9]+$/, 'فقط عدد مجاز است'),
  sheba: Yup.string()
    .matches(/^IR[0-9]{24}$/, 'شماره شبا نامعتبر است'),
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, 'شماره کارت باید ۱۶ رقم باشد'),
});
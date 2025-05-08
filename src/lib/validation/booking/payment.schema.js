import * as Yup from 'yup';

export const bookingPaymentSchema = Yup.object().shape({
  bank: Yup.string().required('لطفاً بانک مورد نظر خود را انتخاب کنید'),
});
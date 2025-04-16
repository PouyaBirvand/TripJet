'use client';
import { useState } from 'react';
import { BadgeInfo, Check, CreditCard } from 'lucide-react';
import { formatPrice } from '../../../lib/utils/numbers';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomFormField from '../../../components/common/CustomFormField';
import PaymentSuccessModal from './PaymentSuccessModal';
import { useRouter } from 'next/navigation';
import useBankList from '../../../hooks/useBankList';
import usePaymentProcess from '../../../hooks/usePaymentProcess';
import useBookingDetails from '../../../hooks/useBookingDetails';

const paymentSchema = Yup.object().shape({
  bank: Yup.string().required('لطفاً بانک مورد نظر خود را انتخاب کنید'),
});

export default function PaymentConfirmation({ bookingId }) {
  const router = useRouter();
  const { bookingDetails } = useBookingDetails(bookingId);
  const { banks } = useBankList();
  const { processPaymentAsync , isProcessing } = usePaymentProcess();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');

  const totalPrice = bookingDetails?.payment?.totalPrice || 0;
  // const totalPriceUSD = bookingDetails?.payment?.totalPriceUSD || 0;

  const handleSubmit = async (values) => {
    const paymentData = {
      amount: totalPrice,
      currency: 'IRR',
      bank: values.bank,
    };
  
    try {
      const result = await processPaymentAsync(paymentData);
      console.log('Payment result:', result);
      
      if (result?.success) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  const closeModal = () => {
    router.push('/booking/voucher');
    setShowSuccessModal(false);
  };

  const bankOptions = [
    { value: '', label: 'انتخاب بانک' },
    ...banks.map(bank => ({
      value: bank.id,
      label: bank.name,
    })),
  ];

  return (
    <>
      <div className="bg-white rounded-xl border-slate-300 border overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="flex items-center gap-2 font-semibold text-lg">
            <div className="bg-blue-100 p-2 rounded-full">
              <CreditCard size={20} className="text-blue-600" />
            </div>
            نهایی کردن خرید
          </h3>
        </div>
        <Formik
          initialValues={{ bank: selectedBank }}
          validationSchema={paymentSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, values, setFieldValue }) => (
            <Form>
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                  <div className="w-full">
                    <div className="flex items-start gap-2">
                      <BadgeInfo className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-gray-600">
                          با کلیک روی تایید و ادامه خرید با
                          <a href="#" className="text-blue-600 mx-1 hover:underline">
                            قوانین سایت
                          </a>
                          و
                          <a href="#" className="text-blue-600 mx-1 hover:underline">
                            قوانین تور گروهی
                          </a>
                          موافقت کرده‌اید.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 flex flex-col items-center md:items-end gap-3">
                    <div className="text-center md:text-right flex items-center gap-2 text-nowrap">
                      <p className="text-gray-500 mt-1">قیمت کل</p>
                      <h3 className="text-2xl font-bold text-blue-600">
                        {formatPrice(totalPrice)}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-15">
                    <h4 className="text-lg font-medium mb-4">روش پرداخت</h4>
                    <div className="lg:w-2/4">
                      <CustomFormField
                        name="bank"
                        label="پرداخت از بانک‌های عضو شتاب"
                        type="select"
                        options={bankOptions}
                        onChange={e => {
                          setFieldValue('bank', e.target.value);
                          setSelectedBank(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!isValid || !values.bank || isProcessing}
                      className={`flex items-center justify-center gap-2 rounded-lg px-8 py-3 text-white font-medium transition-all
                        ${
                          isValid && values.bank && !isProcessing
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                      <>
                        <Check size={18} />
                        تایید و ادامه خرید
                      </>
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {showSuccessModal && <PaymentSuccessModal onClose={closeModal} />}
    </>
  );
}

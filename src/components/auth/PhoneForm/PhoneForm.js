'use client';
import { useState } from 'react';
import { X } from 'lucide-react';
import { Formik, Form } from 'formik';
import { toEnglishNumber } from '../../../lib/utils/numbers';
import { phoneValidationSchema } from './validation';
import { useModal } from '../../../hooks/useModal';
import { useRouter } from 'next/navigation';
import CustomFormField from '../../common/CustomFormField';
import Cookies from 'js-cookie';

export default function PhoneForm() {
  const { handleClose, isOpen } = useModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mockSendPhoneVerification = async phoneNumber => {
    setIsLoading(true);
    setError(null);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      Cookies.set('phone_number', phoneNumber);
      Cookies.set('phone_verification_token', 'mock-token-123456');

      // Redirect to OTP page
      router.push('/otp');
    } catch (err) {
      setError({ message: 'خطا در ارسال کد تایید. لطفا دوباره تلاش کنید.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Convert phone number to English digits
      const phoneNumber = toEnglishNumber(values.phoneNumber);
      // Call our mock function instead of the real API
      await mockSendPhoneVerification(phoneNumber);
    } catch (error) {
      console.error('Error submitting phone number:', error);
      setError({ message: 'خطا در ارسال کد تایید. لطفا دوباره تلاش کنید.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4 sm:p-6"
      dir="rtl"
    >
      <div className="bg-white rounded-xl animate-slide-up overflow-hidden w-full max-w-[40rem] md:p-15 relative">
        <div className="absolute top-4 sm:top-5 left-4 sm:left-5">
          <button
            onClick={handleClose}
            className="rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-base-content/10 transition-colors p-1 focus-ring border text-slate-400 border-slate-400"
            aria-label="بستن"
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center px-4 sm:px-8 pt-14 sm:pt-16 pb-8 sm:pb-10">
          <h1 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-5 text-center">
            ورود یا ثبت نام
          </h1>
          <p className="text-center text-slate-400 font-light mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
            برای ادامه شماره موبایل خود را وارد کنید.
          </p>

          <Formik
            initialValues={{ phoneNumber: '' }}
            validationSchema={phoneValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty }) => (
              <Form className="w-full max-w-md flex gap-8 flex-col">
                <CustomFormField
                  name="phoneNumber"
                  label="شماره موبایل"
                  placeholder="۹۱۲۳۴۵۶۷۸۹"
                  inputMode="numeric"
                  convertToFarsi={true}
                  digitsOnly={true}
                  maxLength={10}
                  showPrefix={true}
                  prefix="| +۹۸"
                  autoComplete="tel-national"
                  textAlign="left"
                />

                {error && (
                  <div className="text-red-500 text-sm mb-4 text-center">{error.message}</div>
                )}

                <button
                  className="w-full py-2.5 px-4 rounded-lg font-medium text-sm bg-blue-600 text-white hover:bg-blue-700 
  transition-all duration-200 flex items-center justify-center
  disabled:bg-blue-300 disabled:cursor-not-allowed disabled:hover:bg-blue-300
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  type="submit"
                  disabled={isSubmitting || !(isValid && dirty) || isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
                      در حال پردازش...
                    </span>
                  ) : (
                    'تایید و ادامه'
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

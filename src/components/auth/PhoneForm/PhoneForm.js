'use client';

import { X } from 'lucide-react';
import { Formik, Form } from 'formik';
import PhoneInput from './PhoneInput/PhoneInput';
import { toEnglishNumber } from '../../../lib/utils/numbers';
import { phoneValidationSchema } from './validation';
import { useModal } from '../../../hooks/useModal';
import { useRouter } from 'next/navigation';
import { usePhoneAuth } from '../../../hooks/usePhoneAuth';

const PhoneForm = () => {
  const { handleClose, isOpen } = useModal();
  const { sendPhoneVerification , isPhoneVerificationLoading, phoneVerificationError } =
    usePhoneAuth();
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Convert phone number to English digits for API
      const phoneNumber = toEnglishNumber(values.phoneNumber);

      // Call the API through our custom hook
      sendPhoneVerification(phoneNumber);
    } catch (error) {
      console.error('Error submitting phone number:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in">
      <div
        className="w-full max-w-md bg-base-100 dark:bg-base-300 rounded-xl shadow-2xl animate-slide-up overflow-hidden"
        dir="rtl"
      >
        <div className="flex justify-between items-center p-4 border-b border-base-200 dark:border-base-content/10">
          <h3 className="text-lg font-semibold text-base-content">ورود یا ثبت نام</h3>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-base-200 dark:hover:bg-base-content/10 transition-colors focus-ring"
            aria-label="بستن"
          >
            <X className="w-5 h-5 text-base-content/70" />
          </button>
        </div>

        <Formik
          initialValues={{ phoneNumber: '' }}
          validationSchema={phoneValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
            <Form className="flex flex-col p-6 space-y-10">
              <p className="text-base-content/80 text-center">
                برای ادامه شماره موبایل خود را وارد کنید.
              </p>

              <PhoneInput name="phoneNumber" />

              {phoneVerificationError && (
                <div className="text-error text-sm">{phoneVerificationError.message}</div>
              )}

              <button
                className="btn btn-primary w-full py-3 rounded-lg font-medium transition-all hover:shadow-md 
                  disabled:opacity-70 disabled:cursor-not-allowed text-primary-content
                  disabled:text-primary-content/90 disabled:bg-primary/70"
                type="submit"
                disabled={isSubmitting || !(isValid && dirty)}
              >
                {isPhoneVerificationLoading ? (
                  <span className="flex items-center justify-center">
                    <span className="w-5 h-5 border-2 border-primary-content border-t-transparent rounded-full animate-spin mr-2"></span>
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
  );
};

export default PhoneForm;

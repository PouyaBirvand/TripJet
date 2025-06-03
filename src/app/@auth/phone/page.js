'use client';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { toEnglishNumber } from '../../../lib/utils/numbers';
import { useModal } from '../../../hooks/useModal';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { phoneValidationSchema } from '../../../lib/validation';
import CustomFormField from '../../../components/common/CustomFormField';
import { AuthModal } from '../../../components/auth/shared/AuthModal';
import { AuthSubmitButton } from '../../../components/auth/shared/AuthSubmitButton';
import { getPhoneInitialValues } from '../../../lib/formInitialValues';

export default function PhonePage() {
  const { handleClose, isOpen } = useModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mockSendPhoneVerification = async phoneNumber => {
    setIsLoading(true);
    setError(null);

    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      Cookies.set('phone_number', phoneNumber);
      Cookies.set('phone_verification_token', 'mock-token-123456');
      router.push('/otp');
    } catch (err) {
      setError('خطا در ارسال کد تایید. لطفا دوباره تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const phoneNumber = toEnglishNumber(values.phoneNumber);
      await mockSendPhoneVerification(phoneNumber);
    } catch (error) {
      console.error('Error submitting phone number:', error);
      setError('خطا در ارسال کد تایید. لطفا دوباره تلاش کنید.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={handleClose}
      title="ورود یا ثبت نام"
      description="برای ادامه شماره موبایل خود را وارد کنید."
    >
      <Formik
        initialValues={getPhoneInitialValues}
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

            {error && <div className="text-red-500 text-sm mb-4 text-center">{error}</div>}

            <AuthSubmitButton isLoading={isLoading} disabled={isSubmitting || !(isValid && dirty)}>
              تایید و ادامه
            </AuthSubmitButton>
          </Form>
        )}
      </Formik>
    </AuthModal>
  );
}

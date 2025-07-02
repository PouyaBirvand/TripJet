'use client';
import { Form, Formik } from 'formik';
import { useModal } from '../../../hooks/useModal';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../contexts/AuthContext';
import { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { formatTime } from '../../../lib/utils/formatting';
import { otpValidationSchema } from '../../../lib/validation';
import { usePhoneVerification } from '../../../hooks/AuthHooks/usePhoneVerification';
import { AuthModal } from '../../../components/auth/shared/AuthModal';
import { AuthSubmitButton } from '../../../components/auth/shared/AuthSubmitButton';
import OTPField from '../../../components/auth/OTPField';
import { getOtpInitialValues } from '../../../lib/formInitialValues';

export const dynamic = 'force-dynamic';
export default function OtpPage() {
  const { isOpen, handleClose } = useModal();
  const router = useRouter();
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const inputRefs = [inputRef1, inputRef2, inputRef3, inputRef4];

  const {
    verifyOtp,
    isOtpVerificationLoading,
    otpVerificationError,
    sendPhoneVerification,
    getPhoneNumber,
  } = usePhoneVerification();

  const { phoneVerificationToken } = useAuth();
  const verificationToken = phoneVerificationToken || Cookies.get('phone_verification_token');
  const phoneNumber = getPhoneNumber();

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleResendCode = async () => {
    if (!canResend || !phoneNumber) return;
    try {
      await sendPhoneVerification(phoneNumber);
      setTimer(120);
      setCanResend(false);
      if (inputRefs[0]?.current) {
        inputRefs[0].current.focus();
      }
    } catch (error) {
      console.error('Error resending code:', error);
    }
  };

  const handleSubmit = async values => {
    try {
      if (!verificationToken) {
        console.error('No verification token found');
        return;
      }
      const otpCode = Object.values(values).join('');
      await verifyOtp({
        code: otpCode,
        token: verificationToken,
      });
      router.push('/set-password');
    } catch (error) {
      console.error('Error submitting OTP code:', error);
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={handleClose}
      title="کد تایید را وارد کنید"
      description={`کد تایید به شماره ${phoneNumber} ارسال شد.`}
    >
      <Formik
        initialValues={getOtpInitialValues}
        validationSchema={otpValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="w-full max-w-md flex flex-col items-center">
            <div className="w-full flex flex-col items-center space-y-6 mb-6">
              <OTPField inputRefs={inputRefs} />

              {otpVerificationError && (
                <div className="text-red-500 text-sm text-center animate-fade-in">
                  {otpVerificationError.message || 'کد وارد شده معتبر نیست'}
                </div>
              )}

              <div className="text-center space-y-2">
                <p className="text-gray-600 text-sm">
                  {canResend ? (
                    <button
                      type="button"
                      onClick={handleResendCode}
                      className="text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:underline"
                    >
                      ارسال مجدد کد
                    </button>
                  ) : (
                    <>
                      <span className="text-gray-500">زمان باقی‌مانده: </span>
                      <span className="font-medium text-gray-700">{formatTime(timer)}</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <AuthSubmitButton
                isLoading={isOtpVerificationLoading}
                disabled={isOtpVerificationLoading || !(isValid && dirty)}
              >
                تایید و ادامه
              </AuthSubmitButton>

              <AuthSubmitButton
                type="button"
                onClick={() => router.push('/set-password')}
                variant="secondary"
              >
                ورود با رمز عبور
              </AuthSubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </AuthModal>
  );
}

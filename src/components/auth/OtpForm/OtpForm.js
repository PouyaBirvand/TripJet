'use client';
import { Form, Formik } from 'formik';
import OtpInputs from './OtpInputs';
import { X } from 'lucide-react';
import { useModal } from '../../../hooks/useModal';
import { useRouter } from 'next/navigation';
import { usePhoneAuth } from '../../../hooks/usePhoneAuth';
import { useAuth } from '../../../contexts/AuthContext';
import { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { validationSchema } from './validation';
import { formatTime } from '../../../lib/utils/formatting';

export default function OtpForm() {
  const { isOpen, handleClose } = useModal();
  const router = useRouter();
  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const {
    verifyOtp,
    isOtpVerificationLoading,
    otpVerificationError,
    sendPhoneVerification,
    getPhoneNumber,
  } = usePhoneAuth();

  const { phoneVerificationToken } = useAuth();

  const verificationToken = phoneVerificationToken || Cookies.get('phone_verification_token');
  const phoneNumber = getPhoneNumber();

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
      // resend OTP
      sendPhoneVerification(phoneNumber);

      setTimer(120);
      setCanResend(false);
    } catch (error) {
      console.error('Error resending code:', error);
    }
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (!verificationToken) {
        console.error('No verification token found');
        return;
      }
      const otpCode = Object.values(values).join('');

      verifyOtp({
        code: otpCode,
        token: verificationToken,
      });
      router.push('/set-password');
    } catch (error) {
      console.error('Error submitting OTP code:', error);
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
            کد تایید را وارد کنید
          </h1>
          <p className="text-center text-slate-400 font-light mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
            کد تایید به شماره موبایل شما ارسال شد.
          </p>

          <Formik
            initialValues={{ digit1: '', digit2: '', digit3: '', digit4: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty, errors, touched }) => (
              <Form className="w-full max-w-md flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-6 mb-6">
                  <OtpInputs inputRefs={inputRefs} />

                  {otpVerificationError && (
                    <div className="text-red-500 text-sm text-center">
                      {otpVerificationError.message}
                    </div>
                  )}

                  <div className="text-center space-y-2">
                    <p className="text-slate-500 text-sm">
                      {canResend ? (
                        <button
                          type="button"
                          onClick={handleResendCode}
                          className="!text-blue-600 hover:underline focus:outline-none"
                        >
                          ارسال مجدد کد
                        </button>
                      ) : (
                        <>
                          زمان باقی‌مانده: <span className="font-medium">{formatTime(timer)}</span>
                        </>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-full">
                  <button
                    className="w-full py-2.5 px-4 rounded-lg font-normal bg-blue-600 text-white hover:bg-blue-700 
                    transition-all duration-200 text-xs sm:text-sm h-auto min-h-0
                    disabled:bg-blue-300 disabled:cursor-not-allowed disabled:hover:bg-blue-300
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    type="submit"
                    disabled={isOtpVerificationLoading || !(isValid && dirty)}
                  >
                    {isOtpVerificationLoading ? (
                      <span className="flex items-center justify-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
                        در حال پردازش...
                      </span>
                    ) : (
                      'تایید و ادامه'
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push('/set-password')}
                    className="w-full py-2.5 px-4 rounded-lg font-normal bg-white !text-blue-600 border border-blue-600
                    hover:bg-blue-50 transition-all duration-200 text-xs sm:text-sm h-auto min-h-0
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    ورود با رمز عبور
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

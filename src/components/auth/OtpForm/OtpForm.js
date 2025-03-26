"use client";

import { Form, Formik } from "formik";
import OtpInputs from "./OtpInputs";
import { X } from "lucide-react";
import { useModal } from "../../../hooks/useModal";
import { useRouter } from "next/navigation";
import { usePhoneAuth } from "../../../hooks/usePhoneAuth";
import { useAuth } from "../../../contexts/AuthContext";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { validationSchema } from "./validation";
import { formatTime } from "../../../lib/utils/formatting";

const OtpForm = () => {
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
    } catch (error) {
      console.error('Error submitting OTP code:', error);
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
          <h3 className="text-lg font-semibold text-base-content">کد تایید را وارد کنید</h3>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-base-200 dark:hover:bg-base-content/10 transition-colors focus-ring"
            aria-label="بستن"
          >
            <X className="w-5 h-5 text-base-content/70" />
          </button>
        </div>

        <Formik
          initialValues={{ digit1: '', digit2: '', digit3: '', digit4: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty, errors, touched }) => (
            <Form className="flex flex-col p-6 space-y-8">
              <p className="text-base-content/80 text-center">
                کد تایید به شماره موبایل شما ارسال شد.
              </p>

              <div className="flex flex-col items-center space-y-6">
                <OtpInputs inputRefs={inputRefs} />

                {otpVerificationError && (
                  <div className="text-error text-sm text-center">
                    {otpVerificationError.message}
                  </div>
                )}

                <div className="text-center space-y-2">
                  <p className="text-base-content/70 text-sm">
                    {canResend ? (
                      <button
                        type="button"
                        onClick={handleResendCode}
                        className="text-primary hover:underline focus:outline-none"
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

              <div className="space-y-4">
                <button
                  className="btn btn-primary w-full py-3 rounded-lg font-medium transition-all hover:shadow-md 
                    disabled:opacity-70 disabled:cursor-not-allowed text-primary-content
                    disabled:text-primary-content/90 disabled:bg-primary/70"
                  type="submit"
                  disabled={isOtpVerificationLoading || !(isValid && dirty)}
                >
                  {isOtpVerificationLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-5 h-5 border-2 border-primary-content border-t-transparent rounded-full animate-spin mr-2"></span>
                      در حال پردازش...
                    </span>
                  ) : (
                    'تایید و ادامه'
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => router.push('/')}
                  className="btn btn-outline btn-primary w-full py-3 rounded-lg font-medium transition-all hover:shadow-md"
                >
                  بازگشت
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OtpForm;

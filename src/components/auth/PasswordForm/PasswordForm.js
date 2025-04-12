'use client';
import { useState, useRef } from 'react';
import { X } from 'lucide-react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useModal } from '../../../hooks/useModal';
import { validationSchema } from './validation';
import PasswordField from '../LoginPasswordForm/PasswordField';
import { usePhoneAuth } from '../../../hooks/usePhoneAuth';

export default function PasswordForm() {
  const router = useRouter();
  const { isOpen, handleClose } = useModal();
  const { loginWithPassword, isloginWithPasswordLoading, loginWithPasswordError, getPhoneNumber } =
    usePhoneAuth();
  const phoneNumber = getPhoneNumber();

  const handleSubmit = async values => {
    try {
      loginWithPassword({
        phone: phoneNumber,
        password: values.password,
      });
    } catch (error) {
      console.error('Error submitting password:', error);
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
            رمز عبور خود را وارد کنید
          </h1>
          <p className="text-center text-slate-400 font-light mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
            لطفا رمز عبور خود را برای ورود به حساب کاربری وارد کنید.
          </p>

          <Formik
            initialValues={{ password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty }) => (
              <Form className="w-full max-w-md">
                <div className="w-full mb-6">
                  <PasswordField
                    name="password"
                    label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید"
                  />

                  {loginWithPasswordError && (
                    <div className="text-red-500 text-sm mt-2 text-center">
                      {loginWithPasswordError.message || 'نام کاربری یا رمز عبور اشتباه است'}
                    </div>
                  )}

                  <div className="text-center mt-4">
                    <button
                      type="button"
                      onClick={() => router.push('/phone')}
                      className="!text-blue-600 text-sm hover:underline focus:outline-none"
                    >
                      فراموشی رمز عبور
                    </button>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 w-full">
                  <button
                    className="w-full py-2.5 px-4 rounded-lg font-normal bg-blue-600 text-white hover:bg-blue-700 
                    transition-all duration-200 text-xs sm:text-sm h-auto min-h-0
                    disabled:bg-blue-300 disabled:cursor-not-allowed disabled:hover:bg-blue-300
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    type="submit"
                    disabled={isloginWithPasswordLoading || !(isValid && dirty)}
                  >
                    {isloginWithPasswordLoading ? (
                      <span className="flex items-center justify-center">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
                        در حال پردازش...
                      </span>
                    ) : (
                      'ورود به حساب کاربری'
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push('/phone')}
                    className="w-full py-2.5 px-4 rounded-lg font-normal bg-white !text-blue-600 border border-blue-600
                    hover:bg-blue-50 transition-all duration-200 text-xs sm:text-sm h-auto min-h-0
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    ورود با رمز یک بار مصرف
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

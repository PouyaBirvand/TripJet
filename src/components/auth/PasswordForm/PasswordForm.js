'use client';

import { useState, useRef } from 'react';
import { X } from 'lucide-react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useModal } from '../../../hooks/useModal';
import { validationSchema } from './validation';
import PasswordField from '../LoginPasswordForm/PasswordField';
import { usePhoneAuth } from '../../../hooks/usePhoneAuth';

const PasswordForm = () => {
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-fade-in">
      <div
        className="w-full max-w-md bg-base-100 dark:bg-base-300 rounded-xl shadow-2xl animate-slide-up overflow-hidden"
        dir="rtl"
      >
        <div className="flex justify-between items-center p-4 border-b border-base-200 dark:border-base-content/10">
          <h3 className="text-lg font-semibold text-base-content">رمز عبور خود را وارد کنید</h3>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-base-200 dark:hover:bg-base-content/10 transition-colors focus-ring"
            aria-label="بستن"
          >
            <X className="w-5 h-5 text-base-content/70" />
          </button>
        </div>

        <Formik
          initialValues={{ password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty}) => (
            <Form className="flex flex-col p-6 space-y-8">
              <p className="text-base-content/80 text-center">
                لطفا رمز عبور خود را برای ورود به حساب کاربری وارد کنید.
              </p>

              <div className="flex flex-col items-center space-y-6">
                <div className="w-full relative">
                  <PasswordField
                    name="password"
                    label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید"
                  />
                </div>

                {loginWithPasswordError && (
                  <div className="text-error text-sm">
                    {loginWithPasswordError.message || 'نام کاربری یا رمز عبور اشتباه است'}
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => router.push('/phone')}
                    className="text-primary text-sm hover:underline focus:outline-none"
                  >
                    فراموشی رمز عبور
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  className="btn btn-primary w-full py-3 rounded-lg font-medium transition-all hover:shadow-md 
                    disabled:opacity-70 disabled:cursor-not-allowed text-primary-content
                    disabled:text-primary-content/90 disabled:bg-primary/70"
                  type="submit"
                  disabled={isloginWithPasswordLoading || !(isValid && dirty)}
                >
                  {isloginWithPasswordLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-5 h-5 border-2 border-primary-content border-t-transparent rounded-full animate-spin ml-2"></span>
                      در حال پردازش...
                    </span>
                  ) : (
                    'ورود به حساب کاربری'
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => router.push('/phone')}
                  className="btn btn-outline btn-primary w-full py-3 rounded-lg font-medium transition-all hover:shadow-md"
                >
                  ورود با رمز یک بار مصرف
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PasswordForm;
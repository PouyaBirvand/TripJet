'use client';

import { X } from 'lucide-react';
import { Formik, Form } from 'formik';
import PasswordField from './PasswordField';
import { validationSchema } from './validation';
import { useModal } from '../../../hooks/useModal';
import { useAuth } from '../../../contexts/AuthContext';
import { usePhoneAuth } from '../../../hooks/usePhoneAuth';

const LoginPasswordForm = () => {
  const { isOpen, handleClose } = useModal();
  const { authToken } = useAuth();
  const { setPassword, isSetPasswordVerifactionLoading, setPasswordError } = usePhoneAuth();

  const handleSubmit = async values => {
    try {
      setPassword({
        password: values.password,
        password_confirmation: values.confirmPassword,
        token: authToken,
      });
    } catch (error) {
      console.error('Error setting password:', error);
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
          <h3 className="text-lg font-semibold text-base-content">تعریف کلمه عبور</h3>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-base-200 dark:hover:bg-base-content/10 transition-colors focus-ring"
            aria-label="بستن"
          >
            <X className="w-5 h-5 text-base-content/70" />
          </button>
        </div>

        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="flex flex-col p-6 space-y-8">
              <p className="text-base-content/80 text-center">
                لطفا رمز عبور امن برای حساب کاربری خود تعیین کنید.
              </p>

              <div className="flex flex-col space-y-4">
                <PasswordField
                  name="password"
                  label="رمز عبور"
                  placeholder="رمز عبور خود را وارد کنید"
                />

                <PasswordField
                  name="confirmPassword"
                  label="تکرار رمز عبور"
                  placeholder="رمز عبور را مجدداً وارد کنید"
                />

                <div className="text-xs text-base-content/70 mt-2">
                  <p>رمز عبور باید حداقل شامل موارد زیر باشد:</p>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>۸ کاراکتر یا بیشتر</li>
                    <li>حداقل یک حرف بزرگ</li>
                    <li>حداقل یک حرف کوچک</li>
                    <li>حداقل یک عدد</li>
                  </ul>
                </div>
              </div>

              {setPasswordError && (
                <div className="text-error text-sm">
                  {setPasswordError.message || 'خطا در ثبت رمز عبور'}
                </div>
              )}

              <div className="space-y-4">
                <button
                  className="btn btn-primary w-full py-3 rounded-lg font-medium transition-all hover:shadow-md 
                    disabled:opacity-70 disabled:cursor-not-allowed text-primary-content
                    disabled:text-primary-content/90 disabled:bg-primary/70"
                  type="submit"
                  disabled={isSetPasswordVerifactionLoading || !(isValid && dirty)}
                >
                  {isSetPasswordVerifactionLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-5 h-5 border-2 border-primary-content border-t-transparent rounded-full animate-spin ml-2"></span>
                      در حال پردازش...
                    </span>
                  ) : (
                    'ثبت رمز عبور'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPasswordForm;

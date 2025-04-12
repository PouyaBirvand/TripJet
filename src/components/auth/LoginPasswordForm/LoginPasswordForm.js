'use client';
import { X } from 'lucide-react';
import { Formik, Form } from 'formik';
import PasswordField from './PasswordField';
import { validationSchema } from './validation';
import { useModal } from '../../../hooks/useModal';
import { useAuth } from '../../../contexts/AuthContext';
import { usePhoneAuth } from '../../../hooks/usePhoneAuth';

export default function LoginPasswordForm() {
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
            تعریف کلمه عبور
          </h1>
          <p className="text-center text-slate-400 font-light mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
            لطفا رمز عبور امن برای حساب کاربری خود تعیین کنید.
          </p>
          
          <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty }) => (
              <Form className="w-full max-w-md">
                <div className="flex flex-col space-y-4 mb-6">
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
                  
                  <div className="text-xs text-slate-500 mt-2">
                    <p>رمز عبور باید حداقل شامل موارد زیر باشد:</p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>۸ کاراکتر یا بیشتر</li>
                      <li>حداقل یک حرف بزرگ</li>
                      <li>حداقل یک حرف کوچک</li>
                      <li>حداقل یک عدد</li>
                    </ul>
                  </div>
                  
                  {setPasswordError && (
                    <div className="text-red-500 text-sm text-center mt-2">
                      {setPasswordError.message || 'خطا در ثبت رمز عبور'}
                    </div>
                  )}
                </div>
                
                <button
                  className="w-full py-2.5 px-4 rounded-lg font-normal bg-blue-600 text-white hover:bg-blue-700 
                  transition-all duration-200 text-xs sm:text-sm h-auto min-h-0
                  disabled:bg-blue-300 disabled:cursor-not-allowed disabled:hover:bg-blue-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  type="submit"
                  disabled={isSetPasswordVerifactionLoading || !(isValid && dirty)}
                >
                  {isSetPasswordVerifactionLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
                      در حال پردازش...
                    </span>
                  ) : (
                    'ثبت رمز عبور'
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
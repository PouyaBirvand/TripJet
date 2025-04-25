'use client';
import { Formik, Form } from 'formik';
import { useModal } from '../../../hooks/useModal';
import { validationSchema } from './validation';
import { useAuth } from '../../../contexts/AuthContext';
import { usePhoneAuth } from '../../../hooks/usePhoneAuth';
import CustomFormField from '../../common/CustomFormField';
import { AuthModal } from '../shared/AuthModal';
import { AuthSubmitButton } from '../shared/AuthSubmitButton';

export default function LoginPasswordForm() {
  const { isOpen, handleClose } = useModal();
  const { authToken } = useAuth();
  const { 
    setPassword, 
    isSetPasswordVerifactionLoading, 
    setPasswordError 
  } = usePhoneAuth();

  const handleSubmit = async (values) => {
    try {
      await setPassword({
        password: values.password,
        password_confirmation: values.confirmPassword,
        token: authToken,
      });
    } catch (error) {
      console.error('Error setting password:', error);
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={handleClose}
      title="تعریف کلمه عبور"
      description="لطفا رمز عبور امن برای حساب کاربری خود تعیین کنید."
    >
      <Formik
        initialValues={{ password: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="w-full max-w-md">
            <div className="flex flex-col space-y-4 mb-6">
              <CustomFormField
                name="password"
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد کنید"
                type="password"
                masked={true}
              />
              
              <CustomFormField
                name="confirmPassword"
                label="تکرار رمز عبور"
                placeholder="رمز عبور را مجدداً وارد کنید"
                type="password"
                masked={true}
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
            
            <AuthSubmitButton
              isLoading={isSetPasswordVerifactionLoading}
              disabled={isSetPasswordVerifactionLoading || !(isValid && dirty)}
            >
              ثبت رمز عبور
            </AuthSubmitButton>
          </Form>
        )}
      </Formik>
    </AuthModal>
  );
}
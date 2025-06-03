'use client';
import { Formik, Form } from 'formik';
import { useModal } from '../../../hooks/useModal';
import { useAuth } from '../../../contexts/AuthContext';
import { usePasswordSetup } from '../../../hooks/AuthHooks/usePasswordSetup';
import CustomFormField from '../../../components/common/CustomFormField';
import { AuthModal } from '../../../components/auth/shared/AuthModal';
import { AuthSubmitButton } from '../../../components/auth/shared/AuthSubmitButton';
import { passwordValidationSchema } from '../../../lib/validation/shared/password.schema';
import { getPasswordInitialValues } from '../../../lib/formInitialValues';
import { useEffect, useRef } from 'react';

export default function LoginPasswordPage() {
  const { isOpen, handleLastClose, handleClose } = useModal();
  const { authToken } = useAuth();
  const { setPassword, isSetPasswordVerifactionLoading, setPasswordError } = usePasswordSetup();
  const PasswordRef = useRef();

  useEffect(() => {
    PasswordRef.current.focus();
  }, []);

  const handleSubmit = async values => {
    try {
      await setPassword({
        password: values.password,
        password_confirmation: values.confirmPassword,
        token: authToken,
      });

      handleLastClose();
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
        initialValues={getPasswordInitialValues}
        validationSchema={passwordValidationSchema}
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
                ref={PasswordRef}
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

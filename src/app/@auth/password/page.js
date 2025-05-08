'use client';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/navigation';
import { useModal } from '../../../hooks/useModal';
import { passwordValidationSchema } from '../../../lib/validation';
import { getLoginPasswordInitialValues } from '../../../lib/formInitialValues';
import { usePasswordAuth } from '../../../hooks/AuthHooks/usePasswordAuth';
import { usePhoneVerification } from '../../../hooks/AuthHooks/usePhoneVerification';
import CustomFormField from '../../../components/common/CustomFormField';
import { AuthModal } from '../../../components/auth/shared/AuthModal';
import { AuthSubmitButton } from '../../../components/auth/shared/AuthSubmitButton';

export default function PasswordPage() {
  const router = useRouter();
  const { isOpen, handleClose } = useModal();
  const { loginWithPassword, isloginWithPasswordLoading, loginWithPasswordError } =
    usePasswordAuth();

    const { getPhoneNumber } = usePhoneVerification();


  const phoneNumber = getPhoneNumber();

  const handleSubmit = async values => {
    try {
      await loginWithPassword({
        phone: phoneNumber,
        password: values.password,
      });
    } catch (error) {
      console.error('Error submitting password:', error);
    }
  };

  return (
    <AuthModal
      isOpen={isOpen}
      onClose={handleClose}
      title="رمز عبور خود را وارد کنید"
      description="لطفا رمز عبور خود را برای ورود به حساب کاربری وارد کنید."
    >
      <Formik
        initialValues={getLoginPasswordInitialValues}
        validationSchema={passwordValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="w-full max-w-md">
            <div className="w-full mb-6">
              <CustomFormField
                name="password"
                label="رمز عبور"
                placeholder="رمز عبور خود را وارد کنید"
                type="password"
                masked={true}
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
              <AuthSubmitButton
                isLoading={isloginWithPasswordLoading}
                disabled={isloginWithPasswordLoading || !(isValid && dirty)}
              >
                ورود به حساب کاربری
              </AuthSubmitButton>

              <AuthSubmitButton
                type="button"
                onClick={() => router.push('/phone')}
                variant="secondary"
              >
                ورود با رمز یک بار مصرف
              </AuthSubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </AuthModal>
  );
}

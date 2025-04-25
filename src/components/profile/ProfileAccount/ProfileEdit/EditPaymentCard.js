'use client';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import CustomFormField from '../../../../components/common/CustomFormField';

const EditPaymentCard = ({ initialData, onSubmit, returnPath }) => {
  const validationSchema = Yup.object({
    // Not Required
  });

  return (
    <div className="bg-white rounded-xl border border-base-300 p-4 md:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">ویرایش اطلاعات بانکی</h2>
      </div>
      <Formik initialValues={initialData} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-4">
              <div>
                <CustomFormField
                  name="accountNumber"
                  label="شماره حساب"
                  placeholder="متن پیش فرض"
                  digitsOnly
                  convertToFarsi
                  inputMode="numeric"
                />
              </div>
              <div>
                <CustomFormField
                  name="sheba"
                  label="شماره شبا"
                  placeholder="متن پیش فرض"
                  digitsOnly
                  convertToFarsi
                  inputMode="numeric"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CustomFormField
                  name="cardNumber"
                  label="شماره کارت"
                  placeholder="متن پیش فرض"
                  digitsOnly
                  convertToFarsi
                  inputMode="numeric"
                />
              </div>
              <div>{/* Empty div to maintain grid layout */}</div>
            </div>

            <div className="flex md:flex-row flex-col  justify-end gap-3 pt-4 border-t border-base-200">
              <Link
                href={returnPath}
                className="btn btn-outline border-primary !text-blue-600 btn-md rounded-lg font-normal md:w-48 w-full"
              >
                انصراف
              </Link>
              <button
                type="submit"
                className="btn btn-primary btn-md rounded-lg font-normal md:w-48 w-full"
                disabled={isSubmitting}
              >
                ویرایش
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditPaymentCard;

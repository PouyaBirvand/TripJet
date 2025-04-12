'use client';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import CustomFormField from '../../../../components/common/CustomFormField';

const EditTravelCard = ({ initialData, onSubmit, returnPath }) => {
  const validationSchema = Yup.object({
    nationalId: Yup.string().required('کد ملی الزامی است'),
    birthDate: Yup.string().required('تاریخ تولد الزامی است'),
  });

  return (
    <div className="bg-white rounded-xl border border-base-300 p-4 md:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">ویرایش اطلاعات مسافرتی</h2>
      </div>
      <Formik initialValues={initialData} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-4">
              <div>
                <CustomFormField name="birthDate" label="تاریخ تولد" dateFormat convertToFarsi />
              </div>
              <div>
                <CustomFormField
                  name="nationalId"
                  label="شماره ملی"
                  placeholder="شماره ملی"
                  digitsOnly
                  convertToFarsi
                  masked
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CustomFormField
                  name="passportNumber"
                  label="شماره پاسپورت (اختیاری)"
                  placeholder="شماره پاسپورت"
                  textAlign="right"
                />
              </div>
              <div>
                <CustomFormField
                  name="passportExpiry"
                  label="تاریخ انقضای پاسپورت (اختیاری)"
                  dateFormat
                  convertToFarsi
                />
              </div>
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

export default EditTravelCard;

'use client';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';
import CustomFormField from '../../../common/CustomFormField';

const EditProfileCard = ({ initialData, onSubmit, returnPath }) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required('نام الزامی است'),
    lastName: Yup.string().required('نام خانوادگی الزامی است'),
    gender: Yup.string().required('انتخاب جنسیت الزامی است'),
  });

  return (
    <div className="bg-white rounded-xl border border-base-300 p-4 md:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">ویرایش اطلاعات کاربری</h2>
      </div>
      <Formik initialValues={initialData} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ isSubmitting, errors, touched }) => (
          <Form className="space-y-4">
            {/* Gender Radio Buttons - Positioned at the top */}
            <div className="mb-8">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    className="radio radio-primary radio-xs"
                  />
                  <span>مذکر</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    className="radio radio-primary radio-xs"
                  />
                  <span>مونث</span>
                </label>
              </div>
              {errors.gender && touched.gender && (
                <div className="text-error text-sm mt-1">{errors.gender}</div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 space-y-4">
              <div>
                <CustomFormField
                  name="firstName"
                  label="نام به فارسی"
                  placeholder="نام به فارسی"
                  convertToFarsi
                />
              </div>
              <div>
                <CustomFormField
                  name="lastName"
                  label="نام خانوادگی به فارسی"
                  placeholder="نام خانوادگی به فارسی"
                  convertToFarsi
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CustomFormField
                  name="firstNameEn"
                  label="نام به انگلیسی"
                  placeholder="نام به انگلیسی"
                />
              </div>
              <div>
                <CustomFormField
                  name="lastNameEn"
                  label="نام خانوادگی به انگلیسی"
                  placeholder="نام خانوادگی به انگلیسی"
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

export default EditProfileCard;

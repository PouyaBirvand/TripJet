'use client';
import { Formik, Form } from 'formik';
import { initialValues, subjectOptions } from './formConfig';
import CustomFormField from '../../common/CustomFormField';
import MessageTextArea from './MessageTextArea';
import SubmitButton from './SubmitButton';
import validationSchema from '../validation';

export default function ContactForm() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 1000);
  };

  return (
    <div className="w-full lg:w-2/3 rounded-2xl border border-slate-200 bg-white p-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">ارتباط با ما</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          <NameFields />
          <ContactFields />
          <SubjectField />
          <MessageTextArea />
          <SubmitButton />
        </Form>
      </Formik>
    </div>
  );
}

function NameFields() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CustomFormField
        name="firstName"
        label="نام"
        placeholder="نام خود را وارد کنید"
        type="text"
      />
      <CustomFormField
        name="lastName"
        label="نام خانوادگی"
        placeholder="نام خانوادگی خود را وارد کنید"
        type="text"
      />
    </div>
  );
}

function ContactFields() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CustomFormField
        name="phone"
        label="شماره همراه"
        placeholder=""
        type="text"
        showPrefix={true}
        prefix="| +۹۸"
        textAlign="left"
        convertToFarsi={true}
        digitsOnly={true}
        inputMode="numeric"
      />
      <CustomFormField
        name="email"
        label="ایمیل"
        placeholder="tripjet@gmail.com"
        type="email"
      />
    </div>
  );
}

function SubjectField() {
  return (
    <CustomFormField
      name="subject"
      label="موضوع"
      placeholder="موضوع را انتخاب کنید"
      type="select"
      options={subjectOptions}
    />
  );
}
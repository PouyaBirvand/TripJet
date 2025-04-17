'use client';
import Hero from '../../components/ui/Hero';
import NavButtons from '../../components/common/NavButtons';
import {
  Instagram,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomFormField from '../../components/common/CustomFormField';
import CustomTextArea from '../../components/common/CustomTextArea';

export default function ContactUsPage() {
  const contactFormSchema = Yup.object().shape({
    firstName: Yup.string().required('نام الزامی است'),
    lastName: Yup.string().required('نام خانوادگی الزامی است'),
    email: Yup.string().email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'شماره همراه باید 10 رقم باشد')
      .required('شماره همراه الزامی است'),
    subject: Yup.string().required('موضوع الزامی است'),
    message: Yup.string()
      .required('متن پیام الزامی است')
      .min(10, 'متن پیام باید حداقل 10 کاراکتر باشد'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
    // اینجا ارسال اطلاعات به سرور انجام می‌شود
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      // نمایش پیام موفقیت
    }, 1000);
  };

  const subjectOptions = [
    { value: 'support', label: 'پشتیبانی' },
    { value: 'suggestion', label: 'پیشنهاد' },
    { value: 'complaint', label: 'شکایت' },
    { value: 'cooperation', label: 'همکاری' },
    { value: 'other', label: 'سایر موارد' },
  ];

  return (
    <div className="py-8 container mx-auto px-4">
      {/* Hero Section */}
      <Hero />
      <div className="mb-80"></div>
      <NavButtons />

      <div className="w-full flex flex-col lg:flex-row gap-8 mt-10 mb-16">
        {/* LEFT */}
        <div className="w-full lg:w-1/3 rounded-2xl border border-slate-200 bg-blue-600 relative overflow-hidden p-8 text-white shadow-lg">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-8">اطلاعات تماس</h2>

            <p className="text-lg font-normal mb-8">برای شروع چت فیلد های مقابل را تکمیل کنید.</p>

            <div className="flex flex-col gap-8 text-lg mb-10">
              <div className="flex items-center gap-3">
                <Mail className="flex-shrink-0" size={20} />
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                  <span className="font-medium">آدرس ایمیل:</span>
                  <span className="opacity-90">tripjet@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="flex-shrink-0" size={20} />
                <div className="flex flex-col sm:flex-row sm:justify-between w-full">
                  <span className="font-medium">تلفن پشتیبانی:</span>
                  <span className="opacity-90 font-vazir-digits">۰۲۱۷۰۷۰۹۷۹۷</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1" size={20} />
                <div className="flex flex-col w-full">
                  <span className="font-medium">آدرس دفتر مرکزی:</span>
                  <span className="opacity-90 leading-7">
                    تهران، سعادت آباد، خیابان کاج، پلاک ۱۶
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-400 pt-6 mt-6">
              <h3 className="text-lg font-medium mb-4 text-center">
                ما را در شبکه‌های اجتماعی دنبال کنید
              </h3>
              <ul className="flex gap-5 items-center justify-center">
                <li>
                  <a
                    href="#"
                    className="block p-2 hover:bg-blue-500 rounded-full transition-colors"
                  >
                    <MessageCircle size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 hover:bg-blue-500 rounded-full transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 hover:bg-blue-500 rounded-full transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 hover:bg-blue-500 rounded-full transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block p-2 hover:bg-blue-500 rounded-full transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Decorative circles */}
          <span className="absolute w-40 h-40 bg-blue-700 rounded-full top-[2rem] left-[80%] z-0 opacity-80"></span>
          <span className="absolute w-60 h-60 bg-blue-800 rounded-full bottom-[-5rem] left-[-1rem] z-0 opacity-80"></span>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-2/3 rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">ارتباط با ما</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={contactFormSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
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

                <CustomFormField
                  name="subject"
                  label="موضوع"
                  placeholder="موضوع را انتخاب کنید"
                  type="select"
                  options={subjectOptions}
                />

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">متن پیام</label>
                  <CustomTextArea
                    name="message"
                    placeholder="متن پیام خود را بنویسید..."
                    rows="4"
                  />
                </div>

                <div dir='ltr' className='mt-25'>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white py-3 px-28 rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'در حال ارسال...' : 'تایید و ارسال'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

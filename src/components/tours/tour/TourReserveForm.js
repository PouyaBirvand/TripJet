import { tourValidationSchema } from '@/lib/validation/tour/tour.schema';
import { getTourInitialValues } from '../../../lib/formInitialValues/index';
import { Form, Formik } from 'formik';
import CustomFormField from '../../../components/common/CustomFormField';
import {
  selectdateOptions,
  travelersOptions,
} from '../../../lib/formInitialValues/tour/tourOptions';
import { formatPrice } from '@/lib/utils/numbers';

export default function TourReserveForm({ tour }) {
  const handleSubmit = async values => {
    console.log(values);
  };

  const totalPrice = tour?.price?.hasDiscount ? tour.price.discounted : tour.price.original;

  return (
    <div className="sticky top-4">
      <Formik
        initialValues={getTourInitialValues}
        validationSchema={tourValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className="border border-slate-200 rounded-lg p-6 space-y-4">
            <CustomFormField
              name="selectdate"
              label="انتخاب تاریخ اجرای تور"
              type="select"
              options={selectdateOptions}
            />
            <CustomFormField
              name="travelers"
              label="تعداد مسافران"
              type="select"
              options={travelersOptions}
            />
            <CustomFormField
              name="phonenumber"
              label="شماره موبایل"
              placeholder="۹۱۲۳۴۵۶۷۸۹"
              inputMode="numeric"
              convertToFarsi={true}
              digitsOnly={true}
              maxLength={10}
              showPrefix={true}
              prefix="| +۹۸"
              autoComplete="tel-national"
              textAlign="left"
            />

            {tour?.price && (
              <div className="border-t pt-4">
                {tour.price.hasDiscount && (
                  <div className="flex items-center justify-between text-sm text-slate-500 line-through">
                    قیمت اصلی
                    <span>{formatPrice(tour.price.original)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-lg font-medium">
                  کل مبلغ پرداختی
                  <span className="text-blue-500">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            )}

            <button
              disabled={!(isValid && dirty)}
              className="btn text-white px-8 py-2 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              رزرو تور
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

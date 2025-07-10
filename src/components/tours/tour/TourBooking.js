'use client';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import { Plus, Minus, Phone, Calendar, Users, CreditCard, Lock } from 'lucide-react';
import { tourValidationSchema } from '@/lib/validation/tour/tour.schema';
import { formatPrice } from '@/lib/utils/numbers';
import CustomFormField from '../../common/CustomFormField';
import { useRouter } from 'next/navigation';

export default function TourBooking({ tour }) {
  const router = useRouter();
  const [travelers, setTravelers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const basePrice = tour?.price?.hasDiscount ? tour.price.discounted : tour.price.original;
  const totalPrice = basePrice * travelers.adults + basePrice * 0.7 * travelers.children;

  const handleSubmit = async values => {
    const bookingData = {
      ...values,
      travelers,
      totalPrice,
      tourId: tour.id,
    };
    console.log('Booking Data:', bookingData);
    router.push('/booking/personal-info');
  };

  const updateTravelers = (type, operation) => {
    setTravelers(prev => {
      const newValue = operation === 'add' ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      if (type === 'adults' && newValue === 0) return prev;
      return { ...prev, [type]: newValue };
    });
  };

  return (
    <div className="sticky top-4">
      <div className="bg-white rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">رزرو آنلاین تور</h3>
          <p className="text-blue-100 text-sm">رزرو سریع و آسان با تضمین بهترین قیمت</p>
        </div>

        <div className="p-6 border border-slate-200">
          <Formik
            initialValues={{
              selectedDate: '',
              phoneNumber: '',
              specialRequests: '',
            }}
            validationSchema={tourValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty }) => (
              <Form className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mx-2" />
                    انتخاب تاریخ سفر
                  </label>
                  <CustomFormField
                    name="selectedDate"
                    type="select"
                    placeholder="تاریخ مورد نظر را انتخاب کنید"
                    options={
                      tour.availableDates?.map(date => ({
                        value: date.id,
                        label: `${date.day} ${date.dayNum} - ${date.closed ? 'تکمیل ظرفیت' : 'آزاد'}`,
                      })) || []
                    }
                  />
                </div>

                {/* Travelers Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <Users className="w-4 h-4 inline mr-2" />
                    تعداد مسافران
                  </label>
                  <div className="space-y-3">
                    {/* Adults */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">بزرگسال</div>
                        <div className="text-sm text-gray-500">۱۲ سال به بالا</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateTravelers('adults', 'subtract')}
                          disabled={travelers.adults <= 1}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{travelers.adults}</span>
                        <button
                          type="button"
                          onClick={() => updateTravelers('adults', 'add')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">کودک</div>
                        <div className="text-sm text-gray-500">۲ تا ۱۲ سال</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateTravelers('children', 'subtract')}
                          disabled={travelers.children <= 0}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{travelers.children}</span>
                        <button
                          type="button"
                          onClick={() => updateTravelers('children', 'add')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Infants */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">نوزاد</div>
                        <div className="text-sm text-gray-500">زیر ۲ سال</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => updateTravelers('infants', 'subtract')}
                          disabled={travelers.infants <= 0}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{travelers.infants}</span>
                        <button
                          type="button"
                          onClick={() => updateTravelers('infants', 'add')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mx-2" />
                    شماره تماس
                  </label>
                  <CustomFormField
                    name="phoneNumber"
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
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    درخواست‌های ویژه (اختیاری)
                  </label>
                  <CustomFormField
                    name="specialRequests"
                    type="textarea"
                    placeholder="درخواست‌های خاص خود را بنویسید..."
                    rows={3}
                  />
                </div>

                {/* Price Summary */}
                <div className="border-t border-slate-300 pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>بزرگسال ({travelers.adults} نفر)</span>
                      <span>{formatPrice(basePrice * travelers.adults)}</span>
                    </div>
                    {travelers.children > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>کودک ({travelers.children} نفر)</span>
                        <span>{formatPrice(basePrice * 0.7 * travelers.children)}</span>
                      </div>
                    )}
                    {travelers.infants > 0 && (
                      <div className="flex justify-between text-sm">
                        <span>نوزاد ({travelers.infants} نفر)</span>
                        <span>رایگان</span>
                      </div>
                    )}
                    <div className="border-t border-slate-300 pt-2 flex justify-between font-bold text-lg">
                      <span>مجموع</span>
                      <span className="text-blue-600">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isValid || !dirty}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  ادامه رزرو
                </button>

                {/* Security Note */}
                <div className="text-xs text-gray-500 text-center">
                  <p className="flex items-center justify-center gap-2">
                    <Lock color="blue" className="mb-1" size={20} /> اطلاعات شما کاملاً محفوظ و امن
                    است
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

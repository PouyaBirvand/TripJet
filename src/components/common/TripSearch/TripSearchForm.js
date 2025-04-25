"use client"

import { usePathname, useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Formik, Form } from "formik"
import { useQueryStates } from "nuqs"
import { useEffect, useState } from "react"
import CustomFormField from "../CustomFormField"

const TripSearchForm = ({ tripType, initialOrigin = "", initialDestination = "" }) => {
  const pathname = usePathname();
  const router = useRouter();
  
  const [queryParams, setQueryParams] = useQueryStates({
    type: {},
    origin: {},
    destination: {},
  });
  
  // گزینه‌های مبدا و مقصد
  const originOptions = [
    { value: "tehran", label: "تهران" },
    { value: "mashhad", label: "مشهد" },
    { value: "shiraz", label: "شیراز" },
  ]
  
  const destinationOptions = tripType === "domestic"
    ? [
        { value: "mashhad", label: "مشهد" },
        { value: "shiraz", label: "شیراز" },
        { value: "kish", label: "کیش" },
      ]
    : [
        { value: "istanbul", label: "استانبول" },
        { value: "dubai", label: "دبی" },
        { value: "antalya", label: "آنتالیا" },
      ]
  
  // استفاده از useState برای مدیریت مقادیر فرم
  const [formValues, setFormValues] = useState({
    origin: initialOrigin || queryParams.origin || "",
    destination: initialDestination || queryParams.destination || ""
  });
  
  // بروزرسانی مقادیر فرم وقتی پارامترهای URL تغییر می‌کنند
  useEffect(() => {
    setFormValues({
      origin: queryParams.origin || initialOrigin || "",
      destination: queryParams.destination || initialDestination || ""
    });
  }, [queryParams, initialOrigin, initialDestination]);
  
  const handleSubmit = (values) => {
    // بررسی مقادیر ورودی
    console.log("Form submitted with values:", values);
    
    // ذخیره در جستجوهای اخیر
    saveToRecentSearches(values.origin, values.destination);
    
    // بروزرسانی پارامترهای URL
    setQueryParams({
      type: tripType,
      origin: values.origin,
      destination: values.destination
    });
    
    // هدایت به صفحه تورها اگر در صفحه اصلی هستیم
    if (pathname === "/") {
      // استفاده از setTimeout برای اطمینان از اینکه هدایت بعد از بروزرسانی پارامترها انجام شود
      setTimeout(() => {
        router.push("/tours");
      }, 100);
    }
  }
  
  const saveToRecentSearches = (origin, destination) => {
    if (!origin || !destination) return;
    
    try {
      // دریافت جستجوهای قبلی از localStorage
      const savedSearches = localStorage.getItem('searchHistory');
      const searches = savedSearches ? JSON.parse(savedSearches) : [];
      
      // یافتن برچسب‌های مبدا و مقصد
      const originLabel = originOptions.find(opt => opt.value === origin)?.label || origin;
      const destinationLabel = destinationOptions.find(opt => opt.value === destination)?.label || destination;
      
      // افزودن جستجوی جدید به ابتدا، حذف موارد تکراری، محدود کردن به 10 مورد
      const newSearches = [
        { origin: originLabel, destination: destinationLabel },
        ...searches.filter(item => 
          !(item.origin === originLabel && item.destination === destinationLabel)
        )
      ].slice(0, 10);
      
      // ذخیره در localStorage
      localStorage.setItem('searchHistory', JSON.stringify(newSearches));
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  }
  
  return (
    <Formik
      initialValues={formValues}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      <Form>
        <div className="flex gap-5 flex-wrap sm:flex-nowrap pt-4">
          <div className="relative w-full">
            <CustomFormField
              name="origin"
              label="مبدا"
              placeholder="انتخاب شهر مبدا"
              type="select"
              options={originOptions}
            />
          </div>
          
          <div className="relative w-full">
            <CustomFormField
              name="destination"
              label="مقصد"
              placeholder="انتخاب شهر مقصد"
              type="select"
              options={destinationOptions}
            />
          </div>
          
          <button 
            type="submit"
            className="btn bg-blue-600 text-white rounded-xl !py-6 font-normal px-10 w-full sm:w-auto sm:flex-shrink-0 gap-2"
          >
            {pathname === "/" ? "جستجو" : "ویرایش"}
            <Search className="h-4 w-4" />
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default TripSearchForm

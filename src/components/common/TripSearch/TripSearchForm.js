"use client"
import { usePathname, useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Formik, Form } from "formik"
import CustomFormField from "../CustomFormField"

const TripSearchForm = ({ tripType }) => {
  const pathname = usePathname();
  const router = useRouter()
  
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
  
  const initialValues = {
    origin: "",
    destination: ""
  }
  
  const handleSubmit = (values) => {
    console.log("Search values:", values, "Trip type:", tripType)
    // Handle search logic here
  }
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
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
            onClick={() => router.push("/tours")} 
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

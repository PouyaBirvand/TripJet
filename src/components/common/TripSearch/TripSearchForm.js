"use client"
import { usePathname, useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Formik, Form } from "formik"
import { useQueryStates } from "nuqs"
import { useEffect } from "react"
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
  
  const initialValues = {
    origin: initialOrigin || "",
    destination: initialDestination || ""
  }
  
  // Update form when URL params change
  useEffect(() => {
    if (queryParams.origin || queryParams.destination) {
      initialValues.origin = queryParams.origin || "";
      initialValues.destination = queryParams.destination || "";
    }
  }, [queryParams]);
  
  const handleSubmit = (values) => {
    // Update URL with search parameters
    setQueryParams({
      type: tripType,
      origin: values.origin,
      destination: values.destination
    });
    
    // Save to recent searches
    saveToRecentSearches(values.origin, values.destination);
    
    // Navigate to tours page
    if (pathname === "/") {
      router.push("/tours");
    }
  }
  
  const saveToRecentSearches = (origin, destination) => {
    if (!origin || !destination) return;
    
    try {
      // Get existing searches from localStorage
      const savedSearches = localStorage.getItem('searchHistory');
      const searches = savedSearches ? JSON.parse(savedSearches) : [];
      
      // Find origin and destination labels
      const originLabel = originOptions.find(opt => opt.value === origin)?.label || origin;
      const destinationLabel = destinationOptions.find(opt => opt.value === destination)?.label || destination;
      
      // Add new search to the beginning, remove duplicates, limit to 10
      const newSearches = [
        { origin: originLabel, destination: destinationLabel },
        ...searches.filter(item => 
          !(item.origin === originLabel && item.destination === destinationLabel)
        )
      ].slice(0, 10);
      
      // Save back to localStorage
      localStorage.setItem('searchHistory', JSON.stringify(newSearches));
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  }
  
  return (
    <Formik
      initialValues={initialValues}
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

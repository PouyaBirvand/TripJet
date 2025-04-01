"use client"
import { usePathname } from "next/navigation"
import { Search, MapPin, Calendar } from "lucide-react"

const TripSearch = () => {
    const pathname = usePathname()
        
    return (
        <div className="bg-base-100 rounded-xl p-7 shadow-md mt-60 relative z-10 border border-base-200">
            <form action="#">
                <div className="flex gap-5 flex-wrap sm:flex-nowrap">
                    <div className="relative w-full">
                        <label className="absolute -top-2.5 right-4 px-1 text-sm font-medium text-primary bg-base-100 z-10">
                            مبدا
                        </label>
                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-primary h-4 w-4" />
                        <select 
                            className="select select-primary w-full pl-10 pr-4 bg-base-200/50 pt-2"
                        >
                            <option>تهران</option>
                            <option>مشهد</option>
                            <option>شیراز</option>
                        </select>
                    </div>
                    
                    <div className="relative w-full">
                        <label className="absolute -top-2.5 right-4 px-1 text-sm font-medium text-primary bg-base-100 z-10">
                            مقصد
                        </label>
                        <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-primary h-4 w-4" />
                        <select 
                            className="select select-primary w-full pl-10 pr-4 bg-base-200/50 pt-2"
                        >
                            <option>استانبول</option>
                            <option>دبی</option>
                            <option>آنتالیا</option>
                        </select>
                    </div>
                    <button className="btn btn-primary px-10 w-full sm:basis-1/4 gap-2 self-end">
                        {pathname === "/" ? "جستجو" : "ویرایش"}
                        <Search className="h-4 w-4" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TripSearch

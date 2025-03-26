import { CreditCard, MapPin, Medal, PhoneCall, Plane, Star } from "lucide-react"
import Image from "next/image"

const HomeAbout = () => {
    return (
        <div className="my-10 mt-32">
            <h5 className="text-center mb-10">حالا چرا تریپ جت؟</h5>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-4 md:gap-16 w-full md:w-1/3">
                    <div className="flex justify-start md:justify-end">
                        <button className="btn btn-base-100 w-full md:w-auto">
                            <Plane className="w-4 h-4 md:w-5 md:h-5 ml-1 text-primary" />
                            ارائه تورهای خارجی
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <button className="btn btn-base-100 w-full md:w-auto">
                            <Star className="w-4 h-4 md:w-5 md:h-5 ml-1 text-primary" />
                            بیشترین تعداد تور
                        </button>
                    </div>

                    <div className="flex justify-start md:justify-end">
                        <button className="btn btn-base-100 w-full md:w-auto">
                            <Medal className="w-4 h-4 md:w-5 md:h-5 ml-1 text-primary" />
                            رتبه یک سفر
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/3 flex justify-center my-6 md:my-0">
                    <Image 
                        width={300} 
                        height={300} 
                        src="/home-about.png" 
                        alt="home about pic"
                    />
                </div>

                <div className="flex flex-col gap-4 md:gap-16 w-full md:w-1/3">
                    <div className="flex justify-end md:justify-start">
                        <button className="btn btn-base-100 w-full md:w-auto">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 ml-1 text-primary"/>
                            هرجا که بخوای!
                        </button>
                    </div>
                    
                    <div className="flex justify-center">
                        <button className="btn btn-base-100 w-full md:w-auto">
                            <PhoneCall className="w-4 h-4 md:w-5 md:h-5 ml-1 text-primary"/>
                            پشتیبانی ۲۴ ساعته
                        </button>
                    </div>

                    <div className="flex justify-end md:justify-start">
                        <button className="btn btn-base-100 w-full md:w-auto">
                            <CreditCard className="w-4 h-4 md:w-5 md:h-5 ml-1 text-primary" />
                            بهترین قیمت ها
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout
import { BadgeAlert, BadgePercent, Calendar, Clock, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TourBox = ({ item }) => {
    console.log(item);

    return (
        <div className="bg-base-100 p-2 rounded">
            <div className="relative mb-4">
                <Image width={500} height={500} className="w-full rounded" src={item.img} alt={item.title} />
                <button className="absolute top-1 right-1 btn btn-base-100 p-2 text-primary">
                    <Heart />
                </button>


                <div className="absolute flex gap-2 bottom-1 right-1">
                    <div className="badge badge-soft badge-secondary py-3">
                        <BadgePercent />
                        {item.discountPercent}٪ تخفیف
                    </div>

                    <div className="badge badge-soft badge-primary py-3">
                        <BadgeAlert/>
                        {item.leftedTicket} نفر باقیمانده
                    </div>
                </div>
            </div>

            <div>
                <h5>{item.title}</h5>
                <p className="flex gap-2">
                    <Clock className="text-primary"/>
                    {item.time}
                </p>
                <p className="flex gap-2">
                    <Calendar className="text-primary"/>
                    {item.date}
                </p>

                <div className="flex justify-between">
                    <span>شروع قیمت از</span>

                    <div>
                        <span className="line-through">{item.price}</span>
                        <h5 className="text-primary">{item.discountedPrice} تومان</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourBox
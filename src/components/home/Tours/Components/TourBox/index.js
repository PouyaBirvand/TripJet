import Image from "next/image";
import Link from "next/link";
import { useFavorite } from "../../../../../hooks/useFavorite";
import FavoriteButton from "../../../../common/FavoriteButton";
import TourInfo from "./TourInfo";
import { DiscountBadge, RemainingBadge } from "./TourBadge";

const TourBox = ({ item }) => {
  const { isFavorite, toggleFavorite } = useFavorite();
  
  const handleFavorite = (e) => {
    e.preventDefault();
    toggleFavorite(item);
  };

  return (
    <Link 
      href={`/tours/${item.id}`} 
      className="block h-full"
    >
      <div className="bg-white border border-gray-200 rounded-lg h-full flex flex-col">
        {/* بخش تصویر */}
        <div className="relative pt-[75%] overflow-hidden rounded-t-lg">
          <Image
            src="/japen.png"
            alt={item.title}
            fill
            className="object-cover"
          />
          
          {/* دکمه علاقه‌مندی */}
          <div className="absolute top-2 left-2 z-10">
            <FavoriteButton 
              isFavorite={isFavorite(item.id)} 
              onClick={handleFavorite}
            />
          </div>
          
          {/* نشان‌ها */}
          <div className="absolute bottom-2 right-2 flex gap-2">
            {item.price.hasDiscount && (
              <DiscountBadge 
                discount={Math.round(
                  ((item.price.original - item.price.discounted) / 
                  item.price.original) * 100
                )} 
              />
            )}
            <RemainingBadge remaining={item.remaining} />
          </div>
        </div>
        
        {/* اطلاعات تور */}
        <TourInfo 
          title={item.title}
          duration={item.duration.description}
          date={item.date}
          price={item.price}
        />
      </div>
    </Link>
  );
};

export default TourBox;

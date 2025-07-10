import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from '../../../../common/FavoriteButton';
import TourInfo from './TourInfo';
import { DiscountBadge, RemainingBadge } from './TourBadge';
import { useFavorite } from '../../../../../hooks/useFavorite';

const TourBox = ({ item }) => {
  const { isFavorite, toggleFavorite } = useFavorite();

  const handleFavorite = e => {
    e.preventDefault();
    toggleFavorite(item);
  };

  return (
    <Link href={`/tours/${item.id}`} className="block h-full">
      <div className="bg-white border border-gray-200 rounded-lg h-full flex flex-col">
        <div className="relative pt-[75%] overflow-hidden rounded-t-lg">
          <Image src="/japen.png" alt={item.title} fill className="object-cover" />

          <div className="absolute top-2 left-12 z-10">
            <FavoriteButton isFavorite={isFavorite(item.id)} onClick={handleFavorite} />
          </div>

          <div className="absolute bottom-2 right-2 flex gap-2">
            {item.price.hasDiscount && (
              <DiscountBadge
                discount={Math.round(
                  ((item.price.original - item.price.discounted) / item.price.original) * 100
                )}
              />
            )}
            <RemainingBadge remaining={item.remaining} />
          </div>
        </div>

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

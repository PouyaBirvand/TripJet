import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, BadgeAlert, BadgePercent, Clock, Calendar, Heart } from 'lucide-react';

const FavoriteItem = ({ tour, onRemoveFavorite, isRemoving }) => {
  return (
    <div className="h-full">
      <Link href={`/tours/${tour.id}`} className="block h-full">
        <div className="bg-white border border-slate-200 p-2 rounded-xl transition-all h-full flex flex-col">
          <div className="relative mb-3">
            <Image
              width={300}
              height={225}
              className="w-full h-[180px] rounded-lg object-cover"
              src="/japen.png"
              alt={tour.title}
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={e => onRemoveFavorite(e, tour)}
                disabled={isRemoving}
                className="btn btn-sm btn-circle bg-white/80 hover:bg-white text-red-500 border-none"
              >
                <Trash2 size={16} />
              </button>
              <button className="btn btn-sm btn-circle bg-white/80 hover:bg-white border-none">
                <Heart className="fill-red-500 text-red-500" size={16} />
              </button>
            </div>
            <div className="absolute flex flex-col gap-1.5 bottom-2 right-2">
              {tour.price.hasDiscount && (
                <div className="badge badge-sm badge-secondary py-1 px-2 text-xs">
                  <BadgePercent size={12} className="mr-1" />
                  {Math.round(
                    ((tour.price.original - tour.price.discounted) / tour.price.original) * 100
                  )}
                  ٪ تخفیف
                </div>
              )}
              <div className="badge badge-sm badge-primary py-1 px-2 text-xs">
                <BadgeAlert size={12} className="mr-1" />
                {tour.remaining} نفر باقیمانده
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <h5 className="font-bold text-base line-clamp-1">{tour.title}</h5>
            <p className="flex gap-1.5 items-center mt-2 text-sm text-gray-600">
              <Clock className="text-blue-600" size={14} />
              {tour.duration.description}
            </p>
            <p className="flex gap-1.5 items-center mt-1 text-sm text-gray-600">
              <Calendar className="text-blue-600" size={14} />
              {tour.date}
            </p>
          </div>
          <div className="flex justify-between items-end mt-3 pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-500">شروع قیمت از</span>
            <div className="text-left">
              {tour.price.hasDiscount && (
                <span className="line-through text-xs text-gray-500 block">
                  {tour.price.original.toLocaleString()} تومان
                </span>
              )}
              <h5 className="text-blue-600 font-bold text-sm">
                {tour.price.discounted.toLocaleString()} تومان
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FavoriteItem;
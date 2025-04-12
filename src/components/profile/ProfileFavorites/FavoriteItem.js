import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, BadgeAlert, BadgePercent, Clock, Calendar, Heart } from 'lucide-react';

const FavoriteItem = ({ tour, onRemoveFavorite, isRemoving }) => {
  return (
    <div className="relative">
      <Link href={`/tours/${tour.id}`}>
        <div className="bg-base-100 p-2 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="relative mb-4">
            <Image
              width={500}
              height={500}
              className="w-full rounded aspect-[4/3] object-cover"
              src="/japen.png"
              alt={tour.title}
            />
            <div className="absolute top-1 right-1 flex gap-2">
              <button
                onClick={e => onRemoveFavorite(e, tour)}
                disabled={isRemoving}
                className="btn btn-base-100 p-2 text-red-500 rounded-xl bg-white/70 backdrop-blur-md"
              >
                <Trash2 size={18} />
              </button>
              <button className="btn btn-base-100 p-2 !text-blue-600 rounded-xl bg-white/70 backdrop-blur-md">
                <Heart className="fill-red-500 text-red-500" />
              </button>
            </div>
            <div className="absolute flex gap-2 bottom-1 right-1">
              {tour.price.hasDiscount && (
                <div className="badge badge-soft badge-secondary py-3">
                  <BadgePercent />
                  {Math.round(
                    ((tour.price.original - tour.price.discounted) / tour.price.original) * 100
                  )}
                  ٪ تخفیف
                </div>
              )}
              <div className="badge badge-soft badge-primary py-3">
                <BadgeAlert />
                {tour.remaining} نفر باقیمانده
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-bold">{tour.title}</h5>
            <p className="flex gap-2 items-center mt-2">
              <Clock className="!text-blue-600" size={16} />
              {tour.duration.description}
            </p>
            <p className="flex gap-2 items-center mt-1">
              <Calendar className="!text-blue-600" size={16} />
              {tour.date}
            </p>
            <div className="flex justify-between items-end mt-3">
              <span className="text-sm text-gray-500">شروع قیمت از</span>
              <div className="text-left">
                {tour.price.hasDiscount && (
                  <span className="line-through text-sm text-gray-500 block">
                    {tour.price.original.toLocaleString()} تومان
                  </span>
                )}
                <h5 className="!text-blue-600 font-bold">
                  {tour.price.discounted.toLocaleString()} تومان
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FavoriteItem;

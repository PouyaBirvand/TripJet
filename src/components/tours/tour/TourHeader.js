'use client';
import { MapPin, Calendar, Users, Star, Clock, Plane } from 'lucide-react';
import { formatPrice } from '@/lib/utils/numbers';

export default function TourHeader({ tour, onShowMap }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        {/* Tour Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-2">
            <MapPin className="w-4 h-4" />
            {tour.destination}
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {tour.title}
          </h1>
          
          <p className="text-gray-600 text-lg mb-6">
            {tour.shortDescription}
          </p>

          {/* Quick Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm">{tour.duration.description}</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm">حداکثر {tour.maxCapacity} نفر</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm">هتل {tour.hotel.stars} ستاره</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm">{tour.date}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onShowMap}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Plane className="w-5 h-5" />
              مشاهده مسیر در نقشه
            </button>
            
            {/* <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors">
              <Star className="w-5 h-5" />
              افزودن به علاقه‌مندی‌ها
            </button> */}
          </div>
        </div>

        {/* Price Info */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 min-w-[280px]">
          <div className="text-center">
            {tour.price.hasDiscount && (
              <div className="text-gray-500 line-through text-lg mb-1">
                {formatPrice(tour.price.original)}
              </div>
            )}
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {formatPrice(tour.price.hasDiscount ? tour.price.discounted : tour.price.original)}
            </div>
            <div className="text-gray-600 text-sm mb-4">
              قیمت هر نفر
            </div>
            
            {tour.remaining <= 5 && (
              <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                تنها {tour.remaining} جا باقی مانده!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
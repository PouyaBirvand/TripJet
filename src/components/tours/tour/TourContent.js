'use client';
import { useState } from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Utensils,
  Bed,
  Shield,
  Car,
  Layers,
  ShoppingBag,
  Crown,
  OctagonAlert,
  MessageCircle,
} from 'lucide-react';
import TourCalendar from './TourCalendar';
import TourPlan from './TourPlan';
import Comments from '../../home/Comments/Comments';

const iconMap = {
  Calendar,
  MapPin,
  Users,
  Utensils,
  Bed,
  Shield,
  Car,
};

export default function TourContent({ tour }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'اطلاعات کلی', icon: MapPin },
    { id: 'itinerary', label: 'برنامه سفر', icon: Layers },
    { id: 'services', label: 'خدمات و امکانات', icon: Crown },
    { id: 'policies', label: 'قوانین و شرایط', icon: OctagonAlert },
    { id: 'comments', label: 'نظرات', icon: MessageCircle },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-blue-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Tour Calendar */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">تاریخ‌های در دسترس</h3>
                <TourCalendar availableDates={tour.availableDates} />
              </div>

              {/* Tour Info Grid */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">جزئیات تور</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tour.tourInfo.map(info => {
                    const Icon = iconMap[info.icon] || MapPin;
                    return (
                      <div
                        key={info.id}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{info.label}</h4>
                          <p className="text-gray-600 text-sm mt-1">{info.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">برنامه روزانه سفر</h3>
              <div className="space-y-4">
                {tour.tourPlans.map(plan => (
                  <TourPlan key={plan.id} {...plan} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="space-y-8">
              {/* Services */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Crown className="w-6 h-6 text-blue-600" />
                  خدمات شامل تور
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.services.map(service => (
                    <div
                      key={service.id}
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Tools */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <ShoppingBag className="w-6 h-6 text-blue-600" />
                  لوازم پیشنهادی
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {tour.requiredTools.map(tool => (
                    <div
                      key={tool.id}
                      className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">{tool.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policies' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <OctagonAlert className="w-6 h-6 text-blue-600" />
                قوانین کنسلی و شرایط
              </h3>
              <div className="space-y-3">
                {tour.policies.map(policy => (
                  <div key={policy.id} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-700">{policy.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'comments' && (
            <div>
              <Comments />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

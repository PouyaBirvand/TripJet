// components/booking/PersonalInfo/PassengerHistoryModal.js
'use client';
import { useState } from 'react';
import { X, Check, Users, SearchX, Plus, Search } from 'lucide-react';
import usePassengerData from '../../../hooks/usePassengerData';

export default function PassengerHistoryModal({ onClose, onSelect }) {
  const [selectedPassengers, setSelectedPassengers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { passengerHistory, isHistoryLoading } = usePassengerData();

  // تابع فیلتر بهبود یافته
  const filteredPassengers = searchTerm
    ? passengerHistory.filter(p => {
        const search = searchTerm.toLowerCase();
        return (
          p.name.toLowerCase().includes(search) ||
          p.type.toLowerCase().includes(search) ||
          p.birthDate.includes(search) ||
          p.gender.toLowerCase().includes(search)
        );
      })
    : passengerHistory;

  const togglePassengerSelection = passenger => {
    setSelectedPassengers(prev => {
      const exists = prev.some(p => p.id === passenger.id);
      return exists ? prev.filter(p => p.id !== passenger.id) : [...prev, passenger];
    });
  };

  const handleSubmit = () => {
    if (selectedPassengers.length > 0) {
      onSelect(selectedPassengers);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 animate-fade-in p-4 sm:p-6">
      <div className="bg-white rounded-xl animate-slide-up overflow-hidden w-full max-w-2/4 max-h-[90vh] flex flex-col relative">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold flex items-center gap-3">
            <div className="bg-blue-100 rounded-full p-2">
              <Users size={20} className="text-blue-600" />
            </div>
            لیست مسافران سابق
          </h2>
          <button
            onClick={onClose}
            className="rounded-full cursor-pointer hover:bg-gray-100 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 hover:text-gray-700"
            aria-label="بستن"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {isHistoryLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : passengerHistory.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <SearchX size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">مسافری پیدا نشد</h3>
              <p className="text-gray-500 max-w-md mb-6">
                هنوز هیچ مسافری در سیستم ثبت نشده است. پس از ثبت اولین سفر، مسافران شما در این قسمت
                نمایش داده خواهند شد.
              </p>
              <button
                onClick={onClose}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus size={18} />
                افزودن مسافر جدید
              </button>
            </div>
          ) : (
            <>
              {/* Search bar */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="جستجوی مسافر..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <Search className="text-gray-300" size={20} />
                  </div>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 hover:text-gray-600"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>
              </div>

              {filteredPassengers.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="bg-gray-100 rounded-full p-4 mb-4">
                    <SearchX size={40} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">نتیجه‌ای یافت نشد</h3>
                  <p className="text-gray-500 max-w-md mb-4">
                    مسافری با مشخصات وارد شده پیدا نشد. لطفاً معیارهای جستجوی خود را تغییر دهید.
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-blue-600 hover:underline"
                  >
                    پاک کردن جستجو
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-lg border border-gray-200">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-right py-3 px-4 font-medium text-gray-600 w-16">
                            انتخاب
                          </th>
                          <th className="text-right py-3 px-4 font-medium text-gray-600">
                            نام مسافر
                          </th>
                          <th className="text-right py-3 px-4 font-medium text-gray-600">
                            نوع مسافر
                          </th>
                          <th className="text-right py-3 px-4 font-medium text-gray-600">
                            تاریخ تولد
                          </th>
                          <th className="text-right py-3 px-4 font-medium text-gray-600">جنسیت</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPassengers.map((passenger, index) => (
                          <tr
                            key={index}
                            className={`border-t border-gray-200 hover:bg-slate-100/60 transition-colors ${
                              selectedPassengers.some(p => p.id === passenger.id)
                                ? 'bg-blue-50'
                                : ''
                            }`}
                          >
                            <td className="py-3 px-4">
                              <button
                                onClick={() => togglePassengerSelection(passenger)}
                                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all ${
                                  selectedPassengers.some(p => p.id === passenger.id)
                                    ? 'border-blue-500 bg-blue-500 text-white'
                                    : 'border-gray-300 hover:border-blue-400'
                                }`}
                                aria-label={
                                  selectedPassengers.some(p => p.id === passenger.id)
                                    ? 'حذف از انتخاب‌ها'
                                    : 'افزودن به انتخاب‌ها'
                                }
                              >
                                {selectedPassengers.some(p => p.id === passenger.id) ? (
                                  <Check size={16} />
                                ) : (
                                  <Plus size={16} />
                                )}
                              </button>
                            </td>
                            <td className="py-3 px-4 font-medium">{passenger.name}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs ${
                                  passenger.type === 'بزرگسال'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-amber-100 text-amber-700'
                                }`}
                              >
                                {passenger.type}
                              </span>
                            </td>
                            <td className="py-3 px-4">{passenger.birthDate}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs ${
                                  passenger.gender === 'مذکر'
                                    ? 'bg-indigo-100 text-indigo-700'
                                    : 'bg-pink-100 text-pink-700'
                                }`}
                              >
                                {passenger.gender}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0">
          <div className="text-sm text-gray-500">
            {selectedPassengers.length > 0 && (
              <span>{selectedPassengers.length} مسافر انتخاب شده</span>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
            >
              انصراف
            </button>
            <button
              onClick={handleSubmit}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedPassengers.length === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
              disabled={selectedPassengers.length === 0}
            >
              تأیید و افزودن مسافران ({selectedPassengers.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

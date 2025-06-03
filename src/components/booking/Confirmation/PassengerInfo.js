'use client';
import { Edit, Users, UserCheck } from 'lucide-react';
import { useState } from 'react';
import ErrorMessage from '../../../components/ui/ErrorMessage';
import LoadingSpinner from '../../../components/ui/LoadingSpinner';
import useBookingDetails from '../../../hooks/BookingHooks/useBookingDetails';

export default function PassengerInfo({ bookingId }) {
  const [editingPassengerId, setEditingPassengerId] = useState(null);
  const { bookingDetails, isLoading, error } = useBookingDetails(bookingId);

  const handleEdit = passengerId => {
    setEditingPassengerId(passengerId);
    alert(`ویرایش اطلاعات مسافر با شناسه ${passengerId}`);
  };

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  const passengers = bookingDetails?.passengers || [];
  return (
    <div className="bg-white rounded-xl border-slate-300 border  overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="flex items-center gap-2 font-semibold text-lg">
          <div className="bg-blue-100 p-2 rounded-full">
            <Users size={20} className="text-blue-600" />
          </div>
          اطلاعات مسافران
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-right py-4 px-6 font-medium text-gray-600">نام مسافر</th>
              <th className="text-right py-4 px-6 font-medium text-gray-600">نوع مسافر</th>
              <th className="text-right py-4 px-6 font-medium text-gray-600">تاریخ تولد</th>
              <th className="text-right py-4 px-6 font-medium text-gray-600">جنسیت</th>
              <th className="text-right py-4 px-6 font-medium text-gray-600">ویرایش اطلاعات</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger, index) => (
              <tr
                key={passenger.id}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} transition-colors`}
              >
                <td className="py-4 px-6 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    {passenger.name}
                    {passenger.isLeader && (
                      <div className="flex items-center gap-2  text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        <UserCheck size={14} className="mr-1" />
                        سرپرست
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-4 px-6 border-t border-gray-100">
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
                <td className="py-4 px-6 border-t border-gray-100">{passenger.birthDate}</td>
                <td className="py-4 px-6 border-t border-gray-100">
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
                <td className="py-4 px-6 border-t border-gray-100">
                  <button
                    onClick={() => handleEdit(passenger.id)}
                    className="p-2 text-blue-600 hover:bg-blue-100 rounded-full transition-colors"
                    aria-label="ویرایش اطلاعات مسافر"
                  >
                    <Edit size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

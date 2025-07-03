'use client';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import { Users } from 'lucide-react';
import PassengerForm from '../../../components/booking/PerosnalInfo/PassengerForm';
import TourReservationConfirmation from '../../../components/booking/PerosnalInfo/TourReservationConfirmation';
import usePassengerData from '../../../hooks/BookingHooks/usePassengerData';
import { getPersonalInfoInitialValue } from '../../../lib/formInitialValues';

export default function PersonalInfoPage() {
  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const { passengerHistory, isHistoryLoading, savePassengers } = usePassengerData();

  const handleSubmit = values => {
    savePassengers(values);
  };

  return (
    <div className="container mx-auto py-8 ">
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-8">
        <div className="p-6 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 rounded-full p-2">
              <Users size={24} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold">مشخصات مسافران</h2>
            </div>
          </div>
        </div>

        <Formik initialValues={getPersonalInfoInitialValue} onSubmit={handleSubmit}>
          <Form>
            <div className="p-6">
              <PassengerForm
                showPassengerModal={showPassengerModal}
                setShowPassengerModal={setShowPassengerModal}
                passengerHistory={passengerHistory}
                isLoading={isHistoryLoading}
              />
            </div>
            <div className="p-6 bg-blue-50 border-t border-blue-100">
              <TourReservationConfirmation />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

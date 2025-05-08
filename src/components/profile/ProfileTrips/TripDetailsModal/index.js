'use client';
import { useEffect, useState } from 'react';
import getStatusInfo from '../../../../lib/utils/statusInfo';
import ModalHeader from './ModalHeader';
import TripInfo from './TripInfo';
import ActionButtons from './ActionButtons';
import PassengerTable from './PassengerTable';
import TripDetails from './TripDetails';
import ModalFooter from './ModalFooter';
import { useUserProfile } from '../../../../hooks/ProfileHooks/useUserProfile';

const TripDetailsModal = ({ trip, onClose }) => {
  const { profile } = useUserProfile();
  
  const [passengers, setPassengers] = useState([]);
  const statusInfo = getStatusInfo(trip.status);

  useEffect(() => {
    if (trip.passengers && Array.isArray(trip.passengers)) {
      setPassengers(trip.passengers);
    } else {
      const defaultPassengers = [];
      const passengerCount = trip.participants || 2;
      
      defaultPassengers.push({
        name: profile ? `${profile.firstName} ${profile.lastName}` : 'کوروش صفایی',
        type: 'بزرگسال',
        birthDate: profile?.birth_date || '۱۳۶۲/۰۴/۲۳',
        gender: profile?.gender === 'male' ? 'مذکر' : 'مؤنث',
      });
      
      for (let i = 1; i < passengerCount; i++) {
        const isChild = i === passengerCount - 1;
        defaultPassengers.push({
          name: isChild ? `آریو بهرامی` : `علی بهرامی ${i}`,
          type: isChild ? 'کودک' : 'بزرگسال',
          birthDate: '۱۳۶۲/۰۴/۲۳',
          gender: 'مذکر',
        });
      }
      setPassengers(defaultPassengers);
    }
  }, [trip, profile]); // Update dependency here too

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <ModalHeader onClose={onClose} />
        <div className="p-6">
          <TripInfo trip={trip} statusInfo={statusInfo} />
          <ActionButtons />
          <PassengerTable passengers={passengers} />
          {trip.details && <TripDetails details={trip.details} />}
        </div>
        <ModalFooter onClose={onClose} />
      </div>
    </div>
  );
};

export default TripDetailsModal;
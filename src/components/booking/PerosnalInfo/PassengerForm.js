'use client';
import { FieldArray, useFormikContext } from 'formik';
import AdultPassengerSection from './AdultPassengerSection';
import ChildPassengerSection from './ChildPassengerSection';
import PassengerHistoryModal from './PassengerHistoryModal';
import { getAdultInitialValues, getChildInitialValues } from '../../../lib/formInitialValues';


const PassengerForm = ({
  showPassengerModal,
  setShowPassengerModal,
  passengerHistory,
  isLoading,
}) => {
  const { values, setFieldValue } = useFormikContext();

  const handleSelectPassengers = (selectedPassengers) => {
    const adultPassengers = selectedPassengers
      .filter(p => p.type === 'بزرگسال')
      .map(passenger => ({
        ...getAdultInitialValues,
        fullName: passenger.name,
        gender: passenger.gender === 'مذکر' ? 'مرد' : 'زن',
        birthDate: passenger.birthDate,
        isLeader: values.adults.length === 0,
      }));

    const childPassengers = selectedPassengers
      .filter(p => p.type === 'کودک')
      .map(passenger => ({
        ...getChildInitialValues,
        fullName: passenger.name,
        birthDate: passenger.birthDate,
      }));

    setFieldValue('adults', [...values.adults, ...adultPassengers]);
    setFieldValue('children', [...values.children, ...childPassengers]);
    setShowPassengerModal(false);
  };

  return (
    <>
      <FieldArray name="adults">
        {({ push: pushAdult, remove: removeAdult }) => (
          <AdultPassengerSection
            pushAdult={pushAdult}
            removeAdult={removeAdult}
            setFieldValue={setFieldValue}
            showPassengerModal={showPassengerModal}
            setShowPassengerModal={setShowPassengerModal}
            isLoading={isLoading}
          >
            {values.adults}
          </AdultPassengerSection>
        )}
      </FieldArray>

      <FieldArray name="children">
        {({ push: pushChild, remove: removeChild }) => (
          <ChildPassengerSection
            pushChild={pushChild}
            removeChild={removeChild}
            getChildInitialValues={getChildInitialValues}
          >
            {values.children}
          </ChildPassengerSection>
        )}
      </FieldArray>

      {showPassengerModal && (
        <PassengerHistoryModal
          passengers={passengerHistory || []}
          onClose={() => setShowPassengerModal(false)}
          onSelect={handleSelectPassengers}
        />
      )}
    </>
  );
};

export default PassengerForm;
export const getTravelInitialValues = (profile) => ({
  birthDate: profile?.birth_date || '',
  nationalId: profile?.national_id || '',
  passportExpiry: profile?.passport_expiry || '',
  passportNumber: profile?.passport_number || ''
});
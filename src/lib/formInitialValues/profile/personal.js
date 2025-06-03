export const getPersonalInitialValues = profile => ({
  firstName: profile?.firstName || '',
  lastName: profile?.lastName || '',
  firstNameEn: profile?.firstNameEn || '',
  lastNameEn: profile?.lastNameEn || '',
  gender: profile?.gender || 'male',
});

export const getContactInitialValuesForProfile = profile => ({
  phone: profile?.landline || '',
  mobile: profile?.phone || '',
  email: profile?.email || '',
  alternateEmail: profile?.alternateEmail || '',
});

export const getContactInitialValues = (profile) => ({
  phone: profile?.landline || '',
  mobile: profile?.phone || '',
  email: profile?.email || '',
  alternateEmail: profile?.alternateEmail || ''
});
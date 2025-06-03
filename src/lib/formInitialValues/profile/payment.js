export const getPaymentInitialValues = profile => ({
  accountNumber: profile?.bank_account || '',
  sheba: profile?.bank_sheba || '',
  cardNumber: profile?.bank_card || '',
});

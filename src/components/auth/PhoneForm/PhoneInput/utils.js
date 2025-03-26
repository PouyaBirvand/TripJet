export const getBorderColorClass = ({ isTouched, isError, isFocused, value }) => {
  if (isError && isTouched && !isFocused) return 'border-red-500';
  if (!isError && value && value.length === 10) return 'border-green-500';
  if (isFocused) return 'border-blue-500';
  return 'border-gray-300';
};
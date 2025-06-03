'use client';

export function AuthSubmitButton({
  isLoading,
  disabled,
  children,
  variant = 'primary',
  fullWidth = true,
}) {
  const baseClasses = `py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center
    focus:outline-none focus:ring-2 focus:ring-opacity-50 ${fullWidth ? 'w-full' : ''}`;

  const variantClasses = {
    primary: `bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 
      disabled:bg-blue-300 disabled:cursor-not-allowed disabled:hover:bg-blue-300`,
    secondary: `bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 
      focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed`,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      type="submit"
      disabled={disabled}
    >
      {isLoading ? (
        <span className="flex items-center justify-center">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin ml-2"></span>
          در حال پردازش...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

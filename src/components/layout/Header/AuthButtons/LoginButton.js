import { ArrowRight } from 'lucide-react';

const LoginButton = ({ className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn flex gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-6 transition-colors duration-200 ${className}`}
    >
      <ArrowRight className="w-5 h-5" />
      <span>ورود / ثبت نام</span>
    </button>
  );
};

export default LoginButton;

import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const MobileHeader = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <div className="lg:hidden flex items-center justify-between h-16 py-2">
      <button onClick={onMenuToggle} className="p-2 rounded-lg hover:bg-gray-100" aria-label="منو">
        {isMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>
      <Logo mobile className="mx-2" />
    </div>
  );
};

export default MobileHeader;
